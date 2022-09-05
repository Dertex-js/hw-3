import coinsRequest from "@config/market_request";
import { fetchData } from "@store/MarketStore/types";
import axios from "axios";
import { action, computed, makeObservable, observable } from "mobx";

type PrivateFields = "_list";

export default class MarketStore {
  constructor() {
    makeObservable<MarketStore, PrivateFields>(this, {
      requestCoins: action,
      _list: observable.ref,
      data: computed,
    });
  }

  private _list: fetchData[] = [];

  async requestCoins(page: number) {
    this._list = [];
    this._list = (await axios.get(coinsRequest.url(page))).data.map(
      (raw: fetchData) => ({
        id: raw.id,
        name: raw.name,
        image: raw.image,
        symbol: raw.symbol,
        current_price: raw.current_price,
      })
    );
  }

  get data() {
    return this._list;
  }

  destroy() {}
}
