import React from "react";

import HeaderCartDropdown from "../components/dropdowns/HeaderCartDropdown";
import { FiSearch, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const DesktopHeader = () => {
  return (
    <React.Fragment>
      <nav className="bg-white w-full py-5 shadow-lg z-50 relative">
        <div className="container">
          <div className="grid grid-cols-3 items-center justify-between">

            <div>
              <Link to={"/"} className="font-medium text-web-ascent">Ecommerce</Link>
            </div>

            <div className="">
              <ul className="header-link-list md:flex sm:hidden">
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>

            <div>
              <div className="flex items-center justify-end space-x-5">

                <div>
                  <button><FiSearch size={23} /></button>
                </div>
                <HeaderCartDropdown />
                <div>
                  <Link to={"/dashboard"}><FiUser size={23} /></Link>
                </div>
                
                
              </div>
            </div>

          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default DesktopHeader;