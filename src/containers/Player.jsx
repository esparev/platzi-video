import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import PropTypes from "prop-types";
import { getVideoSource } from "../actions";
import "../assets/styles/components/Player.scss";

const Player = (props) => {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    document.title = `PlatziVideo • ${props.playing.title}`;
    props.getVideoSource(id);
  }, [props.playing.title]);

  return hasPlaying ? (
    <div className="player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="player__info">
        <h1 className="player__title--main">{props.playing.title}</h1>
        <p className="player__info--description">{props.playing.description}</p>
        <h2 className="player__about--title">About</h2>
        <ul className="player__about">
          <li className="player__about--info">
            Duration: <strong>{props.playing.duration} minutes</strong>
          </li>
          <li className="player__about--info">
            Language: <strong>{props.playing.language}</strong>
          </li>
          <li className="player__about--info">
            Genre: <strong>{props.playing.type}</strong>
          </li>
          <li className="player__about--info">
            Rating: <strong>{props.playing.contentRating}</strong>
          </li>
          <li className="player__about--info">
            Year: <strong>{props.playing.year}</strong>
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
