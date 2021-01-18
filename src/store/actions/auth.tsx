import { Dispatch } from "react";
import { UserService } from "services/user-service";
import { LOGIN, ILoginInfo, loginActionTypes } from "store/types/auth";
import { userInfoActionTypes } from "store/types/info-user";
import { ApiDataService } from "./../../services/api-data";
import { saveUser } from "./info-user";

export const verifyDocInDB = (loginInfo: ILoginInfo): any => {
  return async (dispatch: Dispatch<loginActionTypes | userInfoActionTypes>) => {
    try {
      const verifyDoc = new UserService();

      const resp = await verifyDoc.userExistInBD(loginInfo.document);

      if (resp) {
        const apiData = new ApiDataService();
        const resp = await apiData.getFakeData();

        dispatch(saveUser(resp));
        loginInfo.existInDB = true;
      } else {
        loginInfo.existInDB = false;
      }

      loginInfo.isLogin = true;
      dispatch(login(loginInfo));
    } catch {
      console.log("No se pudo hacer la consulta a db");
      alert("Hubo un problema al hacer la consulta");
    }
  };
};

export const login = (loginInfo: ILoginInfo): loginActionTypes => {
  return {
    type: LOGIN,
    payload: loginInfo,
  };
};
