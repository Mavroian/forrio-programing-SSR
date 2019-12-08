//combine reducers

import { combineReducers } from "redux";
import creatorsReducer from "./creatorsReducer";
import worksReducer from "./worksReducers"

export default combineReducers({
  creators: creatorsReducer,
  works: worksReducer
})
