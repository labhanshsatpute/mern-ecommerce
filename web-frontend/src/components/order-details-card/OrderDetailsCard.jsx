import React from "react";
import { Link } from "react-router-dom";

const OrderDetailsCard = () => {
  return (
    <React.Fragment>
      <figure>
        <div className="space-y-2 p-5 border shadow-md">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold md:text-xl sm:text-lg">Order ID - 100230</h1>
            <p className="alert-warning-sm">Order Placed</p>
          </div>
          <div className="space-y-3">
            <div>
              <h1 className="font-medium text-base mb-1">Deliver to</h1>
              <div className="space-y-1">
                <p className="text-sm text-slate-800 flex items-center justify-start mb-1">Labhansh Satpute</p>
                <p className="text-sm text-slate-800 flex items-center justify-start mb-1">labhansh25@gmail.com, 8668395680</p>
              </div>
            </div>
            <div>
              <h1 className="font-medium text-base mb-1">Address</h1>
              <div className="space-y-1">
                <p className="text-sm text-slate-800 flex items-center justify-start mb-1">
                  Flat. No. 304, SkyHigh Apartments,</p>
                <p className="text-sm text-slate-800 flex items-center justify-start mb-1">
                  Manish Nagar, Somalwada, Nagpur - 440001, Maharashtra</p>
              </div>
            </div>
            <div>
              <p className="text-base font-medium text-slate-800 flex items-center justify-start mb-1">{process.env.REACT_APP_CURRENCY}599.00</p>
            </div>
            <div className="pt-2">
              <Link to={"/order/details/34343"} className="btn-light-sm">View Order Details</Link>
            </div>
          </div>
        </div>
      </figure>
    </React.Fragment>
  );
}

export default OrderDetailsCard;