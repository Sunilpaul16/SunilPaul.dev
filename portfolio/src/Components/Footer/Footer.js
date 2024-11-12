import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import "./Footer.css";
import SocialMediaIcons from "./SocialMediaIcons";

function Footer() {
  return (
    <footer className="footer">
      <SocialMediaIcons />
    </footer>
  );
}

export default Footer;
