import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashboardSidebar from "../components/sidebar/DashboardSidebar";
import { useEffect } from "react";

const Dashboard = () => {

  const [ title, setTitle ] = useState();

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes('dashboard')) setTitle('My Dashboard');
    if (pathname.includes('orders')) setTitle('My Orders');
    if (pathname.includes('order/details')) setTitle('Order Details');
    if (pathname.includes('address-book')) setTitle('Address Book');
    if (pathname.includes('address-add')) setTitle('Add Address');
    if (pathname.includes('address-edit')) setTitle('Edit Address');
    if (pathname.includes('account-setting')) setTitle('Account Setting');
  },[pathname])

  return (
    <React.Fragment>
      <section className="md:py-16 sm:py-10">
        <div className="container space-y-10">
          <div>
            <h1 className="font-semibold text-2xl">{title}</h1>
          </div>
          <div className="grid md:grid-cols-12 sm:grid-cols-1 md:gap-10 sm:gap-7">
            <div className="md:col-span-3 sm:col-span-1">
              <DashboardSidebar />
            </div>
            <div className="md:col-span-9 sm:col-span-1">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Dashboard;