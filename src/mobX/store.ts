import {action, makeObservable, observable, runInAction, reaction} from "mobx";
import {ApiCardData, ApiCatData} from "../Interfaces & Types/Interfaces";
import {cardsFetchData, catsFetchData} from "../api/fetchApi";

export class DataStore {
    cardsData:ApiCardData[] = []
    catsData:ApiCatData[] = []
    selectStatus = {currentOption: '', options:[{id: 1, value: 'cats'}, {id: 2, value: 'cards'}]}
    constructor() {
         makeObservable(this,{
                cardsData: observable,
                catsData: observable,
                selectStatus: observable,
                getDataCards: action,
                getDataCats: action,
                moveCards: action,
                changeSelectStatus: action
            })
         reaction(() => this.selectStatus.currentOption, async () => { 
             if(this.selectStatus.currentOption==='cards'){
                await this.getDataCards()  
                runInAction(()=>{
                    this.catsData = []                
                })
             }else if(this.selectStatus.currentOption==='cats'){
                await this.getDataCats()
                runInAction(()=>{
                    this.cardsData = []
                })
             }
          })
        }
        
    getDataCards = async () => {
        const data = await cardsFetchData()
        runInAction(()=>{
            this.cardsData = data
        })
    }

    getDataCats = async () => {
        const data = await catsFetchData()
        runInAction(()=>{
            this.catsData = data
        })
    }

    moveCards = (cards:ApiCardData[]) => {
           this.cardsData = cards
    }

    moveCats = (cats:ApiCatData[]) => {
        this.catsData = cats
    }

    changeSelectStatus = (status:string) => {
        this.selectStatus.currentOption = status
    }
}

export const store =  new DataStore()

