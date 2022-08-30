import React from "react";
import "./Navigation.scss";

import { Link } from "react-router-dom";

// @ts-ignore
import Logo from "../../../../../assets/go_back.svg";

type NavigationProps = {
  image: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
};

const Navigation: React.FC<NavigationProps> = ({ image, title, subtitle }) => {
  return (
    <div className="nav">
      <Link to={"/"} className="nav-link">
        <img src={Logo} alt="nav-link__back" />
      </Link>

      <div className="nav-info">
        <img className="nav-info__ico" src={image} alt="" />
        <div className="nav-info__name_title">{title}</div>
        <div className="nav-info__name_subtitle">({subtitle})</div>
      </div>
    </div>
  );
};

export default Navigation;
