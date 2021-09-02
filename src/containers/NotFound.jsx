import React from "react";
import notFoundImg from "../assets/static/404-error.svg";
import "../assets/styles/components/NotFound.scss";

const NotFound = () => (
  <>
    <section className="not-found">
      <img
        className="not-found__img"
        src={notFoundImg}
        alt="404 Error Not Found"
      />
      <h2 className="not-found__title">Page Not Found</h2>
    </section>
  </>
);

export default NotFound;
