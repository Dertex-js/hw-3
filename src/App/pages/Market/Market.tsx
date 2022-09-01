import React, { useEffect, useState } from "react";

import "./Market.scss";

import Card from "@components/Card";
import axios from "axios";
import { Link } from "react-router-dom";
import searchLogo from "src/assets/search.svg";

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
      <section className="title">
        <div className="title__text">
          <h2 className="title__info bold">
            Market is down <span className="fall backend">- 11.17%</span>
          </h2>
          <p className="title__descr">In the past 24 hours</p>
        </div>
        <button className="title__search">
          <img src={searchLogo} alt="search" />
        </button>
      </section>
      <section className="filter">
        <h1 className="filter__title bold">Coins</h1>
        <div className="dropdown" role="button" tabIndex={0}>
          Market- INR
        </div>
      </section>
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
