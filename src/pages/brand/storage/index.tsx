// 便携储能
import React, { useContext, useState } from 'react';
import ShopFooter from '../../../components/ShopFooter';
import { useSize } from '../../../hooks/useSize';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Autoplay } from 'swiper';

import './index.css';
import { getLanguage } from '../../../utils';
import { useBrandInfoResult } from '../../../hooks/useBrandInfoResult';
import { useLocation } from 'react-router-dom';
import Footer from '../../../components/Footer';
import { appContext } from '../../../App';
import { useMenusResult } from '../../../hooks/useMenusResult';
import styled from '@emotion/styled';
import AmazonFooter from '../../../components/AmazonFooter';


const TextItem = styled.div`
  &::before {
    background: ${props => props.color}
  }
`
function Storage():any {
  const target = React.useRef(null);
  const size = useSize(target);
  const location: any = useLocation();
  const domain = useContext(appContext)
  
  let pathId = ''
  if (!location?.state?.id) {
    const { data: menusResult } = useMenusResult({
      language: getLanguage(),
      companyId: domain?.id,
    });
    menusResult?.pc?.topTitleVoList.map((x) => {
      if(x.subtitleVoList) {
        x.subtitleVoList.map((k:any) => {
          if(k.path === window.location.pathname) {
            pathId = k.subjectId
          }
        })
      }
    })
  }

  
  const [active, setActive] = React.useState(1);

  const { data: brandInfoResult } = useBrandInfoResult({
    language: getLanguage(),
    subtitleId: location?.state?.id || pathId,
  });

  return (
    <div
      ref={target}
      className="about-container"
    >
      <div className="content-main">
        {/* banner 背景图 */}
        <div
          style={{
            background: `url(${brandInfoResult?.pc?.image}) center/cover no-repeat`,
          }}
          className="com-img-storage"
        ></div>
        {/* 产品 */}
        <div className="d-none d-md-block d-sm-block">
          <div className="container">
            <div className="row row-section">
              <div className="col-xs-12 col-md-4 wow fadeInLeft">
                <div className="row-img">
                  <img src={brandInfoResult?.pc.productList[0]?.image} alt="" />
                </div>
              </div>
              <div className="col-xs-12 col-md-8">
                <div className="row-info-wrapper wow fadeInRight">
                  <div className="row-info">
                    <div className="title">
                      {brandInfoResult?.pc.productList[0]?.title}
                      <span>
                        {brandInfoResult?.pc.productList[0]?.subtitle}
                      </span>
                    </div>
                    <div className="text-box-storage">
                      {brandInfoResult?.pc?.productList[0]?.descList?.map(
                        (x, index) => {
                          return (
                            <TextItem color={domain?.theme} key={index} className="text-item">
                              {x}
                            </TextItem>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 多场景使用 PC */}
        {size?.width > 580 && (
          <div className="d-none d-md-block d-sm-block">
            <div className="com-wrapper">
              <div className="com-right wow fadeInRight">
                <div className="com-bg">
                  <div
                    className="com-bg-item opacity"
                    style={{
                      background: `url(${
                        brandInfoResult?.pc.usedList[active - 1].image
                      }) center / cover no-repeat`,
                    }}
                  ></div>
                </div>
                <div className="com-tips">
                  {brandInfoResult?.pc?.usedList?.map((x: any, index) => {
                    const current = index + 1;
                    return (
                      <div
                        key={index}
                        onMouseEnter={() => {
                          setActive(current);
                        }}
                        className={`com-tips-item ${
                          active === current ? 'active' : ''
                        }`}
                      >
                        <div className="tips-wrapper">
                          <div className="tips-icon">
                            <i style={{ background: active === current ? domain?.theme : ''}}></i>
                          </div>
                          <div className="tips-title">{x.title}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="com-left wow fadeInLeft">
                <div className="com-info">
                  {brandInfoResult?.pc?.usedList?.map((x: any, index) => {
                    const current = index + 1;
                    return (
                      <div
                        key={index}
                        className="com-info-item"
                        style={{
                          display: active === current ? 'block' : 'none',
                        }}
                      >
                        <div className="info-item">
                          <div className="item-l">
                            <div className="number">{`0${current}`}</div>
                            <div  className="title">
                              {brandInfoResult?.pc.title}
                            </div>
                          </div>
                          <div className="item-r">
                            <div style={{color: domain?.theme}} className="title">{x.title}</div>
                            <div className="text">{x.subtitle}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* 多场景使用 H5 */}
        {size?.width <= 580 && (
          <div className="d-block d-sm-none">
            <div className="storage-info">
              <div className="storage-title">{brandInfoResult?.h5.title}</div>
              {brandInfoResult?.h5?.usedList?.map((x: any, index) => {
                const current = index + 1;
                return (
                  <div key={index} className="item-list">
                    <div className="cover-img">
                      <img src={x.image} alt="" />
                    </div>
                    <div className="info-item-sm">
                      <div className="number">
                        {`0${current}`}
                        <span>{x.title}</span>
                      </div>
                      <div className="subtitle">{x.subtitle}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {/* 产品 */}
        <div className="d-none d-md-block d-sm-block">
          <div className="container">
            <div className="row row-section">
              <div className="col-xs-12 col-md-4 wow fadeInLeft">
                <div className="row-img">
                  <img src={brandInfoResult?.pc.productList[1]?.image} alt="" />
                </div>
              </div>
              <div className="col-xs-12 col-md-8">
                <div className="row-info-wrapper wow fadeInRight">
                  <div className="row-info">
                    <div className="title">
                      {brandInfoResult?.pc.productList[1]?.title}
                      <span>
                        {brandInfoResult?.pc.productList[1]?.subtitle}
                      </span>
                    </div>
                    <div className="text-box-storage">
                      {brandInfoResult?.pc.productList[1]?.descList.map(
                        (x, index) => {
                          return (
                            <div key={index} className="text-item">
                              {x}
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 产品轮播 */}
        <div
          style={{ background: '#fff' }}
          className="development-wrapper-storage"
        >
          <Swiper
            slidesPerView={size?.width > 580 ? 3 : 1}
            spaceBetween={40}
            modules={[Pagination, Autoplay]}
            // navigation={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            className="history-swiper"
          >
            {brandInfoResult?.pc?.slideList?.map((item: any, index) => {
              return (
                <SwiperSlide key={index}>
                  <a className="product-box">
                    <div className="product-img">
                      <img src={item?.image} />
                    </div>
                    <p className="product-title">{item?.title}</p>
                    <p className="product-text">{item?.content}</p>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* shopFooter */}
        <ShopFooter />
        <Footer />
        <AmazonFooter brandInfoResult={brandInfoResult} domain={domain} />
      </div>
    </div>
  );
}

export default Storage;
