import {CardDataStore} from "../mobX/store";

export interface ApiCardData {
    userId: number,
    id: number,
    title: string,
    body:string
}

export interface OnSortEnd{
    oldIndex: number,
    newIndex: number,
}

export interface InjectedProps{
    cardStore: CardDataStore;
}
