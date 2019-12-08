import { FETCH_CREATORS } from "../Actions/index";
let initialState = { loaded: false, creators: [], works: {} }

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CREATORS:
      return { ...state, loaded: true, creators: action.payload }
    default:
      return state;
  }
}