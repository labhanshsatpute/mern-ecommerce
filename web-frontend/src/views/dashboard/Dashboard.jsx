import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineEmail, MdOutlinePhone, MdChevronRight } from "react-icons/md";

const Dashboard = () => {
  return (
    <React.Fragment>

      {/* Bread Crumbs (Start) */}
      <section className="py-6 border-b shadow-sm relative">
        <div className="container">
          <ul className="flex items-center justify-start space-x-3">
            <li><Link to={"/"} className="link">Home</Link></li>
            <li><MdChevronRight size={20} /></li>
            <li><Link to={"/dashboard"} className="link">Dashboard</Link></li>
          </ul>
        </div>
      </section>
      {/* Bread Crumbs (End) */}

      {/* Dashboard Section (Start) */}
      <section className="relative py-10">
        <div className="container space-y-10">

          {/* Title */}
          <div>
            <h1 className="font-semibold md:text-3xl sm:text-2xl">My Dashboard</h1>
          </div>

          <div className="md:space-y-10 sm:space-y-5">

            {/* Dashboard Overview Card (Start) */}
            <div>
              <div className="p-16 rounded-md bg-ascent bg-opacity-5">
                <div className="flex md:flex-row sm:flex-col items-center md:space-x-6 sm:space-x-0 md:space-y-0 sm:space-y-8">
                  <div>
                    <div className="h-[100px] w-[100px] rounded-full overflow-clip bg-white ring-4 ring-ascent shadow-xl shadow-purple-200 border-white border-4">
                      <img src="/images/dashboard/default-profile.png" alt="" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h1 className="font-semibold text-2xl text-center text-ascent">Labhansh Satpute</h1>
                    <p className="font-medium text-sm flex items-center md:justify-start sm:justify-center space-x-1">
                      <MdOutlineEmail size={15} />
                      <span>labhansh25@gmail.com</span>
                    </p>
                    <p className="font-medium text-sm flex items-center md:justify-start sm:justify-center space-x-1">
                      <MdOutlinePhone size={15} />
                      <span>8668395680</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Dashboard Overview Card (End) */}

            {/* Small Card Grid (Start) */}
            <div>
              <div className="grid md:grid-cols-5 sm:grid-cols-2 md:gap-10 sm:gap-5">

                {/* Order Card (Start) */}
                <Link to={"/orders"} className="group">
                  <figure className="bg-ascent bg-opacity-5 rounded-md w-full shadow-none hover:shadow-xl transition duration-300 ease-in-out hover:ease-in-out">
                    <div className="md:p-9 sm:py-9 px-2 flex flex-col space-y-5 items-center justify-center">
                      <img src="/images/dashboard/orders.png" className="md:h-[70px] sm:h-[50px] w-auto" alt="orders" />
                      <div className="text-center space-y-1">
                        <p className="font-medium md:text-lg sm:text-base group-hover:text-ascent">My Orders</p>
                        <p className="text-xs text-gray-500">Manage your orders</p>
                      </div>
                    </div>
                  </figure>
                </Link>
                {/* Order Card (End) */}

                {/* Address Card (Start) */}
                <Link to={"/address-book"} className="group">
                  <figure className="bg-ascent bg-opacity-5 rounded-md w-full shadow-none hover:shadow-xl transition duration-300 ease-in-out hover:ease-in-out">
                    <div className="md:p-9 sm:py-9 px-2 flex flex-col space-y-5 items-center justify-center">
                      <img src="/images/dashboard/address.png" className="md:h-[70px] sm:h-[50px] w-auto" alt="orders" />
                      <div className="text-center space-y-1">
                        <p className="font-medium md:text-lg sm:text-base group-hover:text-ascent">Address Book</p>
                        <p className="text-xs text-gray-500">Manage your addresses</p>
                      </div>
                    </div>
                  </figure>
                </Link>
                {/* Address Card (End) */}

                {/* Setting Card (Start) */}
                <Link to={"/account-setting"} className="group">
                  <figure className="bg-ascent bg-opacity-5 rounded-md w-full shadow-none hover:shadow-xl transition duration-300 ease-in-out hover:ease-in-out">
                    <div className="md:p-9 sm:py-9 px-2 flex flex-col space-y-5 items-center justify-center">
                      <img src="/images/dashboard/information.png" className="md:h-[70px] sm:h-[50px] w-auto" alt="orders" />
                      <div className="text-center space-y-1">
                        <p className="font-medium md:text-lg sm:text-base group-hover:text-ascent">Account Setting</p>
                        <p className="text-xs text-gray-500">Manage your account info</p>
                      </div>
                    </div>
                  </figure>
                </Link>
                {/* Setting Card (End) */}

                {/* Support Card (Start) */}
                <Link to={"/orders"} className="group">
                  <figure className="bg-ascent bg-opacity-5 rounded-md w-full shadow-none hover:shadow-xl transition duration-300 ease-in-out hover:ease-in-out">
                    <div className="md:p-9 sm:py-9 px-2 flex flex-col space-y-5 items-center justify-center">
                      <img src="/images/dashboard/support.png" className="md:h-[70px] sm:h-[50px] w-auto" alt="orders" />
                      <div className="text-center space-y-1">
                        <p className="font-medium md:text-lg sm:text-base group-hover:text-ascent">Support</p>
                        <p className="text-xs text-gray-500">Contact customer support</p>
                      </div>
                    </div>
                  </figure>
                </Link>
                {/* Support Card (End) */}

              </div>
            </div>
            {/* Small Card Grid (End) */}

          </div>

        </div>
      </section>
      {/* Dashboard Section (End) */}

    </React.Fragment>
  );
}

export default Dashboard;