import React, { useEffect, useState } from "react";
import "./Market.scss";

import Card from "@components/Card";
import axios from "axios";
import { Link } from "react-router-dom";

const Market = () => {
  const [coins, setCoins] = useState<[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios({
        method: "get",
        url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
      });

      setCoins(
        result.data.map((raw: any) => ({
          id: raw.id,
          name: raw.name,
          image: raw.image,
          symbol: raw.symbol,
          current_price: raw.current_price,
        }))
      );
    };
    fetch();
  }, []);
  return (
    <div className="market">
      {coins.map((coin: any) => (
        <Link to={`/coin/${coin.id}`} key={coin.id}>
          <Card
            key={coin.id}
            image={coin.image}
            title={coin.name}
            subtitle={coin.symbol.toUpperCase()}
          />
        </Link>
      ))}
    </div>
  );
};

export default Market;
