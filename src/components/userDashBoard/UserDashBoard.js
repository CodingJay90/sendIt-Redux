import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./UserDashBoard.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loadParcels } from "../../redux/actions/parcelActions";
import Spinner from "../common/Spinner";
import Orders from "./Orders";

const UserDashBoard = () => {
  toast.configure();
  const dispatch = useDispatch();
  const parcels = useSelector((state) => state.parcels.parcels);
  const isLoading = useSelector((state) => state.parcels.isLoading);

  useEffect(() => {
    dispatch(loadParcels());
  }, []);

  return (
    <>
      <div className="container">
        <div className="hero">
          <h1>Dashboard</h1>
          <Link to="/createParcel" className="btn">
            Create Order
          </Link>
        </div>

        <div className="details">
          <div></div>
        </div>
        <h2>Orders</h2>
        <div>
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="orders-layer">
              <div className="orders">
                <table>
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
                              </tr>
                            </>
                          );
                        })
                      : " You have no delivery order yet"}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserDashBoard;
