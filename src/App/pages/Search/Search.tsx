import React, { useEffect, useState } from "react";

import Logo from "@assets/input-search.png";
import Button from "@components/Button";
import Card from "@components/Card";
import { searchItemsModel } from "@store/models/search/searchItems";
import rootStore from "@store/RootStore";
import SearchStore from "@store/SearchStore";
import { useLocalStore } from "@utils/useLocalStore";
import { observer } from "mobx-react-lite";
import { Link, useSearchParams } from "react-router-dom";
import "./Search.scss";
import * as Router from "react-router-dom";

const Search = () => {
  const searchStore = useLocalStore(() => new SearchStore());
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("query") || "";
  const handleSearch = (e: any) => {
    const query = e.target.value;

    if (query) {
      setSearchParams({ query });
      searchStore.requestCoins(query);
    } else {
      setSearchParams({});
    }
  };

  // const { search } = Router.useLocation();
  // rootStore.query.setSearch(search);
  // const [value, setValue] = useState("");
  // useEffect(() => {
  //   if (value) {
  //     searchStore.requestCoins(value);
  //   }
  // }, [searchStore, value]);

  return (
    <div className="wrapper-search">
      <section className="search">
        <div className="search-input">
          <img className="search-input__ico" src={Logo} alt="Search" />
          <input
            className="search-input__input"
            type="text"
            placeholder="Search Cryptocurrency"
            onChange={handleSearch}
            value={searchTerm}
          />
        </div>
        <Link to={"/"} className="search__btn">
          <Button />
        </Link>
      </section>
      <section className="coins__list">
        {searchStore.data.map((coin: searchItemsModel) => (
          <Link to={`/coin/${coin.id}`} key={coin.id}>
            <Card
              key={coin.id}
              image={coin.large}
              title={coin.name}
              subtitle={coin.symbol.toUpperCase()}
            />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default observer(Search);
