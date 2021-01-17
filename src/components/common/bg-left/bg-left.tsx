import "./bg-left.scss";
import familyImage from "../../../assets/images/family-image.png";

const BgApp = () => {
  return (
    <div className="bg-left">
      <img className="bg-left__img" src={familyImage} alt="family illustration" />
    </div>
  );
};

export default BgApp;
