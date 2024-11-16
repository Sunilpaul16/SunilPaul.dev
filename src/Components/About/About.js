import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import LightWave from '../Waves/LightWave';

import './About.css';

const About = () => (
  <section id="about" className="about">
    <div data-aos="fade-right" className="about__text">
      <h2 className="about__heading">About Me</h2>
      <p className="about__body">
        👋 Hello My name is Sunil Paul {" "}
        <br />
        <br />
        I’m currently working on Trace. <br /> <br />

        I’m looking to collaborate with other.
        <br /> <br /> Currently, I am very interested in, and learning about{" "}
        <span className="about__specialText">#####</span>,{" "}
      </p>
      <br />
      <p className="about__body">
        You can reach out to me on my{" "}
        <NavHashLink className="about__specialText" smooth to="#contact">
          contact
        </NavHashLink>{" "}
        page
      </p>
    </div>
    <img
      className="about__headshot"
      src="/images/placeholder-profile.jpg"
      alt="Profile"
      width="300"
      height="300"
    />
      <LightWave />
  </section>
);

export default About;
