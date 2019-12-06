// fetch the creators

import axios from "axios";
export const FETCH_USERS = "fetch_users";
export const fetchUsers = () => async dispatch => {

  const res = await axios.get('https://api.foriio.com/api/v1/promoted/users').then(response => {
    return response.data
  }).catch((error) => {
    console.error(error)
  });

  dispatch({
    type: FETCH_USERS,
    payload: res.users
  });
}