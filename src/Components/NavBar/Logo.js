import { HashLink } from "react-router-hash-link";

function Logo({ clicked, setClicked }) {
  return (
    <div className="header__logo">
      <HashLink
        smooth
        to="/#"
        onClick={() => {
          if (clicked) {
            setClicked(false);
          }
        }}
      >
      </HashLink>
    </div>
  );
}

export default Logo;
