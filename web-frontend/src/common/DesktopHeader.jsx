import React from "react";

import { FiShoppingBag } from "react-icons/fi";
import HeaderCartDropdown from "../dropdown/HeaderCartDropdown";

const DesktopHeader = () => {
  return (
    <React.Fragment>
      <nav className="bg-white w-full py-5 shadow-lg">
        <div className="container">
          <div className="grid grid-cols-3 items-center">

            <div>
              <a href="#">MERN Ecommerce</a>
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
              <div className="flex items-center justify-end space-x-3">

                <HeaderCartDropdown />
                

              </div>
            </div>

          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default DesktopHeader;