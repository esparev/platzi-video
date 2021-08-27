import React from "react";
import "../assets/styles/components/Carousel.scss";

const Carousel = ({ children, title }) => (
  <section className="carousel">
    <h2 className="carousel__title">{title}</h2>
    <div className="carousel__container">{children}</div>
  </section>
);

export default Carousel;
