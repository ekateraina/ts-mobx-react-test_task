import {action, makeObservable, observable, runInAction, reaction} from "mobx";
import {ApiCardData, ApiCatData} from "../Interfaces & Types/Interfaces";
import {cardsFetchData, catsFetchData} from "../api/fetchApi";

export class DataStore {
    @observable cardsData:ApiCardData[] = []
    @observable catsData:ApiCatData[] = []
    @observable selectStatus = {currentOption: '', options:[{id: 1, value: 'cats'}, {id: 2, value: 'cards'}]}
    constructor() {
         makeObservable(this)
    }


    @action getDataCards = async () => {
        const data = await cardsFetchData()
        runInAction(()=>{
            this.cardsData = data
        })
    }

    @action getDataCats = async () => {
        const data = await catsFetchData()
        runInAction(()=>{
            this.catsData = data
        })
    }

    @action moveCards = (cards:ApiCardData[]) => {
        this.cardsData = cards
    }
}

export const store =  new DataStore()

