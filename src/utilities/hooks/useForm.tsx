import { useState } from "react";

const useForm = (initialState = {}): any => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleCheckboxChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.checked,
    });
  };

  // fieldReset (opcional) => nombre de dato que se volverá vacío al cambiar opcion de select
  const handleSelectChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    fieldReset?: string
  ) => {
    setValues({
      ...values,
      [target.name]: target.checked,
      ...(fieldReset && { [fieldReset]: "" }),
    });
  };

  return [values, handleInputChange, handleSelectChange, handleCheckboxChange];
};

export default useForm;
