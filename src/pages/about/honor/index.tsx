// 荣誉资质

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import ShopFooter from '../../../components/ShopFooter';
import './index.css';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper';
import { getLanguage } from '../../../utils';
import { useHonorResult } from '../../../hooks/useHonorResult';
import { useLocation } from 'react-router-dom';
import Footer from '../../../components/Footer';

export default function () {
  const location: any = useLocation();
  const { data: honorResult, isLoading: honorResultLoading } = useHonorResult({
    language: getLanguage(),
    subtitleId: location?.state?.id,
  });

  return (
    <div className="content-main">
      {/* banner */}
      <div
        style={{
          minHeight: '100vh',
          background: `url(${honorResult?.pc?.topBackgroundImage}) center/cover no-repeat`,
        }}
        className="com-img"
      ></div>
      {/* 荣誉资质 */}
      <div className="container">
        <div className="section-box-honor">
          <div
            style={{ textAlign: 'center', margin: '0', padding: '20px 0' }}
            className="wow fadeInDown title"
          >
            {honorResult?.pc?.title}
          </div>
          <div className="company-info">
            <p
              className="wow fadeInDown"
              style={{ textAlign: 'justify' }}
              dangerouslySetInnerHTML={{ __html: honorResult?.pc?.content }}
            ></p>
          </div>
        </div>
      </div>
      {/* 轮播 */}
      <div className="honor-wrapper">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {honorResult?.pc?.bannerImageList?.map((x) => {
            return (
              <SwiperSlide key={x} className="honor-swiper-img">
                <img src={x} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* 企业荣誉 */}
      <div
        style={{
          background: `url(${honorResult?.pc.bottomBackgroundImage}) center/cover no-repeat #fff`,
        }}
        className="honor-bg"
      >
        <div className="honor-info">
          <div className="info-item">
            {honorResult?.pc?.eventList?.map((x) => {
              return (
                <div className="text-box wow fadeInDown">
                  <div className="icon">
                    <img src="https://www.hello-tech.com/images/honor-icon.png" />
                  </div>
                  <div className="text">{x}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* footer */}
      <ShopFooter />
      <Footer />
    </div>
  );
}
