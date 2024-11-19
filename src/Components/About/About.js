import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import LightWave from '../Waves/LightWave';

import './About.css';

const About = () => (
  <section id="about" className="about">
  <div data-aos="fade-right" className="about__text">
    <h2 className="about__heading">About Me</h2>
    <p className="about__body">
    <br />
      👋 Hi there! My name is Sunil Paul.
      <br />
      <br />
      💻 I’m a passionate software developer currently contributing to an exciting project called Trace.
      <br />
      <br />

      🧩 I specialize in building dynamic, user-friendly applications and thrive on solving complex challenges with clean and efficient code.
      <br />
      <br />
      🤝 Collaboration is at the heart of what I do, and I’m always eager to connect with like-minded developers and creative professionals to bring innovative ideas to life.
      <br />
      <br />
      🤖 Recently, I’ve been diving into the fascinating world of{" "}
      <span className="about__specialText">Large Language Models (LLMs)</span> and exploring their transformative potential in software development.
      <br />
      <br />
      🌟The intersection of AI and programming truly excites me, and I’m constantly learning to expand my skill set in this domain.
    </p>
    <br />
    <p className="about__body">
      Feel free to reach out to me through my{" "}
      <NavHashLink className="about__specialText" smooth to="#contact">
        contact
      </NavHashLink>{" "}
      page.
      <br/>
      <br/>
      🚀 Let’s build something amazing together!
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
