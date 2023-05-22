import React from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlinePencilAlt } from "react-icons/hi";

const AccountInformation = () => {
  return (
    <React.Fragment>
      <figure className="bg-white border md:shadow-md">
        <div className="bg-ascent-dark md:px-20 sm:px-10 relative py-20 overflow-visible">
          <img src="/images/dashboard/default-profile.png" alt="profile-img"
            className="h-[130px] w-[130px] rounded-full absolute z-20 -bottom-1/3 bg-white ring-8 ring-gray-300" />
        </div>
        <div className="md:px-20 sm:px-9 pt-20 md:pb-16 sm:pb-9 space-y-7">
          <div className="space-y-2">
            <p className="text-2xl font-semibold">Good Morning , Labhansh</p>
            <p className="text-gray-500 text-sm flex items-center">
              <HiOutlineMail size={15} className="mr-1" /> labhansh25@gmail.com</p>
            <p className="text-gray-500 text-sm flex items-center">
              <HiOutlinePhone size={15} className="mr-1" /> 8668395680</p>
          </div>
          <div>
            <a href="#"
              className="btn-light-md flex items-center justify-center w-fit">
                <HiOutlinePencilAlt size={15} className="mr-1" /> Edit Information</a>
          </div>
        </div>
      </figure>
    </React.Fragment>
  );
}

export default AccountInformation;