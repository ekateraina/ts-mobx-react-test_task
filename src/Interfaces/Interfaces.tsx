import {CardDataStore} from "../mobX/store";

export interface ApiCardData {
    userId: number,
    id: number,
    title: string,
    body:string
}
//Костылечек для injected и TS в CardList.tsx 10-14 строка.
export interface MyComponentProps {
}
export interface InjectedProps extends MyComponentProps {
    cardStore: CardDataStore;
}