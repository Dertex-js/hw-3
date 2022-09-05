const coinsRequest = {
  getOne: (value: string | undefined) =>
    `https://api.coingecko.com/api/v3/search?query=${value}`,
};

export default coinsRequest;
