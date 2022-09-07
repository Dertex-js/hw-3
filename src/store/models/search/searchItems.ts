export type searchItemsApi = {
  id: string;
  name: string;
  large: string;
  symbol: string;
};

export type searchItemsModel = {
  id: string;
  name: string;
  large: string;
  symbol: string;
};

export const normalizeSearchItems = (
  from: searchItemsApi
): searchItemsModel => ({
  id: from.id,
  name: from.name,
  large: from.large,
  symbol: from.symbol,
});
