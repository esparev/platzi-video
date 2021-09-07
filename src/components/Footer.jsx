import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Footer.scss";

const Footer = () => (
  <footer className="footer">
    <Link className="footer--link" to="/terms">Terms of use</Link>
    <Link className="footer--link" to="/privacy">Privacy Statement</Link>
    <Link className="footer--link" to="/help">Help Center</Link>
  </footer>
);

export default Footer;
