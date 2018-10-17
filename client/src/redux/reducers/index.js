import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import journalReducer from "./journalReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  journal: journalReducer
});
