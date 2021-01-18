import { IButton } from "utilities/types/button";
import "./button.scss";

const Button = ({ type, id, disabled, children }: IButton) => {
  return (
    <button
      type={type ? type : undefined}
      {...(id && { id })}
      className={`button ${disabled !== undefined && !disabled && "button--disabled"}`}
    >
      {children}
    </button>
  );
};

export default Button;
