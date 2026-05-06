import { FaGithub } from "react-icons/fa";
import LightWave from "../Waves/LightWave";
import "./ProjectDark.css";

function Project2() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
          <h3 className="project__title project__titleDark">
          Hop
          </h3>
          <p className="project__description project__body">
    Hop is an innovative web application designed to elevate collaborative experiences. With its flagship feature, Shareable Browsers, users can seamlessly host watch parties, collaborate on projects, or browse together in real time, redefining the way we connect online.
    <br />
    <br />
    The app focuses on creating a fluid, interactive environment where users can share ideas, content, and experiences without the hassle of switching between platforms. Its design ensures a smooth and intuitive experience, fostering meaningful collaboration and communication.
  </p>
          <p className="project__tech project__body">
            &gt; Next.js · TypeScript  · Tailwind CSS · Socket.io · WebRTC
          </p>
          <a
            className="project__sourceCodeDark"
            href="https://github.com/sunilpaul16/Hop"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
        </div>
        <img
          className="project__image project__specialMobileImage"
          src="/Hopgif.gif"
          alt="Trace"
          width="35%"
          height="auto"
          loading="lazy"
          background="transparent"
        />
      </div>
      <LightWave />
    </article>
  );
}

export default Project2;
