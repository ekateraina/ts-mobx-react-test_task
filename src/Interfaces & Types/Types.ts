import {ApiCardData, ApiCatData} from './Interfaces'

export type cardProps = {
    cat?: ApiCatData,
    card?: ApiCardData,
    index: number
}

export type OptionType = { value: string , label: string} | null