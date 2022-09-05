import config from "@config/config";
import { fetchData } from "@store/CoinPageStore/types";
import axios from "axios";
import { makeAutoObservable } from "mobx";

export default class CoinPageStore {
  constructor() {
    makeAutoObservable(this);
  }

  private _list: fetchData | null = null;

  async requestCoin(id: string | undefined) {
    const result = await axios({
      method: "get",
      url: config.getOne(id),
    });
    this._list = result.data;
  }

  get data() {
    return this._list;
  }

  destroy() {}
}
