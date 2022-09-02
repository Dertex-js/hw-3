import React, { useEffect, useState } from "react";

import config from "@config/config";
import axios from "axios";
import "./CoinPage.scss";
import { useParams } from "react-router-dom";

import CoinInfo from "./components/CoinInfo";
import Navigation from "./components/Navigation";

const CoinPage = () => {
  const [coin, setCoin] = useState<null | {
    id: string;
    name: string;
    symbol: string;
    image: { small: string };
  }>(null);
  const { id } = useParams();
  useEffect(() => {
    const requestCoin = async () => {
      const result = await axios({
        method: "get",
        url: config.getOne(id),
      });
      setCoin(result.data);
    };
    requestCoin();
  }, [id]);

  return (
    <div className="wrapper-coin-page">
      {coin && (
        <Navigation
          key={coin.id}
          image={coin.image.small}
          title={coin.name}
          subtitle={coin.symbol.toUpperCase()}
        />
      )}
      <CoinInfo />
    </div>
  );
};

export default React.memo(CoinPage);
