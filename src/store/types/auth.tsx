export const LOGIN = "LOGIN";

export interface ILoginInfo {
  existInDB?: boolean;
  type: string;
  document: string;
  birth: string;
  phone: string;
}

interface LoginAction {
  type: typeof LOGIN;
  payload: ILoginInfo;
}

export type loginActionTypes = LoginAction;
