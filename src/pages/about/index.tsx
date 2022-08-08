// 公司简介
import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer';
import ShopFooter from '../../components/ShopFooter';
import { useCompanyResult } from '../../hooks/useCompanyResult';
import { useSize } from '../../hooks/useSize';
import { getLanguage } from '../../utils';
import HistorySwiper from './HistorySwiper';
import './index.css';

function About() {
  const target = React.useRef(null);
  const size = useSize(target);
  const location: any = useLocation();

  const { data: aboutResult, isLoading: aboutResultLoading } = useCompanyResult(
    { language: getLanguage(), subtitleId: location?.state?.id }
  );

  const bannerStyle = {
    background: `url(${aboutResult?.pc.topImageUrl}) no-repeat no-repeat`,
    minHeight: '100vh',
  };

  return (
    <div style={{ paddingTop: 60 }} ref={target} className="about-container">
      <div className="content-main">
        {/* banner 背景图 */}
        <div style={bannerStyle} className="com-img">
          <div className="info-box-about">
            <div className="title">
              <img src={aboutResult?.pc?.logoUrl} alt="" />
            </div>
          </div>
        </div>
        {/* 公司简介 */}
        <div className="container">
          <div className="section-box">
            <div
              style={{ textAlign: 'center' }}
              className="wow fadeInDown title"
            >
              {aboutResult?.pc?.companyTitle}
            </div>
            <div
              style={{ textAlign: 'left', lineHeight: '30px' }}
              dangerouslySetInnerHTML={{ __html: aboutResult?.pc.introduction }}
              className="wow fadeInDown company-info"
            ></div>
          </div>
        </div>
        {/* 企业文化 */}
        <div className="culture-container">
          <div className="section-box" style={{ padding: 0 }}>
            <div
              style={{ textAlign: 'center' }}
              className="wow fadeInDown title"
            >
              {aboutResult?.pc?.cultureTitle}
            </div>
          </div>
          <div className="culture-wrapper">
            {aboutResult?.pc?.companyCultureVoList?.map((item, index) => (
              <div key={index} className="culture-info wow fadeInDown">
                <div className="title">
                  {item?.title}
                  {/* <span>{item?.content}</span> */}
                </div>
                <div className="text">{item?.content}</div>
              </div>
            ))}
          </div>
        </div>
        {/* 发展历程 Timeline */}
        {/* PC */}
        {size?.width > 580 && (
          <div className="d-none d-md-block d-sm-block">
            <div
              style={{
                background: `url(${aboutResult?.pc.historyImageUrl}) center/cover no-repeat`,
              }}
              className="development-bg"
            >
              <div className="section-box">
                <div className="title">
                  {aboutResult?.pc?.companyHistoryTitle}
                </div>
              </div>
              <div className="time-box">
                {aboutResult?.pc?.historyVoList?.map(
                  (item: { years: string }, index) => {
                    const isLast =
                      index + 1 === aboutResult?.pc.historyVoList.length;
                    return (
                      <div
                        key={index}
                        className={`time-item wow fadeInDown ${
                          isLast ? 'active' : ''
                        }`}
                      >
                        <div className="time-title">
                          {item?.years}
                          {isLast && <div className="arrow-right"></div>}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        )}
        {/* H5 */}
        {size?.width <= 580 && (
          <div className="development-bg d-block d-sm-none">
            <div
              style={{
                background: `url(${aboutResult?.h5.historyImageUrl}) center/cover no-repeat`,
              }}
              className="development-box"
            >
              <div className="section-box active">
                <div className="title" style={{ textAlign: 'center' }}>
                  {aboutResult?.pc?.companyHistoryTitle}
                </div>
              </div>

              <div className="time-box-sm">
                {aboutResult?.pc?.historyVoList?.map(
                  (item: { years: string }, index) => {
                    const isLast =
                      index + 1 === aboutResult?.pc.historyVoList.length;
                    return (
                      <div
                        key={index}
                        className={`time-item wow fadeInDown ${
                          isLast ? 'active' : ''
                        }`}
                      >
                        <div className="time-title">{item?.years}</div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        )}
        {/* 发展历程 轮播*/}
        <HistorySwiper historyVoList={aboutResult?.pc.historyVoList} />
        {/* shopFooter */}
        <ShopFooter />
        <Footer />
      </div>
    </div>
  );
}

export default About;
