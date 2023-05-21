import React from "react";

import FrontCarousel from "../components/home-sections/FrontCarousel";
import CategoryBanner from "../components/home-sections/CategoryBanner";
import BottomBanner from "../components/home-sections/BottomBanner";
import ProductSection from "../components/home-sections/ProductSection";

const Home = () => {
  return (
    <React.Fragment>
      <FrontCarousel/>
      <CategoryBanner/>
      <ProductSection/>
      <BottomBanner/>
    </React.Fragment>
  );
}

export default Home;