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
    <div className="item" onClick={onClick}>
      <img className="item__ico" src={image} alt="" />
      <div className="item-name">
        <div className="item-name__title">{title}</div>
        <div className="item-name__subtitle">{subtitle}</div>
      </div>
      {content}
    </div>
  );
};

export default Card;
