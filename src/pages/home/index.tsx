import React from "react";
import { Mousewheel, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import './index.css'
import InitPage from "./InitPage";
import { useSize } from "../../hooks/useSize";
import Banner1Bg from '../../assets/home/banner-1.jpeg'
import Banner2Bg from '../../assets/home/banner-2.jpeg'
import Banner3Bg from '../../assets/home/banner-3.jpeg'
import Banner4Bg from '../../assets/home/banner-4.jpeg'

function Home() {
  const target = React.useRef(null)
  const size = useSize(target)

  const styleBanner1 = {
    backgroundImage: `url(${size?.width > 580 ? Banner1Bg : Banner1Bg})`
  }
  const styleBanner2 = {
    backgroundImage: `url(${size?.width > 580 ? Banner2Bg : Banner2Bg})`
  }
  const styleBanner3 = {
    backgroundImage: `url(${size?.width > 580 ? Banner3Bg : Banner3Bg})`
  }
  const styleBanner4 = {
    backgroundImage: `url(${size?.width > 580 ? Banner4Bg : Banner4Bg})`
  }

  return (
    <div ref={target} className="home">
      <Swiper
        direction={"vertical"}
        speed={1000}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={{
          // 滚轮灵明度
          sensitivity: 100,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <InitPage />
        </SwiperSlide>
        <SwiperSlide>
          <div style={styleBanner1} className="banner-item"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={styleBanner2} className="banner-item"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={styleBanner3} className="banner-item"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={styleBanner4} className="banner-item"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}


export default Home
