import React from "react";
import { Link } from "react-router-dom";

const AddressBookCard = () => {
  return (
    <React.Fragment>
      <figure className="md:p-10 sm:p-0 sm:pb-7 border-b rounded-md md:bg-ascent md:bg-opacity-5">
        <div className="space-y-4">
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