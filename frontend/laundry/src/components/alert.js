import React from "react";
import '../styles/alert.css';

const Alert = props => {
    const orderId = "123XXX" // dummy
  return (
    <div className="popup-box">
      <div className="box">
          <div className="alert-close">
          <p>Alert</p><b><span className="close-icon" >X</span></b>
          </div>

          <div className="alert-desc">
          <span className="danger-symbol">&#9888;</span>
            <p>Are you sure you want to cancel the
                order <b>No: {orderId}</b>
            </p>
          </div>
          <button className="proceed-btn">Proceed</button>
      </div>
    </div>
  );
};
 
export default Alert;