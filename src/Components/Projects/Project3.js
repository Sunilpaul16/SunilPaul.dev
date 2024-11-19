import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Project3() {
  return (
    <article className="project light">
      <div className="project__main">
      <img
          className="project__image project__specialMobileImage"
          src="/Pawgang_gif.gif"
          alt="Trace"
          width="15%"
          height="auto"
          loading="lazy"
          background="transparent"
        />
         <img
          className="project__image project__specialMobileImage"
          src="/Pawgang_gif.gif"
          alt="Trace"
          width="15%"
          height="auto"
          loading="lazy"
          background="transparent"
        />
         <img
          className="project__image project__specialMobileImage"
          src="/Pawgang_gif.gif"
          alt="Trace"
          width="15%"
          height="auto"
          loading="lazy"
          background="transparent"
        />

        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">PawGang</h3>
          <p className="project__description project__body">
    PawGang is a mobile application tailored for dog owners to foster community and convenience. The app allows users to effortlessly schedule dog park visits and organize playdates for their furry companions, providing a platform that enhances the social experience for both pets and their owners.
    <br />
    <br />
    With its intuitive design and user-friendly features, PawGang streamlines the process of connecting with other dog lovers, creating opportunities for pets to socialize and build their own "gangs."
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
