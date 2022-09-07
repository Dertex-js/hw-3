import * as qs from "qs";

const coinsRequest = {
  getOne: (
    value: undefined | string | string[] | qs.ParsedQs | qs.ParsedQs[]
  ) => `https://api.coingecko.com/api/v3/search?query=${value}`,
};

export default coinsRequest;
