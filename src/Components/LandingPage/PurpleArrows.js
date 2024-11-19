import "./PurpleArrows.css";
import { NavHashLink } from "react-router-hash-link";

function PurpleArrows() {
  return (
    <NavHashLink
      className="purpleArrows"
      to="/#about"

      scroll={(el) => {
        const yOffset = -10;
        const yPosition = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: yPosition, behavior: "smooth" });
      }}    >
      <img
        className="purpleArrows"
        src="/bottom_purple_arrows.svg"
        alt="bottom purple arrows"
      />
    </NavHashLink>
  );
}

export default PurpleArrows;
