import Button from "components/common/button";
import Checkbox from "components/common/checkbox/indes";
import Input from "components/common/input";
import Select from "components/common/select";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { verifyDocInDB } from "store/actions/auth";
import useForm from "utilities/hooks/useForm";
import { IOption } from "utilities/types/select";
import { validateCE, validateDate, validateDNI, validatePhone } from "utilities/validators/inputs";
import styles from "./form.module.scss";

const Form = () => {
  const history = useHistory();

  // Opciones para componente select
  const selectOptions: IOption[] = [
    { value: "dni", name: "DNI" },
    { value: "ce", name: "C.E." },
  ];

  // ===================================================================
  // ESTADOS GLOBALES
  // ===================================================================
  const dispatch = useDispatch();

  // ===================================================================
  // ESTADOS LOCALES
  // ===================================================================
  // Custom Hook para estado de elementos de formulario
  const [formValues, handleInputChange, handleSelectChange, handleCheckboxChange] = useForm({
    type: "dni",
    document: "",
    birth: "",
    phone: "",
    protection_policy: false,
    shipping_policy: false,
  });

  // Data del estado local
  const { type, document, birth, phone, protection_policy, shipping_policy } = formValues;

  const [enableBtn, setEnableBtn] = useState<boolean>(false);

  // Errores de formulario
  const [errors, setErrors] = useState({
    document: "",
    birth: "",
    phone: "",
    protection_policy: "",
    shipping_policy: "",
  });

  // ===================================================================
  // EFECTOS
  // ===================================================================
  // Para habilitar Boton
  useEffect(() => {  
    const fields = Object.values(formValues).some(field => !field)
    const fieldErrors = Object.values(errors).some(error => error);

    // Comprobar si algun field esta vacio o si tiene algun error para habilitar botton
    fields || fieldErrors ? setEnableBtn(false) : setEnableBtn(true)

  }, [formValues, errors]);

  // ===================================================================
  // FUNCIONES VALIDADORAS
  // ===================================================================
  const validateInput = ({ target }: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = target;
    let errorMessage = "";

    switch (target.name) {
      case "document":
        errorMessage = type === "dni" ? validateDNI(value) : validateCE(value);
        break;
      case "birth":
        errorMessage = validateDate(value);
        break;
      case "phone":
        errorMessage = validatePhone(value);
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  // Validacion de todo el formulario
  const isFormValid = (): boolean => {
    const documentError = type === "dni" ? validateDNI(document) : validateCE(document);
    const birthError = validateDate(birth);
    const phoneError = validatePhone(phone);
    const protectionPolicyError = protection_policy ? "" : "No aceptado";
    const shippingPolicyError = shipping_policy ? "" : "No aceptado";

    setErrors({
      ...errors,
      document: documentError,
      birth: birthError,
      phone: phoneError,
      protection_policy: protectionPolicyError,
      shipping_policy: shippingPolicyError,
    });

    if (
      errors.document.length ||
      errors.birth.length ||
      errors.phone.length ||
      !protection_policy ||
      !shipping_policy
    ) {
      return false;
    }

    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }

    dispatch(verifyDocInDB(formValues)).then(() => {
      history.push("/insured");
    });
  };

  return (
    <div className={styles.form}>
      <div className={styles.form__title}>
        <h2>
          Obtén tu <b>seguro ahora</b>
        </h2>
        <p>Ingresa los datos para comenzar.</p>
      </div>
      <form className={styles.form__box} onSubmit={handleSubmit} onInvalid={handleSubmit}>
        <div className={styles["form__input-select"]}>
          <Select
            name="type"
            options={selectOptions}
            onChange={(e) => handleSelectChange(e, "document")}
          />
          <Input
            name="document"
            type="number"
            placeholder="Nro de documento"
            onChange={handleInputChange}
            onBlur={validateInput}
            value={document}
            errors={errors.document}
          />
        </div>
        <div className={styles["form__input"]}>
          <Input
            name="birth"
            type="text"
            placeholder="Fecha de Nacimiento"
            onChange={handleInputChange}
            onBlur={validateInput}
            value={birth}
            errors={errors.birth}
          />
        </div>
        <div className={styles["form__input"]}>
          <Input
            name="phone"
            type="text"
            placeholder="Celular"
            onChange={handleInputChange}
            onBlur={validateInput}
            value={phone}
            errors={errors.phone}
          />
        </div>
        <div className={styles["form__verify"]}>
          <Checkbox
            name="protection_policy"
            onChange={(e) => {
              handleCheckboxChange(e);
              // handleBtn();
            }}
            errors={errors.protection_policy}
          >
            Acepto la{" "}
            <span>
              Política de Protección de Datos
              <br /> Personales y los Términos y Condiciones.
            </span>
          </Checkbox>
          <Checkbox
            name="shipping_policy"
            onChange={(e) => {
              handleCheckboxChange(e);
              // handleBtn();
            }}
            errors={errors.shipping_policy}
          >
            Acepto la{" "}
            <span>
              Política de Envío de Comunicaciones
              <br /> Comerciales.
            </span>
          </Checkbox>
        </div>
        <div className={styles.form__button}>
          <Button type="submit" disabled={enableBtn}>
            Comencemos
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
