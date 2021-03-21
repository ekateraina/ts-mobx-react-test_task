import {
  action,
  makeObservable,
  observable,
  runInAction,
  reaction,
} from "mobx";
import { ApiCardData, ApiCatData } from "../Interfaces & Types/Interfaces";
import { cardsFetchData, catsFetchData } from "../api/fetchApi";

export class DataStore {
  cardsData: ApiCardData[] | ApiCatData[] = [];
  catsData: ApiCatData[] = [];
  selectStatus = {
    currentOption: "",
    options: [
      { value: "cats", label: "cats" },
      { value: "cards", label: "cards" },
    ],
  };
  constructor() {
    makeObservable(this, {
      cardsData: observable,
      selectStatus: observable,
      getData: action,
      moveCards: action,
      changeSelectStatus: action,
    });
    reaction(
      // отслеживаем изменение select
      () => this.selectStatus.currentOption,
      async () => {
        // в зависимости от значения select делаем запрос на api cards/api cats
        if (this.selectStatus.currentOption === "cards") {
          await this.getData(cardsFetchData);
        } else if (this.selectStatus.currentOption === "cats") {
          await this.getData(catsFetchData);
        }
      }
    );
  }

  getData = async (fetch: Function) => {
    const data = await fetch();
    runInAction(() => {
      this.cardsData = data;
    });
  };

  // метод для drag&drop
  moveCards = (cards: ApiCardData[] | ApiCatData[]) => {
    this.cardsData = cards;
  };

  // метод для изменения состояния select
  changeSelectStatus = (status: string) => {
    this.selectStatus.currentOption = status;
  };
}

export const store = new DataStore();
