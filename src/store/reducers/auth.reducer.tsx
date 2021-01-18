import { LOGIN, ILoginInfo, loginActionTypes } from "store/types/auth";

const initialState: ILoginInfo = {
  existInDB: false,
  type: "",
  document: "",
  birth: "",
  phone: "",
};

export const loginReducer = (state = initialState, action: loginActionTypes): ILoginInfo => {
  switch (action.type) {
    case LOGIN:
      const { existInDB, type, document, birth, phone } = action.payload;
      return {
        ...state,
        existInDB,
        type,
        document,
        birth,
        phone,
      };
    default:
      return state;
  }
};
