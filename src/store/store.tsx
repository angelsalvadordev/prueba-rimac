import { combineReducers, createStore } from "redux";
import { userReducer } from "./reducers/user";

const reducers = combineReducers({
  user: userReducer,
});

export const store = createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
