// 公司简介
import React, { useState } from "react";
import ShopFooter from "../../../components/ShopFooter";
import { useSize } from "../../../hooks/useSize";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css/navigation";
// import required modules
import { Pagination,Autoplay } from "swiper";

import './index.css'
function Storage() {
  const target = React.useRef(null)
  const size = useSize(target)
  const [active,setActive] = React.useState('1')
  

  return (
    <div ref={target} className="about-container">
      <div className="content-main">
        {/* banner 背景图 */}
        <div className="com-img"></div>
        {/* 配件 */}
        <div className="row-part">
          <div className="part-box">
            <div className="container part-item wow fadeInDown">
              {
                size?.width > 580 && 
                <div className="d-none d-md-block d-sm-block">
                  <div className="part-img"><img src="https://www.hello-tech.com/images/part-img-ssm-b27578b805b2584363104e40b2081bbe4.png" alt="" /></div>
                </div>
              }
              {
                size?.width <= 580 &&
                <div className="d-block d-sm-none">
                  <div className="part-img"><img src="https://www.hello-tech.com/images/part-img-ssm-b27578b805b2584363104e40b2081bbe4.png" alt="" /></div>
                </div>
              }
              <div className="part-info"><span className="title">12V汽车电池充电线</span>
                <div className="text">可连接汽车电池充电线，随时为汽车补电，稳定电流安全补电，无需再为半路没电熄火烦恼</div>
              </div>
            </div>
          </div>
          <div className="part-box part-reverse">
            <div className="container part-item wow fadeInDown">
              {
                size?.width > 580 && 
                <div className="d-none d-md-block d-sm-block">
                  <div className="part-img"><img src="https://www.hello-tech.com/images/part-img-ssm-b27578b805b2584363104e40b2081bbe4.png" alt="" /></div>
                </div>
              }
             {
               size?.width <= 580 &&
                <div className="d-block d-sm-none">
                  <div className="part-img"><img src="https://www.hello-tech.com/images/part-img-ssm-b27578b805b2584363104e40b2081bbe4.png" alt="" /></div>
                </div>
             }
              <div className="part-info"><span className="title">并联线</span>
                <div className="text">并联线可连接两个太阳能板，并联使用，搭配便携储能，充电快人一步</div>
              </div>
            </div>
          </div>
          <div className="part-box">
            <div className="container part-item wow fadeInDown">
              {
                size?.width > 580 &&
                <div className="d-none d-md-block d-sm-block">
                  <div className="part-img"><img src="https://www.hello-tech.com/images/part-img-ssm-b27578b805b2584363104e40b2081bbe4.png" alt="" /></div>
                </div>
              }
              {
                 size?.width <= 580 &&
                  <div className="d-block d-sm-none">
                    <div className="part-img"><img src="https://www.hello-tech.com/images/part-img-ssm-b27578b805b2584363104e40b2081bbe4.png" alt="" /></div>
                  </div>
              }
              <div className="part-info"><span className="title">收纳包</span>
                <div className="text">将户外电源收入包中，双层防护/隔离高温/潮湿，夏季隔热，冬季防寒，给电源更好的保护</div>
              </div>
            </div>
          </div>
        </div>
        {/* shopFooter */}
        <ShopFooter />
      </div>
    </div>
  )
}


export default Storage
