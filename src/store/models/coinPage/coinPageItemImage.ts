export type coinPageItemImageApi = {
  small: string;
};

export type coinPageItemImageModel = {
  small: string;
};

export const normalizeCoinPageItemImage = (
  from: coinPageItemImageApi
): coinPageItemImageModel => ({
  small: from.small,
});
