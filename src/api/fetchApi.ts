import {ApiCardData, ApiCatData} from "../Interfaces & Types/Interfaces";
import {cardsFetchUrl, catsFetchUrl} from "../Utils/Urls";

export const cardsFetchData = ():Promise<ApiCardData[]> => {
    return fetch(cardsFetchUrl).then(res=>res.json())
}

export const catsFetchData = ():Promise<ApiCatData[]> => {
    return fetch(catsFetchUrl).then(res=>res.json())
}