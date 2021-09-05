import React, { useEffect } from "react";
import { connect } from "react-redux";
import Search from "../components/Search.jsx";
import Carousel from "../components/Carousel.jsx";
import CarouselItem from "../components/CarouselItem.jsx";
import "../assets/styles/App.scss";

const Home = ({ myList, trends, originals }) => {
  useEffect(() => {
    document.title = "PlatziVideo";
  }, []);
  return (
    <>
      <Search />

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
  };
};

export default connect(mapStateToProps, null)(Home);
