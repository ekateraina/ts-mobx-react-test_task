import {makeObservable, observable, runInAction} from "mobx";
import {ApiCardData} from "../Interfaces/Interfaces";
import {fetchData} from "../api/fetchApi";

export class CardDataStore {
     cardsData:ApiCardData[] = []
    constructor() {
         makeObservable(this,{
             cardsData:observable
         })
    }
    getDataCards = async () => {
        const data = await fetchData()
        runInAction(()=>{
            this.cardsData = data
        })
    }


}

export const cardStore =  new CardDataStore()

