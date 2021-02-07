import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CreateParcel.css";

const CreateParcel = () => {
  toast.configure();
  const history = useHistory();
  const user_id = localStorage.getItem("currentUserId");
  const [value, setValue] = useState({
    recipient_name: "",
    recipient_phone_no: "",
    destination: "",
    pickup_location: "",
  });
  const onChange = (e) =>
    setValue({ ...value, [e.target.name]: e.target.value });
  return (
    <div className="Create">
      <div class="form">
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
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateParcel;
