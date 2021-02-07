import { LOAD_PARCELS, PARCELS_LOADING } from "./actionTypes";

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

export const setParcelLoading = () => {
  return {
    type: PARCELS_LOADING,
  };
};
