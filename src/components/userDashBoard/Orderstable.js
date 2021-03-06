import React, { useEffect } from "react";
import "./OrdersTable.css";
import Spinner from "../common/Spinner";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cancelDelivery } from "../../redux/actions/parcelActions";
import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";

const Orderstable = ({ isLoading, parcels }) => {
  toast.configure();
  const success = useSelector(
    (state) => state.parcels.response !== null && state.parcels.response.success
  );
  console.log(success);
  const dispatch = useDispatch();
  const cancelParcel = (id) => {
    dispatch(cancelDelivery(id));
  };

  useEffect(() => {
    if (success) {
      toast.success("parcel delivery cancelled");
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    }
  }, [success]);
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="table-wrapper">
          {/* CHECK IF PARCEL IS LOADED AND NOT EMPTY */}
          {parcels != null && !isLoading && parcels.msg ? (
            <h1 className="emptyOrders">{parcels.msg}!</h1>
          ) : (
            <table className="fl-table">
              <thead>
                <tr>
                  <th>Parcel Id</th>
                  <th>Recipient Name</th>
                  <th>Recipient Mobile No</th>
                  <th>Pickup Location</th>
                  <th>Destination</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* {CHECK IF PARCEL IS LOADED} */}
                {parcels != null &&
                  !isLoading &&
                  !parcels.msg &&
                  parcels.map((item) => {
                    return (
                      <React.Fragment key={item.id}>
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.recipient_name}</td>
                          <td>{item.recipient_phone_no}</td>
                          <td>{item.pickup_location}</td>
                          <td>{item.destination}</td>
                          <td>{item.status}</td>
                          <td>
                            {item.status !== "cancelled" && (
                              <span className="function-btn">
                                {/* //{" "}
                                <Link to="/editParcel" className="edit">
                                  // Edit //{" "}
                                </Link> */}
                                <Link
                                  to={{
                                    pathname: "/editDestination",
                                    state: item,
                                  }}
                                >
                                  Edit
                                </Link>
                                <button
                                  onClick={() => cancelParcel(item.id)}
                                  className="cancel"
                                >
                                  Cancel
                                </button>
                              </span>
                            )}
                          </td>
                        </tr>
                      </React.Fragment>
                    );
                  })}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default Orderstable;
