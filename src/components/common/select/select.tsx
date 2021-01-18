import { IOption, ISelect } from "utilities/types/select";
import "./select.scss";

const Select = ({ name, className, id, options, onChange }: ISelect) => {
  return (
    <div className={`${className} select`}>
      <select name={name ? name : ""} id={id ? id : undefined} onChange={onChange}>
        {options?.map((option: IOption, i) => (
          <option key={i} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
