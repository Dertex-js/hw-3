import { makeAutoObservable } from "mobx";

import { fetchData } from "../../App/pages/Market/Market";

export default class MarketStore {
  constructor() {
    makeAutoObservable(this);
  }

  private _list: fetchData[] = [];
}
