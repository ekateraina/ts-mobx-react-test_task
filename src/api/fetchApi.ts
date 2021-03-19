import {ApiCardData} from "../Interfaces & Types/Interfaces";
import {fetchUrl} from "../Utils/Urls";

export const fetchData = ():Promise<ApiCardData[]> => {
    return fetch(fetchUrl).then(res=>res.json())
}