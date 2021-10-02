import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import PropTypes from "prop-types";
import { getVideoSource } from "../actions";
import "../assets/styles/components/Player.scss";

const Player = (props) => {
  const { match, playing } = props;
  const { id } = match.params;
  const hasPlaying = Object.keys(playing).length > 0;

  useEffect(() => {
    document.title = `PlatziVideo • ${playing.title}`;
    props.getVideoSource(id);
  }, [playing.title]);

  return hasPlaying ? (
    <div className="player">
      <video controls autoPlay>
        <source src={playing.source} type="video/mp4" />
      </video>
      <div className="player__info">
        <h1 className="player__title--main">{playing.title}</h1>
        <p className="player__info--description">{playing.description}</p>
        <h2 className="player__about--title">About</h2>
        <ul className="player__about">
          <li className="player__about--info">
            Duration:
            {" "}
            <strong>
              {playing.duration}
              {" "}
              minutes
            </strong>
          </li>
          <li className="player__about--info">
            Language:
            {" "}
            <strong>{playing.language}</strong>
          </li>
          <li className="player__about--info">
            Genre:
            {" "}
            <strong>{playing.type}</strong>
          </li>
          <li className="player__about--info">
            Rating:
            {" "}
            <strong>{playing.contentRating}</strong>
          </li>
          <li className="player__about--info">
            Year:
            {" "}
            <strong>{playing.year}</strong>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    setTimeout(<Redirect to="/404" />, 3000)
  );
};

Player.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  duration: PropTypes.number,
  language: PropTypes.string,
  type: PropTypes.string,
  contentRating: PropTypes.string,
  year: PropTypes.number,
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
