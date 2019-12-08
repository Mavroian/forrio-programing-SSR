// fetch the creators

import axios from "axios";
export const FETCH_CREATORS = "fetch_creators";
export const fetchCreators = () => async dispatch => {

  const res = await axios.get('https://api.foriio.com/api/v1/promoted/users').then(response => {
    return response.data
  }).catch((error) => {
    console.error(error)
  });

  dispatch({
    type: FETCH_CREATORS,
    payload: res.users
  });
}

//fetch creators works

export const FETCH_WORKS = "fetch_works";
export const fetchWorks = (id) => async dispatch => {

  const res = await axios.get(`https://api.foriio.com/api/v1/works/${id}`).then(response => {
    return response.data

  }).catch((error) => {
    console.error(error)
  });

  dispatch({
    type: FETCH_WORKS,
    payload: res.work
  });
}