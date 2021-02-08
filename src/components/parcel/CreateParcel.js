import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CreateParcel.css";
import "../auth/Auth.css";
import { useDispatch, useSelector } from "react-redux";
import LoadingButton from "../common/LoadingButton";
import { clearErrors, createParcel } from "../../redux/actions/parcelActions";

const CreateParcel = () => {
  toast.configure();
  const history = useHistory();
  let user_id = useSelector(
    (state) => state.auth.userInfo && state.auth.userInfo.id
  );
  let [value, setValue] = useState({
    recipient_name: "",
    recipient_phone_no: "",
    destination: "",
    pickup_location: "",
    user_id,
  });
  const isLoading = useSelector((state) => state.parcels.isLoading);
  const success = useSelector((state) => state.parcels.success);
  const errors = useSelector(
    (state) => state.parcels.errors && state.parcels.errors.errors
  );
  const dispatch = useDispatch();
  console.log(success);

  const onChange = (e) =>
    setValue({ ...value, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    value.user_id = user_id;
    dispatch(createParcel(value));
  };

  useEffect(() => {
    dispatch(clearErrors());
    if (success) {
      toast.success("parcels created");
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
        <h1>Create Order</h1>
        <form onSubmit={handleSubmit}>
          <label for="pickup_location">Pickup Location</label>
          <input
            type="text"
            name="pickup_location"
            placeholder="Enter pickup location"
            onChange={onChange}
          />
          <label for="destination">Destination</label>
          <input
            type="text"
            name="destination"
            placeholder="enter destination"
            onChange={onChange}
          />
          <label for="recipient_name">Recipient Name</label>
          <input
            type="text"
            name="recipient_name"
            placeholder="Email recipient name"
            onChange={onChange}
          />
          <label for="recipient_phone_no">Recipient Mobile no</label>
          <input
            type="text"
            name="recipient_phone_no"
            placeholder="Recipient Mobile number"
            onChange={onChange}
          />
          {isLoading ? (
            <LoadingButton />
          ) : (
            <button className="submit-btn">Submit</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateParcel;
