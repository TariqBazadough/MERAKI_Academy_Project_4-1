import React, { useContext, useEffect, useState } from "react";
import { PendingApprovalContext } from "../../contexts/pendingApproval";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./pendingApproval.css";

const PendingApproval = () => {
  const pendingApprovalContext = useContext(PendingApprovalContext);
  const history = useHistory();

  useEffect(() => {
    pendingApprovalContext.showApproval();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form>
        <div>
          <h1 onClick={handleSubmit}>Pending Approval</h1>
        </div>
        {pendingApprovalContext.found.map((elem) => {
          return (
            <div className="manage-product">
              <p className="title">{elem.title}</p>
              <p className="info">Description :{elem.shortDescription}</p>
              <p className="info">Located in :{elem.location}</p>
              <p className="info">In Stock : {elem.quantity}</p>
              <p className="info">Price :{elem.price}</p>
              <button className="acttion-button">Approve</button>
              <button className="acttion-button">Remove</button>
            </div>
          );
        })}
      </form>
    </>
  );
};

export default PendingApproval;
