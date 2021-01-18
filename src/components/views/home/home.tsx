import BgApp from "components/common/bg-left";
import Footer from "components/layout/footer";
import Header from "components/layout/header";
import Form from "./form";

import shieldIcon from "assets/images/icons/shield-icon.png";
import mobileIcon from "assets/images/icons/mobile-icon.png";
import moneyIcon from "assets/images/icons/money-icon.png";
import clinicIcon from "assets/images/icons/clinic-icon.png";

import "./home.scss";

const HomePage = () => {
  return (
    <div className="home">
      <BgApp />
      <Header />
      <div className="container home__container">
        <div className="home__left">
          <div className="benefits">
            <div className="benefits__title">
              <h1>
                Seguro de <b>Salud</b>
              </h1>
              <ul className="benefits__list">
                <li className="benefits__item">
                  <i>
                    <img src={shieldIcon} alt="shield icon" />
                  </i>
                  <span>Cómpralo de manera fácil y rápida</span>
                </li>
                <li className="benefits__item">
                  <i>
                    <img src={mobileIcon} alt="mobile icon" />
                  </i>
                  <span>Cotiza y compra tu seguro 100% digital </span>
                </li>
                <li className="benefits__item">
                  <i>
                    <img src={moneyIcon} alt="money icon" />
                  </i>
                  <span>Hasta S/.12 millones de cobertura anual</span>
                </li>
                <li className="benefits__item">
                  <i>
                    <img src={clinicIcon} alt="clinic icon" />
                  </i>
                  <span>Más de 300 clínicas en todo el Perú</span>
                </li>
              </ul>
            </div>
            <div className="benefits__footer">© 2020 RIMAC Seguros y Reaseguros.</div>
          </div>
        </div>
        <div className="home__right">
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
