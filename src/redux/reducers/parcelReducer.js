import {
  CANCEL_DELIVERY,
  CREATE_PARCEL,
  EDIT_PICKUP_DESTINATION,
  LOAD_PARCELS,
  PARCELS_LOADING,
} from "../actions/actionTypes";

const initialState = {
  parcels: [],
  isLoading: false,
  response: null,
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
    case CREATE_PARCEL:
      return {
        ...state,
        parcels: [...state.parcels, action.payload],
        isLoading: false,
      };
    case EDIT_PICKUP_DESTINATION:
      return {
        ...state,
        isLoading: false,
        parcels: state.parcels.map((parcel) =>
          parcel.id === action.payload.id ? action.payload : parcel
        ),
      };
    case CANCEL_DELIVERY:
      return {
        ...state,
        response: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
