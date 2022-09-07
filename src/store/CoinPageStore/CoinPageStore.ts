import config from "@config/config";
import { coinPageItemApi, coinPageItemModel } from "@store/models/coinPage";
import axios from "axios";
import { makeAutoObservable } from "mobx";

export default class CoinPageStore {
  constructor() {
    makeAutoObservable(this);
  }

  private _list: coinPageItemModel | null = null;

  async requestCoin(id: string | undefined) {
    const response: coinPageItemApi = (
      await axios({
        method: "get",
        url: config.getOne(id),
      })
    ).data;

    this._list = response;
  }

  get data() {
    return this._list;
  }

  destroy() {}
}
