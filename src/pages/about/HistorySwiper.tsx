import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";


// import required modules
import { Pagination,Navigation } from "swiper";
import { useSize } from "../../hooks/useSize";

export default function HistorySwiper() {
  const target = React.useRef(null)
  const size = useSize(target)
  
  const mockData = [
    {
      time: '2011年',
      descList: [
        '华宝新能成立',
      ]
    },
    {
      time: '2015年',
      descList: [
        '决定主营产品从充电宝向便携储能转型升级',
        '起草《便携式数字设备用移动电源通用规范》GB/T35590-2017',
      ]
    },
    {
      time: '2016年',
      descList: [
        '全球首款锂电池便携储能产品上市',
        '荣获德国红点设计大奖、德国IF设计大奖',
      ]
    },
    {
      time: '2018年',
      descList: [
        '发起起草《便携式锂离子电池储能电源技术规范》',
        '荣获德国红点设计大奖、美国CES创新奖',
      ]
    },
    {
      time: '2020年',
      descList: [
        '广东省分布式太阳能智能小型储能工程技术研究中心',
        '荣获美国CES创新奖',
      ]
    },
    {
      time: '2021年',
      descList: [
        '广东省科学技术进步二等奖',
        `荣获德国红点设计大奖2项、德国IF设计大奖、A'DesignAward&Competition设计金奖4项`,
      ]
    },
  ]
  return (
    <div ref={target} className="development-wrapper">
      <Swiper
        slidesPerView={size?.width > 580 ? 4 : 1}
        spaceBetween={40}
        modules={[Pagination]}
        className="history-swiper"
      >
        {
          mockData.map((item,index) => {
            return (
              <SwiperSlide key={index}>
                <div className="swiper-item">
                  <p className="title">{item?.time}</p>
                  {
                    item?.descList.map((x) => {
                      return (
                        <div className="development-text" key={x}>
                          <div className="circle"></div>
                          <p className="description" key={x}>{x}</p>
                        </div>
                      )
                    })
                  }
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
}
