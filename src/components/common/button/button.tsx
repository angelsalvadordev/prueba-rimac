import { IButton } from "utilities/types/button";
import "./button.scss";

const Button = ({ children }: IButton) => {
  return <button className="button">{children}</button>;
};

export default Button;
