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
          src="/Trace_onboarding.png"
          alt="Trace"
          width="15%"
          height="auto"
          loading="lazy"
          background="transparent"
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
    Trace is a versatile mobile application designed to centralize and organize users' virtual activities, including books, games, movies, and TV shows. By keeping all these interests in one place, Trace offers a streamlined and efficient way for users to track their progress and manage their hobbies across various mediums.
    <br />
    <br />
    The app prioritizes user convenience, providing an intuitive interface that makes it easy to monitor activities, stay organized, and discover new interests without juggling multiple platforms.
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
