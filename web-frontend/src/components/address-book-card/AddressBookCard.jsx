import React from "react";
import { Link } from "react-router-dom";

const AddressBookCard = () => {
  return (
    <React.Fragment>
      <figure className="md:border sm:border-b md:shadow-md">
        <div className="md:p-5 sm:py-5 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-xl">Home</h1>
            <div className="flex space-x-2">
              <Link to={"/address-book/edit/3434"} className="btn-secondary-sm flex items-center justify-center">Edit</Link>
              <button className="btn-danger-sm flex items-center justify-center">Delete</button>
            </div>
          </div>
          <div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Labhansh Satpute</li>
              <li>labhansh25@gmail.com</li>
              <li>8668395680, 9876543210</li>
              <li>Flat. No. 304, SkyHigh Apartments</li>
              <li>Manish Nagar, Somalwada,</li>
              <li>Nagpur - 440001, Maharashtra, India</li>
            </ul>
          </div>
        </div>
      </figure>
    </React.Fragment>
  );
}

export default AddressBookCard;