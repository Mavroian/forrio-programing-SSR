//combine reducers

import { combineReducers } from "redux";
import creatorsReducer from "./creatorsReducer";

export default combineReducers({
  creators: creatorsReducer
})
