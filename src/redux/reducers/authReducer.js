import {
  FETCH_LOADING,
  LOGIN_USER,
  REGISTER_USER,
} from "../actions/actionTypes";

const initialState = {
  isAuthenticated: false,
  token: localStorage.getItem("token"),
  currentUser: null,
  isLoading: false,
  success: null,
  userInfo: null,
  msg: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_USER:
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        success: true,
        currentUser: action.payload.user.first_name,
        userInfo: action.payload.user,
        isLoading: false,
        msg: action.payload.msg,
      };

    default:
      return state;
  }
}
