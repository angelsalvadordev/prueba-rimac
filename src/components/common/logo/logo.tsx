import { Link } from "react-router-dom";
import { ReactComponent as LogoSvg } from "assets/images/logo-rimac.svg";
import "./logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        {/* <img src={logoRimac} alt="logo rimac" /> */}
        <LogoSvg />
      </Link>
    </div>
  );
};

export default Logo;
