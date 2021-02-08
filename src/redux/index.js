import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import parcelReducer from "./reducers/parcelReducer";

export default combineReducers({
  parcels: parcelReducer,
  auth: authReducer,
});
