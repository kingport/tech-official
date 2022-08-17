import React from 'react';
import { Mousewheel, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.css';
import InitPage from './InitPage';
import { useSize } from '../../hooks/useSize';
import { useHomeResult } from '../../hooks/useHomeResult';

import Footer from '../../components/Footer';
import { getLanguage } from '../../utils/index';
import { useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';

function Home():any {
  const target = React.useRef(null);
  const size = useSize(target);
  const location: any = useLocation();
  const navigator = useNavigate();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const { data: homeResult, isLoading: homeResultLoading } = useHomeResult({
    language: getLanguage(),
    topTitleId: location?.state?.id || 1,
  });

  const styleBanner1 = {
    backgroundImage: `url(${
      size?.width > 580 ? homeResult?.pc?.banner1 : homeResult?.h5?.banner1
    })`,
  };
  const styleBanner2 = {
    backgroundImage: `url(${
      size?.width > 580 ? homeResult?.pc?.banner2 : homeResult?.h5?.banner2
    })`,
  };
  const styleBanner3 = {
    backgroundImage: `url(${
      size?.width > 580 ? homeResult?.pc?.banner3 : homeResult?.h5?.banner3
    })`,
  };
  const styleBanner4 = {
    backgroundImage: `url(${
      size?.width > 580 ? homeResult?.pc?.banner4 : homeResult?.h5?.banner4
    })`,
  };
  const styleBanner5 = {
    backgroundImage: `url(${
      size?.width > 580 ? homeResult?.pc?.banner5 : homeResult?.h5?.banner5
    })`,
  };
  const styleBanner6 = {
    backgroundImage: `url(${
      size?.width > 580 ? homeResult?.pc?.banner6 : homeResult?.h5?.banner6
    })`,
  };

  const renderNav = () => {
    return (
      <div className="btn-wrap">
        <a
          onClick={() =>
            navigator('/brand/storage', {
              state: {
                id: 16,
              },
            })
          }
          className="btn-a"
        >
          {localStorage.getItem('lang') === 'en'
            ? 'Portable Power Station'
            : '便携储能'}
        </a>
        <a
          onClick={() =>
            navigator('/brand/solar', {
              state: {
                id: 17,
              },
            })
          }
          className="btn-a"
        >
          {localStorage.getItem('lang') === 'en' ? 'Solar Panel' : '太阳能板'}
        </a>
        <a
          onClick={() =>
            navigator('/brand/part', {
              state: {
                id: 18,
              },
            })
          }
          className="btn-a"
        >
          {localStorage.getItem('lang') === 'en' ? 'Accessories' : '配件'}
        </a>
      </div>
    );
  };

  React.useEffect(() => {
      if ((!homeResult?.pc?.banner6 && activeIndex === 5) || (homeResult?.pc?.banner6 && activeIndex === 6)) {
        new gsap.core.Tween(['.container-fluid', '.children-nav'], 0.1, {
          backgroundColor: "transparent",
          color: "#000"
        })
      }else {
        new gsap.core.Tween(['.container-fluid', '.children-nav'], 0.1, {
          backgroundColor: "transparent",
          color: "#fff"
        })
      }
  }, [activeIndex]);

  return (
    <div ref={target} className="home">
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
        {size?.width > 580 && (
          <SwiperSlide>
            <InitPage video={homeResult?.pc?.video} />
          </SwiperSlide>
        )}
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
          <div style={styleBanner5} className="banner-item"></div>
        </SwiperSlide>
        {homeResult?.pc?.banner6 && (
          <SwiperSlide>
            <div style={styleBanner6} className="banner-item">              
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}

export default Home;
