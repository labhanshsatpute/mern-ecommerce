import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CarouselBanner = ({ image, link }) => {
  return (
    <React.Fragment>
      <figure className="select-none">
        <a href={link}>
          <img src={image} alt="slider-img" className="w-full h-auto" />
        </a>
      </figure>
    </React.Fragment>
  );
}

const FrontCarousel = () => {
  return (
    <React.Fragment>
      <section>
        <Swiper style={{
            "--swiper-pagination-color": "#fff",
            "--swiper-navigation-color": "#fff",
          }}
          modules={[ Navigation, Pagination ]} navigation pagination={{ clickable: true, dynamicBullets: true }} loop >
          <SwiperSlide>
            <CarouselBanner image={"/images/front-carousel/img-1.png"} link={"#"} />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselBanner image={"/images/front-carousel/img-2.png"} link={"#"} />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselBanner image={"/images/front-carousel/img-3.png"} link={"#"} />
          </SwiperSlide>
        </Swiper>
      </section>
    </React.Fragment>
  );
}

export default FrontCarousel;