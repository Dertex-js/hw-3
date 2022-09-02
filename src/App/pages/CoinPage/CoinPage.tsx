import React, { useEffect, useState } from "react";

import axios from "axios";
import "./CoinPage.scss";
import { useParams } from "react-router-dom";

import CoinInfo from "./components/CoinInfo";
import Navigation from "./components/Navigation";

const CoinPage = () => {
  const [coin, setCoin] = useState<{
    id: string;
    name: string;
    symbol: string;
    image: { small: string };
  }>({ id: "", name: "", symbol: "", image: { small: "" } });
  const { id } = useParams();
  useEffect(() => {
    const fetch = async () => {
      const result = await axios({
        method: "get",
        url: `https://api.coingecko.com/api/v3/coins/${id}`,
      });
      setCoin(result.data);
    };
    fetch();
  }, [id]);

  return (
    <div className="wrapper-coin-page">
      <Navigation
        key={coin.id}
        image={coin.image.small}
        title={coin.name}
        subtitle={coin.symbol.toUpperCase()}
      />
      <CoinInfo />
    </div>
  );
};

export default React.memo(CoinPage);
