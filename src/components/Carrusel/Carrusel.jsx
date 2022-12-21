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
import Chori from "../../assets/images/Chori-argento.png"
import Delivery from "../../assets/images/Delivery.png"
import DeliPizza from "../../assets/images/Deli-pizza.png"
import Empacknadas from "../../assets/images/Empacknadas.png"
import FreshAndTasty from "../../assets/images/Fresh-&-tasty-food.png"
import MenuEspecial from "../../assets/images/Menú-especial.png"
import Promos from "../../assets/images/Promos-mundialistas.png"
import Scaloburguer from "../../assets/images/Scaloburguer.png"

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
          src={Chori}
          alt="Chori-argento"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="img__carrusel"
          src={Delivery}
          alt="Delivery"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="img__carrusel"
          src={DeliPizza}
          alt="DeliPizza"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="img__carrusel"
          src={Empacknadas}
          alt="Empacknadas"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="img__carrusel"
          src={FreshAndTasty}
          alt="Fresh-&-tasty-food"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="img__carrusel"
          src={MenuEspecial}
          alt="Menú-especial"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="img__carrusel"
          src={Promos}
          alt="Promos-mundialistas"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="img__carrusel"
          src={Scaloburguer}
          alt="Scaloburguer"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carrusel;
