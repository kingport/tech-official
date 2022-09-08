import React, { useContext } from 'react';
import { Mousewheel, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.css';
import InitPage from './InitPage';
import { useSize } from '../../hooks/useSize';
import { useHomeResult } from '../../hooks/useHomeResult';

import { getLanguage } from '../../utils/index';
import { useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { appContext } from '../../App';

function Home(): any {
  const target = React.useRef(null);
  const size = useSize(target);
  const location: any = useLocation();
  const navigator = useNavigate();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const domain = useContext(appContext);

  const { data: homeResult } = useHomeResult({
    language: getLanguage(),
    topTitleId: location?.state?.id || domain?.id,
  });

  const renderNav = () => {
    return (
      <div className="btn-wrap">
        {homeResult?.brandListVoList?.map((x: any) => {
          return (
            <a
              key={x.id}
              onClick={() => {
                navigator(x.path, {
                  state: {
                    id: x.id,
                  },
                });
              }}
              className="btn-a"
            >
              {x.brandName}
            </a>
          );
        })}
      </div>
    );
  };

  React.useEffect(() => {
    if (
      (!homeResult?.pc?.banner6 && activeIndex === 5) ||
      (homeResult?.pc?.banner6 && activeIndex === 6)
    ) {
      new gsap.core.Tween(['.container-fluid', '.children-nav'], 0.1, {
        backgroundColor: 'transparent',
        color: '#000',
      });
    } else {
      new gsap.core.Tween(['.container-fluid', '.children-nav'], 0.1, {
        backgroundColor: 'transparent',
        color: '#000',
      });
    }
  }, [activeIndex]);

  return (
    <div ref={target} className="home">
      {homeResult?.pc && (
        <Swiper
          direction={'vertical'}
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
          onSlideChange={(e: any) => setActiveIndex(e.activeIndex)}
        >
          {size?.width > 580 && homeResult && (
            <SwiperSlide>
              <InitPage
                poster={homeResult?.pc?.topImage}
                video={homeResult?.pc?.video}
              />
            </SwiperSlide>
          )}
          <SwiperSlide>
            <div className="banner-item">
              <img
                src={
                  size?.width > 580
                    ? homeResult?.pc?.banner1
                    : homeResult?.h5?.banner1
                }
              />
              {renderNav()}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-item">
              <img
                src={
                  size?.width > 580
                    ? homeResult?.pc?.banner2
                    : homeResult?.h5?.banner2
                }
              />
              {renderNav()}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-item">
              <img
                src={
                  size?.width > 580
                    ? homeResult?.pc?.banner3
                    : homeResult?.h5?.banner3
                }
              />
              {renderNav()}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-item">
              <img
                src={
                  size?.width > 580
                    ? homeResult?.pc?.banner4
                    : homeResult?.h5?.banner4
                }
              />
              {renderNav()}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-item">
              <img
                src={
                  size?.width > 580
                    ? homeResult?.pc?.banner5
                    : homeResult?.h5?.banner5
                }
              />
            </div>
          </SwiperSlide>
          {homeResult?.pc?.banner6 && (
            <SwiperSlide>
              <div className="banner-item">
                <img
                  src={
                    size?.width > 580
                      ? homeResult?.pc?.banner6
                      : homeResult?.h5?.banner6
                  }
                />
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      )}
    </div>
  );
}

export default Home;
