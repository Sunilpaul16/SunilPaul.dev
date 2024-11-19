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
            A web app designed
            to enhance collaborative experiences through Shareable Browsers,
            allowing  users to host{" "}
            watch parties, collaborate on projects, or browse together seamlessly.
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
          className="project__image project__imageDark"
          src="/images/Hop.jpg"
          srcSet="/images/Hop.jpg 750w, /images/Hop.jpg 1468w"
          sizes="50vw"
          alt="Hop"
          width="50%"
          height="auto"
          loading="lazy"
        />
      </div>
      <LightWave />
    </article>
  );
}

export default Project2;
