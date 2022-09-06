import coinsRequest from "@config/market_request";
import { fetchData } from "@store/MarketStore/types";
import axios from "axios";
import { makeAutoObservable } from "mobx";

export default class MarketStore {
  constructor() {
    makeAutoObservable(this);
  }

  private _list: fetchData[] = [];

  async requestCoins(page: number) {
    const list: fetchData[] = (
      await axios.get(coinsRequest.url(page))
    ).data.map((raw: fetchData) => ({
      id: raw.id,
      name: raw.name,
      image: raw.image,
      symbol: raw.symbol,
      current_price: raw.current_price,
    }));
    this._list = [...this._list, ...list];
  }

  get data() {
    return this._list;
  }

  destroy() {}
}
