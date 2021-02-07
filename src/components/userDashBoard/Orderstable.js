import React from "react";
import "./OrdersTable.css";
import Spinner from "../common/Spinner";
import { Link } from "react-router-dom";

const Orderstable = ({ isLoading, parcels }) => {
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
                            <span className="function-btn">
                              {item.status !== "cancelled" && (
                                <button className="edit">Edit</button>
                              )}
                              <Link to="/editParcel" className="cancel">
                                Cancel
                              </Link>
                            </span>
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
