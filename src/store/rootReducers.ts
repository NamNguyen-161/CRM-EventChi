import { combineReducers } from "redux";
import AuthReducer from "./Auth/auth.slice";

export default combineReducers({
  auth: AuthReducer,
});
