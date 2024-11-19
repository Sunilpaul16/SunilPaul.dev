import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave.js";
import "./ProjectLight.css";
import { useMediaQuery } from "react-responsive";
// import "aos/dist/aos.css";

function Project1({ id }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  return (
    <article id={id} className="project light">
      <h2 className="project__header">Experience</h2>
      <div className="project__main">
        <img
          className="project__image project__specialMobileImage"
          src="/images/Trace"
          alt="Trace"
          width="15%"
          height="auto"
          loading="lazy"
        />
        {isDesktopOrLaptop && (
          <>
            <img
              className="project__image"
              src="/images/Trace.png"
              alt="Trace"
              width="15%"
              height="auto"
              loading="lazy"
            />
            <img
              className="project__image"
              src="/images/Trace.png"
              alt="Trace"
              width="15%"
              height="auto"
              loading="lazy"
            />
          </>
        )}

        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Trace</h3>
          <p className="project__description project__body">
            A mobile application that helps users track their symptoms and
            provides them with a list of possible diseases based on their
            symptoms. It also provides the user with a list of nearby hospitals
            and doctors.
          </p>

          <p className="project__tech project__body">
            &gt; React Native · Expo · MongoDB · Tailwind CSS

          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/Sunilpaul16/Trace"
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

export default Project1;
