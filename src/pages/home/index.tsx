import React from "react";
import { Mousewheel, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import './index.css'
import InitPage from "./InitPage";
import { useSize } from "../../hooks/useSize";
import { useHomeResult } from '../../hooks/useHomeResult'

import Footer from "../../components/Footer";
import { getLanguage } from '../../utils/index'
import { useLocation } from "react-router-dom";

function Home() {
  const target = React.useRef(null)
  const size = useSize(target)
  const location: any = useLocation()
  const {
    data: homeResult,
    isLoading: homeResultLoading,
  } = useHomeResult({language: getLanguage(), topTitleId: location?.state?.id || 1})

  const styleBanner1 = {
    backgroundImage: `url(${size?.width > 580 ? homeResult?.pc?.banner1 : homeResult?.h5?.banner1})`
  }
  const styleBanner2 = {
    backgroundImage: `url(${size?.width > 580 ? homeResult?.pc?.banner2 : homeResult?.h5?.banner2})`
  }
  const styleBanner3 = {
    backgroundImage: `url(${size?.width > 580 ? homeResult?.pc?.banner3 : homeResult?.h5?.banner3})`
  }
  const styleBanner4 = {
    backgroundImage: `url(${size?.width > 580 ? homeResult?.pc?.banner4 : homeResult?.h5?.banner4})`
  }
  const styleBanner5 = {
    backgroundImage: `url(${size?.width > 580 ? homeResult?.pc?.banner5 : homeResult?.h5?.banner5})`,
    height: '90vh'
  }

  return (
    <div ref={target} className="home">
      <Swiper
        direction={"vertical"}
        speed={1000}
        slidesPerView={1}
        spaceBetween={0}
        // 禁止点击
        simulateTouch={false}
        mousewheel={{
          // 滚轮灵明度
          sensitivity: 100,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        {
          size?.width > 580 && 
          <SwiperSlide>
            <InitPage />
          </SwiperSlide>
        }
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
        <SwiperSlide>
          <div style={styleBanner5} className="banner-item">
            <div className="home-footer">
              <Footer />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}


export default Home
