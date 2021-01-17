import { IOption, ISelect } from "utilities/types/select";
import "./select.scss";

const Select = ({ name, className, id, options }: ISelect) => {
  return (
    <div className={`${className} select`}>
      <select name={name ? name : ""} {...(id && { id })}>
        {options?.map((option: IOption) => (
          <option value={option.value}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
