import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Footer.scss";

const Footer = () => (
  <footer className="footer">
    <Link to="/terms">Terms of use</Link>
    <Link to="/privacy">Privacy Statement</Link>
    <Link to="/help">Help Center</Link>
  </footer>
);

export default Footer;
