import { DataStore } from "../mobX/store";

export interface InjectedProps {
  store: DataStore;
}

export interface ApiCardData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ApiCatData {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface OnSortEnd {
  oldIndex: number;
  newIndex: number;
}

