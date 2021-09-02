import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import notFoundImg from "../assets/static/404-error.svg";
import "../assets/styles/components/NotFound.scss";

const NotFound = () => (
  <div>
    <Header />
    <section className="not-found">
      <img
        className="not-found__img"
        src={notFoundImg}
        alt="404 Error Not Found"
      />
      <h2 className="not-found__title">Page Not Found</h2>
    </section>
    <Footer />
  </div>
);

export default NotFound;
