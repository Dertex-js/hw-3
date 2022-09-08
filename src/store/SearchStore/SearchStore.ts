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
import rootStore from "@store/RootStore";
import axios from "axios";
import {
  action,
  computed,
  IReactionDisposer,
  makeObservable,
  observable,
  reaction,
  runInAction,
} from "mobx";
import * as qs from "qs";

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

  async requestCoins(
    value: undefined | string | string[] | qs.ParsedQs | qs.ParsedQs[]
  ) {
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

  destroy() {
    this._qrReaction();
  }

  private readonly _qrReaction: IReactionDisposer = reaction(
    () => rootStore.query.getParam("query"),
    (search) => {
      // eslint-disable-next-line no-console
      console.log(search);
    }
  );

  get search() {
    return this._qrReaction();
  }
}
