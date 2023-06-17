import React from "react";
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import InputBox from "../../components/form-elements/InputBox";
import ProfileUpload from "../../components/form-elements/ProfileUpload";

const Setting = () => {

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
            <li><Link to={"/address-book"} className="link">Account Setting</Link></li>
          </ul>
        </div>
      </section>
      {/* Bread Crumbs (End) */}

      {/* Address Section (Start) */}
      <section className="relative py-10">
        <div className="container space-y-10">
          <div>
            <h1 className="font-semibold md:text-3xl sm:text-2xl">Account Setting</h1>
          </div>
          <div className="grid md:grid-cols-5 sm:grid-cols-1 md:gap-10 sm:gap-5">

            <div className="md:col-span-5 sm:col-span-1">
              <h1 className="font-semibold text-lg mb-1">General Information</h1>
              <p className="text-xs text-gray-600 font-light">Please fill the required fields</p>
            </div>

            <div className="md:col-span-5 sm:col-span-1">
              <ProfileUpload />
            </div>

          </div>
          <div>
            <button type="submit" className="btn-primary-md md:w-fit sm:w-full">Save Changes</button>
          </div>
        </div>
      </section>
      {/* Address Section (End) */}

    </React.Fragment>
  );
}

export default Setting;