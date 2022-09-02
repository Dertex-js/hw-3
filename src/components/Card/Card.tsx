import React from "react";

import "./Card.scss";

export type CardProps = {
  image: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  content?: React.ReactNode;
  onClick?: React.MouseEventHandler;
};

const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  content,
  onClick,
}) => {
  return (
    <div className="coin" onClick={onClick}>
      <div className="coin-name">
        <img className="coin-name__img" src={image} alt="coin" />
        <div className="coin-name-text">
          <div className="coin-name-text__title">{title}</div>
          <div className="coin-name-text__descr">{subtitle}</div>
        </div>
      </div>
      {content}
    </div>
  );
};

export default Card;
