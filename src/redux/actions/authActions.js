import { FETCH_LOADING, REGISTER_USER, LOGIN_USER } from "./actionTypes";

export const registerUser = (user) => (dispatch) => {
  dispatch(setItemsLoading());
  fetch("https://sendit-parcel.herokuapp.com/auth/register", {
    method: "POST",
    body: user,
    headers: {
      "Content-type": "Application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: REGISTER_USER, payload: data });
    });
};

export const loginUser = (user) => (dispatch) => {
  dispatch(setItemsLoading());
  fetch("https://sendit-parcel.herokuapp.com/auth/login", {
    method: "POST",
    body: user,
    headers: {
      "Content-type": "Application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: LOGIN_USER, payload: data });
    });
};

export const setItemsLoading = () => {
  return {
    type: FETCH_LOADING,
  };
};
