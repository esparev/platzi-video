import React from "react";
import Header from "../components/Header.jsx";
import Search from "../components/Search.jsx";
import Carousel from "../components/Carousel.jsx";
import CarouselItem from "../components/CarouselItem.jsx";
import Footer from "../components/Footer.jsx";
import useInitialState from "../hooks/useInitialState.js";
import "../assets/styles/App.scss";

const API = process.env.API;

const Home = () => {
  const initialState = useInitialState(API);
  return initialState.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="App">
      <Header />
      <Search />

      {initialState.mylist.length > 0 && (
        <Carousel title="My List">
          {initialState.mylist.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      )}

      <Carousel title="Recommended For You">
        {initialState.trends.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Carousel>

      <Carousel title="PlatziVideo Originals">
        {initialState.originals.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Carousel>
      <Footer />
    </div>
  );
};

export default Home;
