import React from "react";
import FrontCarousel from "../components/homeSections/FrontCarousel";
import CategoryBanner from "../components/homeSections/CategoryBanner";

const Home = () => {
  return (
    <React.Fragment>
      <FrontCarousel/>
      <CategoryBanner/>
    </React.Fragment>
  );
}

export default Home;