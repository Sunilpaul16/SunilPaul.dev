import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave.js";
import "./ProjectLight.css";
import { useMediaQuery } from "react-responsive";

function Project1({ id }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  return (
    <article id={id} className="project light">
      <div className="project__main">
        <img
          className="project__image project__specialMobileImage"
          src="/images/Hop"
          alt="Trace"
          width="15%"
          height="auto"
          loading="lazy"
        />
        {isDesktopOrLaptop && (
          <>
            <img
              className="project__image"
              src="/images/Hop.png"
              alt="Trace"
              width="15%"
              height="auto"
              loading="lazy"
            />
            <img
              className="project__image"
              src="/images/Hop.png"
              alt="Trace"
              width="15%"
              height="auto"
              loading="lazy"
            />
          </>
        )}

        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Hop</h3>
          <p className="project__description project__body">
            A <span className="project__specialText">a web app designed</span> to enhance
            collaborative experiences through Shareable Browsers,{" "}
            <span className="project__specialText">
            allowing users to host watch parties,
            collaborate on projects, or browse together seamlessly.
            </span>

          </p>
          <p className="project__tech project__body">
            &gt; Next.js · Express.js · Drizzle
            · Typescript · PostgreSQL · Docker
            · Socket.IO · Shadcn UI

          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/Sunilpaul16/Hop"
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
