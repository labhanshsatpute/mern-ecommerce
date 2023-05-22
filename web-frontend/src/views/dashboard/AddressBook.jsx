import React from "react";
import OrderDetailsCard from "../../components/order-details-card/OrderDetailsCard";
import AddressBookCard from "../../components/address-book-card/AddressBookCard";
import { Link } from "react-router-dom";

const AddressBook = () => {
  return (
    <React.Fragment>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
        <AddressBookCard/>
        <AddressBookCard/>
        <div className="py-3">
          <Link to={"/address-add"} className="btn-primary-md md:w-fit sm:w-full">Add New Address</Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AddressBook;