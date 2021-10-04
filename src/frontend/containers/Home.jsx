import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Search from "../components/Search";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import "../assets/styles/App.scss";

const Home = (props) => {
  const { user, myList, trends, originals, searchResult } = props;
  const hasUser = Object.keys(user).length > 0;

  useEffect(() => {
    document.title = "PlatziVideo";
  }, []);

  return (
    <>
      {hasUser ? null : <Redirect to="/login" />}
      <Search />

      {searchResult.length > 0 && (
        <Carousel title="Search Result">
          {searchResult.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      )}

      {myList.length > 0 && (
        <Carousel title="My List">
          {myList.map((item) => (
            <CarouselItem key={item.id} {...item} isList />
          ))}
        </Carousel>
      )}

      <Carousel title="Recommended For You">
        {trends.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Carousel>

      <Carousel title="PlatziVideo Originals">
        {originals.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Carousel>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    user: state.user,
    searchResult: state.searchResult,
  };
};

export default connect(mapStateToProps, null)(Home);
