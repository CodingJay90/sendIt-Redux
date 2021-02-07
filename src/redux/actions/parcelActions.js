import {
  CREATE_PARCEL,
  LOAD_PARCELS,
  PARCELS_LOADING,
  EDIT_PICKUP_DESTINATION,
} from "./actionTypes";

export const loadParcels = () => (dispatch, getState) => {
  const userId = getState().auth.userInfo && getState().auth.userInfo.id; //check if userdata is loaded
  dispatch(setParcelLoading());
  fetch(`https://sendit-parcel.herokuapp.com/parcels/${userId}`, {
    headers: {
      "x-access-token": getState().auth.token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: LOAD_PARCELS, payload: data });
    });
};

export const createParcel = (parcel) => (dispatch, getState) => {
  fetch("https://sendit-parcel.herokuapp.com/parcels", {
    method: "POST",
    body: JSON.stringify(parcel),
    headers: {
      "Content-type": "Application/json",
      "x-access-token": getState.auth.token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: CREATE_PARCEL, payload: data });
    });
};

export const editPickUpDestination = (parcel) => (dispatch, getState) => {
  const parcel_id = getState().auth.userInfo && getState().parcels.parcels.id; //check if userdata is loaded

  fetch(
    `https://sendit-parcel.herokuapp.com/parcels/${parcel_id}/destination`,
    {
      method: "PUT",
      body: JSON.stringify(parcel),
      headers: {
        "Content-type": "Application/json",
        "x-access-token": getState().auth.token,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: EDIT_PICKUP_DESTINATION, payload: data });
    });
};

export const setParcelLoading = () => {
  return {
    type: PARCELS_LOADING,
  };
};
