import { SAVE_USER, userActionTypes, UserState } from "store/types/user";

export const saveUser = (newUser: UserState): userActionTypes => {
  return {
    type: SAVE_USER,
    payload: newUser,
  };
};
