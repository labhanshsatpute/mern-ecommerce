import React from "react";

import HeaderCartDropdown from "../components/dropdown/HeaderCartDropdown";
import { FiSearch, FiUser } from "react-icons/fi";

const DesktopHeader = () => {
  return (
    <React.Fragment>
      <nav className="bg-white w-full py-5 shadow-lg z-50 relative">
        <div className="container">
          <div className="grid grid-cols-3 items-center">

            <div>
              <a href="#" className="font-medium text-web-ascent">Ecommerce</a>
            </div>

            <div>
              <ul className="header-link-list">
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
                  <button><FiUser size={23} /></button>
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