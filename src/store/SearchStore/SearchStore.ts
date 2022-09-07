import coinsRequest from "@config/search_request";
import {
  normalizeSearchItems,
  searchItemsModel,
} from "@store/models/search/searchItems";
import {
  CollectionModel,
  getInitialCollectionModel,
  linearizeCollection,
  normalizeCollection,
} from "@store/models/shared/collection";
import axios from "axios";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

type PrivateFields = "_list";

export default class SearchStore {
  constructor() {
    makeObservable<SearchStore, PrivateFields>(this, {
      _list: observable.ref,
      data: computed,
      requestCoins: action,
    });
  }

  private _list: CollectionModel<string, searchItemsModel> =
    getInitialCollectionModel();

  async requestCoins(value: string | undefined) {
    this._list = getInitialCollectionModel();
    const response: searchItemsModel[] = (
      await axios.get(coinsRequest.getOne(value))
    ).data.coins;

    runInAction(() => {
      const list: searchItemsModel[] = [];
      for (const item of response) {
        list.push(normalizeSearchItems(item));
      }
      this._list = normalizeCollection(list, (listItem) => listItem.id);
    });
  }

  get data() {
    return linearizeCollection(this._list);
  }

  destroy() {}
}
