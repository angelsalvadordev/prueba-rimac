import Axios from "axios";

export class ApiDataService {
  preventCors = "https://cors-anywhere.herokuapp.com/";
  apiUrl = "https://freestyle.getsandbox.com/dummy/obtenerdatospersona";

  async getData() {
    try {
      const data = await Axios({
        method: "get",
        url: `${this.preventCors}https://freestyle.getsandbox.com/dummy/obtenerdatospersona`,
        data: {},
      });

      return data.data.data.tercero;
    } catch (err) {
      const message = err.response.data.errors[0].message;
      alert(`Hubo un problema con el API: ${message}`);
    }
  }

  async getFakeData() {
    return {
      direccion: "PRUEBA PRUEBA",
      nomCompleto: "JUAN MIGUEL SANCHEZ DIAZ",
      indCrearTercero: "N",
      estadoCivil: "Z",
      tipoPersona: "N",
      telefono: "",
      apellidoPaterno: "SANCHEZ",
      sexo: "M",
      indRequiereDireccion: "N",
      paisNacimiento: "80",
      nombres: "JUAN MIGUEL",
      stsTercero: "0",
      tipoDocumento: "2",
      apellidoMaterno: "DIAZ",
      numDocumento: "25809150",
      fecNacimiento: "11/05/1972",
      correo: "",
    };
  }
}
