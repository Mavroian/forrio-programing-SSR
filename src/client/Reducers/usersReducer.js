import { FETCH_USERS } from "../Actions/index";
let initialState = { loaded: false, users: [] }

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, loaded: true, users: action.payload }
    default:
      return state;
  }
}