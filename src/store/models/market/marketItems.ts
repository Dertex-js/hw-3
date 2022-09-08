export type marketItemsApi = {
  id: string;
  name: string;
  image: string;
  symbol: string;
  current_price: string;
};

export type marketItemsModel = {
  id: string;
  name: string;
  image: string;
  symbol: string;
  currentPrice: string;
};

export const normalizeMarketItems = (
  from: marketItemsApi
): marketItemsModel => ({
  id: from.id,
  name: from.name,
  image: from.image,
  symbol: from.symbol,
  currentPrice: from.current_price,
});
