import { ICheckbox } from "utilities/types/checkbox";
import "./checkbox.scss";

const Checkbox = ({ children }: ICheckbox) => {
  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input type="checkbox" className="checkbox__checker" />
        <i className="checkbox__checkmark"></i>
      </label>
      <p className="checkbox__text">{children}</p>
    </div>
  );
};

export default Checkbox;
