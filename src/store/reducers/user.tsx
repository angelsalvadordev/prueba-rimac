import { SAVE_USER, userActionTypes, UserState } from "store/types/user";

const initialState: UserState = {
  direccion: "",
  nomCompleto: "",
  // indCrearTercero: "",
  // estadoCivil: "",
  // tipoPersona: "",
  // telefono: "",
  // apellidoPaterno: "",
  // sexo: "",
  // indRequiereDireccion: "",
  // paisNacimiento: "",
  // nombres: "",
  // stsTercero: "",
  // tipoDocumento: "",
  // apellidoMaterno: "",
  // numDocumento: "",
  // fecNacimiento: "",
  // correo: "",
};

export const userReducer = (state = initialState, action: userActionTypes): UserState => {
  switch (action.type) {
    case SAVE_USER:
      return {
        nomCompleto: action.payload.nomCompleto,
        direccion: action.payload.direccion,
      };
    default:
      return state;
  }
};
