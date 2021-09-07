import React from "react";
import { getSearchResult } from "../actions";
import { connect } from "react-redux";
import "../assets/styles/components/Search.scss";

const Search = (props) => {
  const { getSearchResult } = props;

  const handleInput = (event) => {
    getSearchResult(event.target.value);
  };
  return (
    <section className="main">
      <h2 className="main__title">What do you want to watch today?</h2>
      <input
        name="search"
        className="input"
        type="text"
        placeholder="Search..."
        onKeyUp={handleInput}
      />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    searchResult: state.searchResult,
  };
};

const mapDispatchToProps = {
  getSearchResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
