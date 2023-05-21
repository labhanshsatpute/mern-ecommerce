import React, { useState, useRef, useEffect } from "react";
import { FiShoppingBag, FiTrash2 } from "react-icons/fi";

const CartItem = () => {
  return (
    <React.Fragment>
      <figure className="flex items-start justify-start space-x-3 p-5">
        <div className="h-[100px] w-[100px] flex items-start justify-center overflow-clip rounded">
          <img src="https://cdn.shopify.com/s/files/1/1002/7150/products/New-Mockups-models-Kamal-Fan-Tribute-T-Shirt-m.jpg?v=1600760245" alt="product-image" />
        </div>
        <div className="space-y-2 h-[97px] w-[200px] flex flex-col justify-between items-stretch">
          <div className="space-y-[2px]">
            <h1 className="text-sm font-medium">Kamal Fan Tribute T-Shirt</h1>
            <p className="text-[0.65rem] text-gray-600">Quantity : 1</p>
            <p className="text-[0.65rem] text-gray-600">Size : Small</p>
            <p className="text-[0.65rem] text-gray-600">Color : Blue</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline justify-start space-x-1">
              <h1 className="text-sm font-semibold">{process.env.REACT_APP_CURRENCY}500</h1>
              <h1 className="text-[0.65rem] line-through text-gray-500">{process.env.REACT_APP_CURRENCY}1000</h1>
              <h1 className="text-[0.65rem] text-green-600">10% Off</h1>
            </div>
            <button className="text-red-500 hover:text-red-800"><FiTrash2 size={15} /></button>
          </div>
          
        </div>
      </figure>
    </React.Fragment>
  );
}

const HeaderCartDropdown = () => {

  const [state, setState] = useState(true);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    if (state) setState(false);
    else setState(true);
  }

  const handleClickOutside = (event) => {
    console.log(dropdownRef);
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setState(true);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  return (
    <React.Fragment>
      <div className="header-dropdown" ref={dropdownRef}>
        <button onClick={() => handleToggleDropdown()}>
          <FiShoppingBag size={23} />
        </button>
        <div className="header-dropdown-content w-[350px]" hidden={state}>
          <div className="px-5 py-4 border-b">
            <p className="font-semibold text-base">My Cart</p>
            <p className="text-gray-500 text-xs">No items in you cart please add items</p>
          </div>
          <div className="divide-y border-b">
            <CartItem />
            <CartItem />
          </div>
          <div className="px-5 py-4 border-b">
            <table className="w-full">
              <tr>
                <th className="font-medium text-sm text-left pb-2 text-gray-600">Delivery Charges</th>
                <th className="font-medium text-sm text-right pb-2 text-gray-600">{process.env.REACT_APP_CURRENCY}100.00</th>
              </tr>
              <tr>
                <th className="font-medium text-sm text-left pb-2 text-gray-600">Tax (GST)</th>
                <th className="font-medium text-sm text-right pb-2 text-gray-600">{process.env.REACT_APP_CURRENCY}18.00</th>
              </tr>
              <tr>
                <th className="font-semibold text-sm text-left">Grand Total : </th>
                <th className="font-semibold text-sm text-right">{process.env.REACT_APP_CURRENCY}1000.00</th>
              </tr>
            </table>
          </div>
          <div className="p-5">
            <button className="btn-primary-md w-full">View Cart</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeaderCartDropdown;