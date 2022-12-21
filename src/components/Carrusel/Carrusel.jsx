import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Controller,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carrusel.css"

const Carrusel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Controller, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      //spaceBetween={50}
      //slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          className="img__carrusel"
          src="https://images.pexels.com/photos/1447092/pexels-photo-1447092.png?cs=srgb&dl=pexels-thanhhoa-tran-1447092.jpg&fm=jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="img__carrusel"
          src="http://www.nasa.gov/sites/default/files/thumbnails/image/web_first_images_release_0.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="img__carrusel"
          src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carrusel;
