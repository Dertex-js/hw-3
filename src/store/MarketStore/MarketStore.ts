import coinsRequest from "@config/market_request";
import { fetchData } from "@store/MarketStore/types";
import axios from "axios";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

type PrivateFields = "_list";

export default class MarketStore {
  constructor() {
    makeObservable<MarketStore, PrivateFields>(this, {
      _list: observable,
      data: computed,
      requestCoins: action,
    });
  }
  private _list: fetchData[] = [];
  page: number = 0;
  async requestCoins() {
    this.page++;
    const list: fetchData[] = (
      await axios.get(coinsRequest.url(this.page))
    ).data.map((raw: fetchData) => ({
      id: raw.id,
      name: raw.name,
      image: raw.image,
      symbol: raw.symbol,
      current_price: raw.current_price,
    }));
    runInAction(() => {
      this._list = [...this._list, ...list];
    });
  }

  get data() {
    return this._list;
  }

  destroy() {}
}
