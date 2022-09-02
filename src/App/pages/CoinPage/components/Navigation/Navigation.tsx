import React from "react";

import Logo from "@assets/go_back.svg";
import { routes } from "@config/routes";
import "./Navigation.scss";
import { Link } from "react-router-dom";

type NavigationProps = {
  image: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
};

const Navigation: React.FC<NavigationProps> = ({ image, title, subtitle }) => {
  return (
    <div className="nav">
      <Link to={routes.market} className="nav__link">
        <img src={Logo} alt="nav__link_back" />
      </Link>

      <div className="nav-info">
        <img className="nav-info__ico" src={image} alt="Back" />
        <div className="nav-info__name_title">{title}</div>
        <div className="nav-info__name_subtitle">({subtitle})</div>
      </div>
    </div>
  );
};

export default React.memo(Navigation);
