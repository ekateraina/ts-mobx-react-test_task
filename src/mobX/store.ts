import {action, makeObservable, observable, runInAction} from "mobx";
import {ApiCardData} from "../Interfaces & Types/Interfaces";
import {fetchData} from "../api/fetchApi";

export class CardDataStore {
    @observable cardsData:ApiCardData[] = []
    constructor() {
         makeObservable(this)
    }

    @action getDataCards = async () => {
        const data = await fetchData()
        runInAction(()=>{
            this.cardsData = data
        })
    }

    @action moveCards = (cards:ApiCardData[]) => {
        this.cardsData = cards
    }
}

export const cardStore =  new CardDataStore()

