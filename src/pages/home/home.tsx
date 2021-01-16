import { useDispatch } from "react-redux";
import { saveUser } from "store/actions/user";

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
    <div>
      <span>Home</span>
      <button onClick={handleClick}>Clickeame!</button>
    </div>
  );
};
export default HomePage;
