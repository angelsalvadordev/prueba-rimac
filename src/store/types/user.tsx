export const SAVE_USER = "SAVE_USER";

export interface UserState {
  direccion: string;
  nomCompleto: string;
  // indCrearTercero: string;
  // estadoCivil: string;
  // tipoPersona: string;
  // telefono: string;
  // apellidoPaterno: string;
  // sexo: string;
  // indRequiereDireccion: string;
  // paisNacimiento: string;
  // nombres: string;
  // stsTercero: string;
  // tipoDocumento: string;
  // apellidoMaterno: string;
  // numDocumento: string;
  // fecNacimiento: string;
  // correo: string;
}

interface SaveUserAction {
  type: typeof SAVE_USER;
  payload: UserState;
}

export type userActionTypes = SaveUserAction;
