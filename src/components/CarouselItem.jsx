import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setFavorite } from "../actions";
import "../assets/styles/components/CarouselItem.scss";
import playButton from "../assets/static/icons8-play-64.png";
import plusButton from "../assets/static/icons8-plus-64.png";

const CarouselItem = (props) => {
  const { cover, title, year, contentRating, duration } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      cover,
      title,
      year,
      contentRating,
      duration,
    });
  };
  return (
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
            onClick={handleSetFavorite}
          />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration} minutes`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
