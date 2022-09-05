import coinsRequest from "@config/requests";
import { fetchData } from "@store/MarketStore/types";
import axios from "axios";
import { makeAutoObservable } from "mobx";

export default class MarketStore {
  constructor() {
    makeAutoObservable(this);
  }

  private _list: fetchData[] = [];

  async requestCoins() {
    this._list = (await axios(coinsRequest)).data.map((raw: fetchData) => ({
      id: raw.id,
      name: raw.name,
      image: raw.image,
      symbol: raw.symbol,
      current_price: raw.current_price,
    }));
  }

  get data() {
    return this._list;
  }

  destroy() {}
}
