const config = {
  getOne: (id: string | undefined) =>
    `https://api.coingecko.com/api/v3/coins/${id}`,
};

export default config;
