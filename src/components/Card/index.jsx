import React from "react";
import PropTypes from "prop-types";
import { FlexBox, Alignment } from "@lumx/react";

const Card = ({ picture, name, description, comics, series, stories }) => {
  return (
    <FlexBox vAlign={Alignment.spaceAround}>
      <div className="card">
        <img className="card__picture" src={picture} alt={name} />
        <h1 className="card__title">{name}</h1>
        <p className="card__description">{description}</p>
        <div className="card__info">
          <p className="card__info__item"># comics: {comics}</p>
          <p className="card__info__item"># series: {series}</p>
          <p className="card__info__item"># stories: {stories}</p>
        </div>
      </div>
    </FlexBox>
  );
};

Card.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  comics: PropTypes.number.isRequired,
  series: PropTypes.number.isRequired,
  stories: PropTypes.number.isRequired,
};

export default Card;
