import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/sidebar/DashboardSidebar";

const Dashboard = () => {
  return (
    <React.Fragment>
      <section className="md:py-16 sm:py-10">
        <div className="container">
          <div className="grid md:grid-cols-12 sm:grid-cols-1">
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