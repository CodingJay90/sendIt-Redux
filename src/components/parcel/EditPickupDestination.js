import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  editPickUpDestination,
} from "../../redux/actions/parcelActions";
import "../auth/Auth.css";

const EditPickupDestination = (props) => {
  const destination = props.history.location.state.destination;
  const parcel_id = props.history.location.state.id;
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.auth.userInfo.id);
  const [value, setValue] = useState("");
  useEffect(() => setValue(destination), [destination]);
  toast.configure();
  const history = useHistory();

  //redux selectors
  const isLoading = useSelector((state) => state.parcels.isLoading);
  const success = useSelector((state) => state.parcels.success);
  const errors = useSelector(
    (state) => state.parcels.errors && state.parcels.errors.errors
  );

  const parcelBody = {
    destination: value,
    user_id,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editPickUpDestination(parcelBody, parcel_id));
    console.log(user_id);
  };

  useEffect(() => {
    dispatch(clearErrors());
    if (success) {
      toast.success("parcels destination updated");
      setTimeout(() => {
        history.push("/userDashboard");
      }, 2000);
    }
  }, [errors, success]);

  return (
    <div className="Create">
      <div class="form">
        {errors !== null &&
          errors.length &&
          errors.map((error) => {
            toast.error(error.msg);
            console.log(error);
          })}
        <h1>Edit pickup Destination</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="destination">Pickup Destination</label>
          <input
            type="text"
            name="destination"
            placeholder="Update pick up destination"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button className="submit-btn">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditPickupDestination;
