import {
  FETCH_LOADING,
  REGISTER_USER,
  LOGIN_USER,
  AUTH_ERROR,
} from "./actionTypes";

export const registerUser = (user) => (dispatch) => {
  dispatch(setItemsLoading());
  fetch("https://sendit-parcel.herokuapp.com/auth/register", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "Application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //   if (data.success) {
      dispatch({ type: REGISTER_USER, payload: data });
      //   } else {
      //     dispatch({ type: AUTH_ERROR, paylaod: data });
      //   }
    })
    .catch((err) => console.log(err));
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
