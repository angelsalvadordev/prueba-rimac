import { IInput } from "utilities/types/input";
import "./input.scss";

const Input = ({
  name,
  id,
  type,
  value,
  errors,
  maxLength,
  placeholder,
  onClick,
  onChange,
  onFocus,
  onBlur,
}: IInput) => {
  return (
    <div className="input">
      <div className="input__box">
        <input
          className={`input__element ${errors?.length && "input__element--error"}`}
          name={name ? name : ""}
          type={type ? type : "text"}
          {...(id && { id })}
          {...(onClick && { onClick })}
          {...(onChange && { onChange })}
          {...(onFocus && { onFocus })}
          {...(onBlur && { onBlur })}
          value={value ? value : ""}
          maxLength={maxLength ? maxLength : undefined}
          onKeyPress={() => {}}
          required
          autoComplete="off"
        />
        <div className="input__placeholder">{placeholder}</div>
      </div>
      <div id="validateEmail" className="input__error">
        {errors}
      </div>
    </div>
  );
};

export default Input;
