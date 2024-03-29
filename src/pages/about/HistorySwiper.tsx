import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

import { Pagination } from 'swiper';
import { useSize } from '../../hooks/useSize';

interface Iprops {
  historyVoList: any;
  domain: any;
}

export default function HistorySwiper(props: Iprops) {
  const { historyVoList, domain } = props;
  const target = React.useRef(null);
  const size = useSize(target);

  return (
    <div ref={target} className="development-wrapper">
      <Swiper
        slidesPerView={size?.width > 580 ? 4 : 1}
        spaceBetween={40}
        modules={[Pagination]}
        className="history-swiper"
      >
        {historyVoList?.map(
          (item: { years: string; event: [] }, index: string) => {
            return (
              <SwiperSlide key={index}>
                <div className="swiper-item">
                  <p style={{ color: domain?.theme }} className="title">
                    {item?.years}
                  </p>
                  {item?.event.map((x, index) => {
                    return (
                      <div className="development-text" key={index}>
                        <div className="circle"></div>
                        <p className="description" key={x}>
                          {x}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </div>
  );
}
