import {
  CREATE_PARCEL,
  LOAD_PARCELS,
  PARCELS_LOADING,
  EDIT_PICKUP_DESTINATION,
  CANCEL_DELIVERY,
  CLEAR_ERRORS,
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
  // dispatch(setParcelLoading());
  fetch("https://sendit-parcel.herokuapp.com/parcels", {
    method: "POST",
    body: JSON.stringify(parcel),
    headers: {
      "Content-type": "Application/json",
      "x-access-token": getState().auth.token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: CREATE_PARCEL, payload: data });
    });
};

export const editPickUpDestination = (parcel, parcel_id) => (
  dispatch,
  getState
) => {
  // const parcel_id = getState().parcels.parcels && getState().parcels.parcels.id; //check if userdata is loaded
  dispatch(setParcelLoading());
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
      console.log(data);
      dispatch({ type: EDIT_PICKUP_DESTINATION, payload: data });
    });
};

export const cancelDelivery = (id) => (dispatch, getState) => {
  dispatch(setParcelLoading());
  const user_id = getState().auth.userInfo && getState().auth.userInfo.id;

  fetch(`https://sendit-parcel.herokuapp.com/parcels/${id}/cancel`, {
    method: "PUT",
    body: JSON.stringify({ user_id }),
    headers: {
      "Content-type": "application/json",
      "x-access-token": localStorage.getItem("token"),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: CANCEL_DELIVERY, payload: data });
    });
};

export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};

export const setParcelLoading = () => {
  return {
    type: PARCELS_LOADING,
  };
};
