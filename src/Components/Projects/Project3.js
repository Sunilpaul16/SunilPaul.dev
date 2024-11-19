import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Project3() {
  return (
    <article className="project light">
      <div className="project__main">
        <img
          className="project__image"
          src="/images/PawGang.png"
          srcSet="/images/PawGang.png 750w, /images/PawGang.png 1468w"
          sizes="50vw"
          alt="PawGang"
          width="50%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">PawGang</h3>
          <p className="project__description project__body">
            A <span className="project__specialText"> a mobile app</span> designed
            for dog owners to schedule dog park{" "}
            <span className="project__specialText">visits and</span> organize playdates{" "}
            <span className="project__specialText">for their pets</span>. Integrated TypeScript
            in the codebase to improve type safety,
            enhance code clarity, and boost developer productivity{" "}
          </p>
          <p className="project__tech project__body">
            &gt; React Native · TypeScript · Jest  · MongoDB · Google Maps API
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/sunilpaul16/PawGang"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project3;
