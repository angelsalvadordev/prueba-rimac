import Logo from "components/common/logo";
import Navigation from "components/common/navigation";
import "./header.scss";

const Header = () => {
  return (
    <header className={`header`}>
      <div className="container header__content">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
