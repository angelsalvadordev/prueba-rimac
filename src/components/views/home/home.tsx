import BgApp from "components/common/bg-left";
import Footer from "components/layout/footer";
import Header from "components/layout/header";
import { useDispatch } from "react-redux";
import { saveUser } from "store/actions/user";
import Form from "./form";

import "./home.scss";

const HomePage = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("Clickeado!");
    dispatch(
      saveUser({
        nomCompleto: "Angel Salvador",
        direccion: "Calle Yahuar Huaca 123",
      })
    );
  };

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
