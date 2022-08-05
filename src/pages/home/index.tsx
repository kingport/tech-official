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
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const target = React.useRef(null)
  const size = useSize(target)
  const location: any = useLocation()
  const navigator = useNavigate()
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
    // height: '90vh'
  }
  const styleBanner6 = {
    backgroundImage: `url(${size?.width > 580 ? homeResult?.pc?.banner6 : homeResult?.h5?.banner6})`,
    // height: '90vh'
  }

  const renderNav = () => {
    return (
      <div className="btn-wrap">
        <a onClick={ () => navigator('/brand/storage', {state: {
        id: 16
      }})} className="btn-a active">
          {
            localStorage.getItem('lang') === 'en' ? 'Portable Power Station' : '便携储能'
          }
          </a>
        <a 
        onClick={ () => navigator('/brand/solar', {state: {
          id: 17
        }})}
        className="btn-a active">
        {
            localStorage.getItem('lang') === 'en' ? 'Solar Panel' : '太阳能板'
          }
          </a>
        <a
          onClick={ () => navigator('/brand/part', {state: {
            id: 18
          }})}
         className="btn-a active">
        {
            localStorage.getItem('lang') === 'en' ? 'Accessories' : '配件'
          }
          </a>
      </div>
    )
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
          <div style={styleBanner1} className="banner-item">
            {renderNav()}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={styleBanner2} className="banner-item">
          {renderNav()}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={styleBanner3} className="banner-item">
          {renderNav()}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={styleBanner4} className="banner-item">
          {renderNav()}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={styleBanner5} className="banner-item">
            {/* <div className="home-footer">
              <Footer />
            </div> */}
            {/* {renderNav()} */}
          </div>
        </SwiperSlide>
        {
          homeResult?.pc?.banner6 && 
          <SwiperSlide>
            <div style={styleBanner6} className="banner-item">
              {/* <div className="home-footer">
                <Footer />
              </div> */}
            {/* {renderNav()} */}
            </div>
          </SwiperSlide>
        }
      </Swiper>
    </div>
  )
}


export default Home
