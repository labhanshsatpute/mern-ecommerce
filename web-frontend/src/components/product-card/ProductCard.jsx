import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const ProductCard = () => {
  return (
    <React.Fragment>
      <figure className="overflow-clip group">
        <div className="relative h-auto w-auto"> 
          <button className="h-[40px] w-[40px] rounded-full absolute z-20 md:top-5 md:right-5 sm:top-4 sm:right-4 flex items-center justify-center bg-white hover:bg-pink-600 transition duration-300 ease-in-out hover:ease-in-out shadow-lg border hover:text-white opacity-0 group-hover:opacity-100"><AiOutlineHeart className="mt-[2px]" /></button>
          <a href="#" className="h-auto w-full overflow-clip flex items-center justify-center relative">
              <img src="/images/product/product-img-1.png" alt="img-1" className="h-auto w-full opacity-100 group-hover:opacity-0 absolute transition duration-300 ease-in-out group-hover:ease-in-out" />
              <img src="/images/product/product-img-2.png" alt="img-1" className="h-auto w-full opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:ease-in-out" />
          </a>
        </div>
        <div className="md:pt-5 sm:pt-3 space-y-2">
          <h1 className="md:text-base sm:text-sm font-medium group-hover:text-ascent transition duration-200 ease-in-out group-hover:ease-in-out">Nike Mens Air Zoom Pegasus Shoes</h1>
          <div className="space-y-1">
            <div className="flex space-x-2 items-baseline">
              <p className="md:text-lg sm:text-base font-semibold">{process.env.REACT_APP_CURRENCY}599.00</p>
              <p className="md:text-sm sm:text-xs font-medium line-through text-gray-500">{process.env.REACT_APP_CURRENCY}999.00</p>
            </div>
              <p className="md:text-xs sm:text-[0.6rem] text-gray-600">You will save {process.env.REACT_APP_CURRENCY}399 on this purchase</p>
          </div>
          
        </div>
      </figure>
    </React.Fragment>
  );
}

export default ProductCard;