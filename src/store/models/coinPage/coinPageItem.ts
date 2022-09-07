import {
  coinPageItemImageApi,
  coinPageItemImageModel,
  normalizeCoinPageItemImage,
} from "@store/models/coinPage/coinPageItemImage";

export type coinPageItemApi = {
  id: string;
  name: string;
  symbol: string;
  image: coinPageItemImageApi;
};

export type coinPageItemModel = {
  id: string;
  name: string;
  symbol: string;
  image: coinPageItemImageModel;
};

const normalizeCoinPageItem = (from: coinPageItemApi): coinPageItemModel => ({
  id: from.id,
  name: from.name,
  symbol: from.symbol,
  image: normalizeCoinPageItemImage(from.image),
});
