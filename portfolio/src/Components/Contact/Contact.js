import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import LightWave from '../Waver/LightWave';
import './Contact.css';
import { FaLinkedin, FaMailBulk } from "react-icons/fa";

const Contact = () => (
  <section id="contact" className="contact">
  <div data-aos="fade-right" className="contact__body">
    <h2 className="contact__heading">Contact Me</h2>

    <div className="contact__option">
      <FaMailBulk className="contact__logo" size={45} />
      <a href="mailto: jparsons@ualberta.ca">
        <span className="contact__text">Sunilpaul16@gmail.com</span>
      </a>
    </div>
    <div className="contact__option">
      <FaLinkedin className="contact__logo" size={45} />
      <a
        href="https://www.linkedin.com/in/sunilpaul16/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my Linkedin"
      >
        <span className="contact__text">Sunil-Paul</span>
      </a>
    </div>
  </div>
  <LightWave />
</section>
);

export default Contact;
