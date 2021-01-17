// Styles
import "./navigation.scss";

// Icons
import phoneIcon from "assets/images/icons/phone-icon.png";
import searchIcon from "assets/images/icons/search-icon.png";
import profileIcon from "assets/images/icons/profile-icon.png";
import burgerIcon from "assets/images/icons/burger-icon.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation__icons">
        <a href="/" className="navigation__icon">
          <img src={phoneIcon} alt="phone icon" />
        </a>
        <a href="/" className="navigation__icon">
          <img src={searchIcon} alt="phone icon" />
        </a>
        <a href="/" className="navigation__icon">
          <img src={profileIcon} alt="phone icon" />
        </a>
      </div>
      <div className="navigation__burger">
        <a href="/" className="navigation__icon">
          <img src={burgerIcon} alt="phone icon" />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
