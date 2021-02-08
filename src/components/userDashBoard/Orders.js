import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Orders = ({ item }) => {
  toast.configure();

  //   const cancelParcel = (id) => {
  //     fetch(`https://sendit-parcel.herokuapp.com/parcels/${id}/cancel`, {
  //       method: "PUT",
  //       body: JSON.stringify({ user_id: localStorage.getItem("currentUserId") }),
  //       headers: {
  //         "Content-type": "application/json",
  //         "x-access-token": localStorage.getItem("token"),
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.success) {
  //           toast.success(data.msg);
  //           setTimeout(() => window.location.reload(), 2501);
  //         }
  //       })
  //       .catch((err) => toast.error(err));
  //   };
  return (
    <div>
      {/* <div class="order-item">
        <p>
          Recipient name: <span id="name">{item.recipient_name}</span>
        </p>
        <p>
          Recipient Mobile No:{" "}
          <span id="phone_no">{item.recipient_phone_no}</span>
        </p>
        <p>
          Pickup Location: <span id="location">{item.pickup_location}</span>
        </p>
        <p>
          Destination: <span id="destination">{item.destination}</span>
        </p>
        <p>
          Status: <span id="status">{item.status}</span>
        </p>
        <p>
          Parcel Id: <span id="id">{item.id}</span>
        </p>
        {item.status === "cancelled" ? null : (
          <div>
            <Link to={{ pathname: "/editDestination", state: item }}>Edit</Link>
            <button
              class="btn"
              id="cancel-btn"
              //   onClick={() => cancelParcel(item.id)}
            >
              Cancel order
            </button>
          </div>
        )}
      </div> */}
      <tr>
        <td>{item.id}</td>
        <td>{item.recipient_name}</td>
        <td>{item.recipient_phone_no}</td>
        <td>{item.pickup_location}</td>
      </tr>
    </div>
  );
};

export default Orders;
