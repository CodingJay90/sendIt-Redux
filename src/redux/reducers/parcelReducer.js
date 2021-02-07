import { LOAD_PARCELS, PARCELS_LOADING } from "../actions/actionTypes";

const initialState = {
  parcels: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PARCELS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_PARCELS:
      return {
        ...state,
        parcels: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
