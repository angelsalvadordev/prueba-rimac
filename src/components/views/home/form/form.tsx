import Button from "components/common/button";
import Checkbox from "components/common/checkbox/indes";
import Input from "components/common/input";
import Select from "components/common/select";
import { IOption } from "utilities/types/select";
import styles from "./form.module.scss";

const Form = () => {
  const handleBlur = () => {
    console.log("clickeado!");
  };

  const selectOptions: IOption[] = [
    {
      value: "dni",
      name: "DNI",
    },
    {
      value: "ce",
      name: "C.E.",
    },
  ];

  return (
    <div className={styles.form}>
      <div className={styles.form__title}>
        <h2>
          Obtén tu <b>seguro ahora</b>
        </h2>
        <p>Ingresa los datos para comenzar.</p>
      </div>
      <form className={styles.form__box}>
        <div className={styles["form__input-select"]}>
          <Select name="documento" options={selectOptions} />
          <Input type="text" id="input-dni" placeholder="Nro de Documento" onBlur={handleBlur} />
        </div>
        <Input type="text" id="input-date" placeholder="Fecha de Nacimiento" onBlur={handleBlur} />
        <Input type="text" id="input-phone" placeholder="Celular" onBlur={handleBlur} />
        <div className={styles["form__verify"]}>
          <Checkbox>
            Acepto la{" "}
            <span>
              Política de Protección de Datos
              <br /> Personales y los Términos y Condiciones.
            </span>
          </Checkbox>
          <Checkbox>
            Acepto la{" "}
            <span>
              Política de Envío de Comunicaciones
              <br /> Comerciales.
            </span>
          </Checkbox>
        </div>
        <div className="form__button">
          <Button>Comencemos</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
