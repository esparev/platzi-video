import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/components/CarouselItem.scss";
import playButton from "../assets/static/icons8-play-64.png";
import plusButton from "../assets/static/icons8-plus-64.png";

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title} />
    <div className="carousel-item__details">
      <div>
        <img
          className="carousel-item__details--icon"
          src={playButton}
          alt="Play Button"
        />
        <img
          className="carousel-item__details--icon"
          src={plusButton}
          alt="Add Button"
        />
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">
        {`${year} ${contentRating} ${duration} minutes`}
      </p>
    </div>
  </div>
);

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default CarouselItem;
