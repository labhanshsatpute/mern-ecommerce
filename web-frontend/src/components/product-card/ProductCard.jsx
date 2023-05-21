import React from "react";

const ProductCard = () => {
  return (
    <React.Fragment>
      <a href="#">
      <figure className="overflow-clip">
        <div className="h-auto w-full overflow-clip"> 
          <img src="/images/product/product-img-1.png" alt="img-1" className="h-auto w-full" />
        </div>
        <div className="md:pt-5 sm:pt-3 space-y-2">
          <h1 className="md:text-base sm:text-sm font-medium">Nike Mens Air Zoom Pegasus Shoes</h1>
          <div className="space-y-1">
            <div className="flex space-x-2 items-baseline">
              <p className="md:text-lg sm:text-base font-semibold">{process.env.REACT_APP_CURRENCY}599.00</p>
              <p className="md:text-sm sm:text-xs font-medium line-through">{process.env.REACT_APP_CURRENCY}999</p>
            </div>
              <p className="md:text-xs sm:text-[0.6rem] text-gray-600">You will save {process.env.REACT_APP_CURRENCY}399 on this purchase</p>
          </div>
          
        </div>
      </figure>
      </a>
    </React.Fragment>
  );
}

export default ProductCard;