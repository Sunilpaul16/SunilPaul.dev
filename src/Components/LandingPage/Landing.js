import PurpleArrows from "../LandingPage/PurpleArrows";
import DarkWave from "../Waves/DarkWave";
import "./Landing.css";
import LeftSocialMediaIcons from "./LeftSocialMediaIcons";

function Landing() {
  return (
    <section id="landing" className="landing">
      <div className="landing__topText">
        <span className="landing__purpleText">Hi, my name is</span>
        <h1 className="landing__mainText">Sunil Paul.</h1>
        <h1 className="landing__mainText">I like to code.</h1>
      </div>

      <hr className="landing__hr" />

      <div className="landing__bottomText">
    <h1 className="landing__mainText">Building innovative solutions.</h1>
    <h1 className="landing__mainText">Empowering digital experiences.</h1>
  </div>

      <PurpleArrows />

      <LeftSocialMediaIcons />

      <DarkWave />
    </section>
  );
}

export default Landing;
