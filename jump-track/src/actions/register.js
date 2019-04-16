import axios from "axios";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const register = obj => dispatch => {
  dispatch({ type: REGISTER_START });
  return axios
    .post("https://jump-tracker.herokuapp.com/users/register", obj)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data.payload });
    })
    .catch(err => console.log(err));
};
