import React from "react";
import { TbHome2, TbBox, TbClipboardList, TbSettings, TbLogout } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

const DashboardSidebar = () => {

  const { pathname } = useLocation();

  return (
    <React.Fragment>
      <aside className="dashboard-sidebar">
        <ul>
          <li className={ pathname.includes('dashboard') ? "active" : null }>
            <Link to={"/dashboard"}>
              <button><TbHome2 /> My Dashboard</button>
            </Link>
          </li>
          <li className={ pathname.includes('order') ? "active" : null }>
            <Link to={"/orders"}>
              <button><TbBox /> My Orders</button>
            </Link>
          </li>
          <li className={ pathname.includes('address') ? "active" : null }>
            <Link to={"/address-book"}>
              <button><TbClipboardList /> Address Book</button>
            </Link>
          </li>
          <li className={ pathname.includes('setting') ? "active" : null }>
            <Link to={"/account-setting"}>
              <button><TbSettings /> Account Setting</button>
            </Link>
          </li>
          <li>
            <button type="button"><TbLogout /> Logout</button>
          </li>
        </ul>
      </aside>
    </React.Fragment>
  );
}

export default DashboardSidebar;