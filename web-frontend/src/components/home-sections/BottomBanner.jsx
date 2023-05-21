import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const BottomBanner = () => {
  return (
    <React.Fragment>
      <section className="md:pb-20 sm:pb-10">
        <div className="container">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">

            {/* First Banner (Start) */}
            <div className="md:h-[250px] sm:h-[300px] w-full overflow-clip group">
              <div className="h-full w-full flex items-start justify-start relative">
                <div className="absolute md:top-0 sm:bottom-0 z-10 md:p-7 sm:p-5">
                  <div className="md:space-y-5 sm:space-y-3">
                    <h1 className="text-gray-800 md:text-lg sm:text-base">17% Discount</h1>
                    <h1 className="text-gray-800 md:text-2xl sm:text-xl font-bold md:leading-relaxed sm:leading-relaxed">Spring Collection <br />Style For Mens</h1>
                    <div>
                      <a href="#"><button className="btn-secondary-sm flex items-center justify-center">Learn more <BsArrowRightShort size={25} /></button></a>
                    </div>

                  </div>
                </div>
                <img src="/images/home-banners/bottom-banner-1.png" alt="banner-1" className="md:h-auto md:w-full sm:h-full sm:w-fit scale-100 group-hover:scale-110 transition duration-300 ease-in-out group-hover:ease-in-out relative top-0" />
              </div>
            </div>
            {/* First Banner (End) */}

            {/* Second Banner (Start) */}
            <div className="md:h-[250px] sm:h-[300px] w-full overflow-clip group">
              <div className="h-full w-full flex items-start justify-start relative">
                <div className="absolute md:top-0 sm:bottom-0 z-10 md:p-7 sm:p-5">
                  <div className="md:space-y-5 sm:space-y-3">
                    <h1 className="text-gray-800 md:text-lg sm:text-base">17% Discount</h1>
                    <h1 className="text-gray-800 md:text-2xl sm:text-xl font-bold md:leading-relaxed sm:leading-relaxed">Spring Collection <br />Style For Mens</h1>
                    <div>
                      <a href="#"><button className="btn-secondary-sm flex items-center justify-center">Learn more <BsArrowRightShort size={25} /></button></a>
                    </div>

                  </div>
                </div>
                <img src="/images/home-banners/bottom-banner-2.png" alt="banner-1" className="md:h-auto md:w-full sm:h-full sm:w-fit scale-100 group-hover:scale-110 transition duration-300 ease-in-out group-hover:ease-in-out relative top-0" />
              </div>
            </div>
            {/* Second Banner (End) */}

          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default BottomBanner;