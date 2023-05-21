import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const CategoryBanner = () => {
  return (
    <React.Fragment>
      <section className="md:py-20 sm:py-10">
        <div className="container">
          <div className="grid md:grid-cols-9 sm:grid-cols-1 gap-6">

            {/* First Banner (Start) */}
            <div className="md:col-span-4 sm:col-span-1">
              <div className="md:h-[600px] sm:h-[300px] w-full overflow-clip group">
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
                  <img src="/images/home-banners/banner1.png" alt="banner-1" className="h-auto w-full scale-100 group-hover:scale-110 transition duration-300 ease-in-out group-hover:ease-in-out relative top-0" />
                </div>
              </div>
            </div>
            {/* First Banner (End) */}

            <div className="md:col-span-5 sm:col-span-1 space-y-6">

              <div className="md:h-[288px] sm:h-auto grid md:grid-cols-2 sm:grid-cols-1 gap-6">

                {/* Second Banner (Start) */}
                <div className="md:h-[288px] sm:h-[300px] w-full overflow-clip group">
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
                    <img src="/images/home-banners/banner2.png" alt="banner-1" className="h-auto w-full scale-100 group-hover:scale-110 transition duration-300 ease-in-out group-hover:ease-in-out relative top-0" />
                  </div>
                </div>
                {/* Second Banner (End) */}

                {/* Third Banner (Start) */}
                <div className="md:h-[288px] sm:h-[300px] w-full overflow-clip group">
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
                    <img src="/images/home-banners/banner3.png" alt="banner-1" className="h-auto w-full scale-100 group-hover:scale-110 transition duration-300 ease-in-out group-hover:ease-in-out relative top-0" />
                  </div>
                </div>
                {/* Third Banner (End) */}

              </div>

              {/* Fourth Banner (Start) */}
              <div className="md:h-[288px] sm:h-[300px] w-full overflow-clip group">
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
                  <img src="/images/home-banners/banner4.png" alt="banner-1" className="md:h-auto md:w-full sm:h-full sm:w-fit scale-100 group-hover:scale-110 transition duration-300 ease-in-out group-hover:ease-in-out relative top-0" />
                </div>
              </div>
              {/* Fourth Banner (End) */}

            </div>


          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default CategoryBanner;