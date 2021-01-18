import BgApp from "components/common/bg-left";
import Footer from "components/layout/footer";
import Header from "components/layout/header";
import Form from "./form";

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
              <p>Aqui Slider</p>
            </div>
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
