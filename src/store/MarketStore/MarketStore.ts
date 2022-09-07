import coinsRequest from "@config/market_request";
import {
  marketItemsApi,
  marketItemsModel,
  normalizeMarketItems,
} from "@store/models/market/marketItems";
import {
  CollectionModel,
  getInitialCollectionModel,
  linearizeCollection,
  normalizeCollection,
} from "@store/models/shared/collection";
import { ILocalStore } from "@utils/useLocalStore";
import axios from "axios";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
  toJS,
} from "mobx";

type PrivateFields = "_list";

export default class MarketStore implements ILocalStore {
  constructor() {
    makeObservable<MarketStore, PrivateFields>(this, {
      _list: observable,
      data: computed,
      requestCoins: action,
      page: observable,
    });
  }

  private _list: CollectionModel<string, marketItemsModel> =
    getInitialCollectionModel();

  page: number = 0;

  merge(
    destination: CollectionModel<any, any>,
    source: CollectionModel<any, any>
  ): CollectionModel<any, any> {
    const toAdd = source.order.filter((k) => !destination.order.includes(k));
    const result: CollectionModel<any, any> = getInitialCollectionModel();

    for (const key of destination.order) {
      result.order.push(key);
      result.entities[key] = destination.entities[key];
    }

    for (const key of toAdd) {
      result.order.push(key);
      result.entities[key] = source.entities[key];
    }

    return result;
  }

  async requestCoins() {
    this.page++;
    const response: marketItemsApi[] = (
      await axios.get(coinsRequest.url(this.page))
    ).data;

    runInAction(() => {
      try {
        const list: marketItemsModel[] = [];
        for (const item of response) {
          list.push(normalizeMarketItems(item));
        }
        this._list = this.merge(
          this._list,
          normalizeCollection(list, (listItem) => listItem.id)
        );
        // eslint-disable-next-line no-console
        console.log(toJS(this._list));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        this._list = {
          order: [],
          entities: {},
        };
      }
    });
  }

  get data(): marketItemsModel[] {
    return linearizeCollection(this._list);
  }

  destroy(): void {
    this._list = getInitialCollectionModel();
  }
}
