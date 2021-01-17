import { IInput } from "utilities/types/input";
import "./input.scss";

const Input = ({ id, type, placeholder, onClick, onChange, onFocus, onBlur }: IInput) => {
  return (
    <div className="input">
      <input
        type={type ? type : "text"}
        {...(id && { id })}
        {...(onClick && { onClick })}
        {...(onChange && { onChange })}
        {...(onFocus && { onFocus })}
        {...(onBlur && { onBlur })}
        required
      />
      <div className="input__placeholder">{placeholder}</div>
      <div id="validateEmail" className="input__error hidden">
        *Error al digitar número
      </div>
    </div>
  );
};

export default Input;
