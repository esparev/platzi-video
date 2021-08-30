import React from "react";
import "../assets/styles/components/Search.scss";

const Search = () => (
  <section className="main">
    <h2 className="main__title">What do you want to watch today?</h2>
    <input className="input" type="text" placeholder="Search..." />
  </section>
);

export default Search;
