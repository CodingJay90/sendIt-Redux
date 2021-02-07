import React from "react";
import "./OrdersTable.css";
import Spinner from "../common/Spinner";

const Orderstable = ({ isLoading, parcels }) => {
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div class="table-wrapper">
          <table class="fl-table">
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
              {parcels != null
                ? parcels.map((item) => {
                    return (
                      <>
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.recipient_name}</td>
                          <td>{item.recipient_phone_no}</td>
                          <td>{item.pickup_location}</td>
                          <td>{item.destination}</td>
                          <td>{item.status}</td>
                          <td>
                            <span className="function-btn">
                              <button className="edit">Edit</button>
                              <a className="cancel">Cancel</a>
                            </span>
                          </td>
                        </tr>
                      </>
                    );
                  })
                : " You have no delivery order yet"}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orderstable;
