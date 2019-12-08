import { FETCH_WORKS } from "../Actions/index";
let initialState = { loaded: false, creators: [], works: {} }

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORKS:
      return { ...state, loaded: true, works: action.payload }
    default:
      return state;
  }
}