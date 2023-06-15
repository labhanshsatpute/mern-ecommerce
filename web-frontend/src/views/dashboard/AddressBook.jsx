import React from "react";
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import AddressBookCard from "../../components/address-book-card/AddressBookCard";

const AddressBook = () => {
  return (
    <React.Fragment>

      {/* Bread Crumbs (Start) */}
      <section className="py-6 border-b shadow-sm relative">
        <div className="container">
          <ul className="flex items-center justify-start space-x-3">
            <li><Link to={"/"} className="link">Home</Link></li>
            <li><MdChevronRight size={20} /></li>
            <li><Link to={"/dashboard"} className="link">Dashboard</Link></li>
            <li><MdChevronRight size={20} /></li>
            <li><Link to={"/address-book"} className="link">Address Book</Link></li>
          </ul>
        </div>
      </section>
      {/* Bread Crumbs (End) */}

      {/* Address Section (Start) */}
      <section className="relative py-10">
        <div className="container space-y-10">
          <div>
            <h1 className="font-semibold md:text-3xl sm:text-2xl">Address Book</h1>
          </div>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 md:gap-10 sm:gap-5">
            <AddressBookCard/>
            <AddressBookCard/>
            <div className="py-3">
              <Link to={"/address-book/add"} className="btn-primary-md md:w-fit sm:w-full">Add New Address</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Address Section (End) */}

    </React.Fragment>
  );
}

export default AddressBook;