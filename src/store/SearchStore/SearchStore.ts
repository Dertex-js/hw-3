import coinsRequest from "@config/search_request";
import { fetchData } from "@store/SearchStore/types";
import axios from "axios";
import { action, computed, makeObservable, observable } from "mobx";

type PrivateFields = "_list";

export default class SearchStore {
  constructor() {
    makeObservable<SearchStore, PrivateFields>(this, {
      _list: observable.ref,
      data: computed,
      requestCoins: action,
    });
  }

  private _list: fetchData[] = [];

  async requestCoins(value: string | undefined) {
    this._list = [];
    this._list = (await axios.get(coinsRequest.getOne(value))).data.coins.map(
      (raw: fetchData) => ({
        id: raw.id,
        name: raw.name,
        large: raw.large,
        symbol: raw.symbol,
      })
    );
  }

  get data() {
    return this._list;
  }

  destroy() {}
}
