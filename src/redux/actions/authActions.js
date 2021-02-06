import {
  FETCH_LOADING,
  REGISTER_USER,
  LOGIN_USER,
  AUTH_ERROR,
  CLEAR_ERRORS,
  LOAD_USER,
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
      if (!data.success === false) {
        dispatch({ type: REGISTER_USER, payload: data });
      } else {
        dispatch({ type: AUTH_ERROR, payload: data });
      }
    })
    .catch((err) => console.log(err));
};

export const loginUser = (user) => (dispatch) => {
  dispatch(setItemsLoading());
  fetch("https://sendit-parcel.herokuapp.com/auth/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "Application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (!data.success === false) {
        dispatch({ type: LOGIN_USER, payload: data });
      } else {
        dispatch({ type: AUTH_ERROR, payload: data });
      }
    })
    .catch((err) => console.log(err));
};

export const loadUser = () => (dispatch, getState) => {
  fetch("https://sendit-parcel.herokuapp.com/auth/user", {
    method: "GET",
    headers: {
      "Content-type": "Apllication/json",
      "x-access-token": getState().auth.token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: LOAD_USER, payload: data });
    });
};

export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};

export const setItemsLoading = () => {
  return {
    type: FETCH_LOADING,
  };
};
