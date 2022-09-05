import React, { useEffect } from "react";

import "./Market.scss";

import dropDownIco from "@assets/dropdown-ico.svg";
import searchLogo from "@assets/search.svg";
import Card from "@components/Card";
import MarketStore from "@store/MarketStore";
import { fetchData } from "@store/MarketStore/types";
import { useLocalStore } from "@utils/useLocalStore";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const Market = () => {
  const marketStore = useLocalStore(() => new MarketStore());

  useEffect(() => {
    marketStore.requestCoins();
  }, [marketStore]);

  return (
    <div className="wrapper-market">
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
          <img className="dropdown__ico" src={dropDownIco} alt="Drop down" />
        </div>
      </section>
      <nav className="categories">
        <ul className="categories__list">
          <li className="categories__list-item">
            <Link to={"#"}>
              <div className="categories__link">All</div>
            </Link>
          </li>
          <li className="categories__list-item categories__list-item_active">
            <Link to={"#"}>
              <div className="categories__link">Gainer</div>
            </Link>
          </li>
          <li className="categories__list-item">
            <Link to={"#"}>
              <div className="categories__link">Loser</div>
            </Link>
          </li>
          <li className="categories__list-item">
            <Link to={"#"}>
              <div className="categories__link">Favourites</div>
            </Link>
          </li>
        </ul>
      </nav>
      <section className="coins">
        <div className="coins__list">
          {marketStore.data.map((coin: fetchData) => (
            <Link to={`/coin/${coin.id}`}>
              <Card
                key={coin.id}
                image={coin.image}
                title={coin.name}
                subtitle={coin.symbol.toUpperCase()}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default observer(Market);
