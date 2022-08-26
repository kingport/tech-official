// 质量方针
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { appContext } from '../../../App';
import Footer from '../../../components/Footer';

import ShopFooter from '../../../components/ShopFooter';
import { useMenusResult } from '../../../hooks/useMenusResult';
import { useQualityResult } from '../../../hooks/useQualityResult';
import { useSize } from '../../../hooks/useSize';
import { getLanguage } from '../../../utils';
import './index.css';

export default function():any {
  const target = React.useRef(null);
  const size = useSize(target);
  const location: any = useLocation();  

  let pathId = ''
  if (!location?.state?.id) {
    const domain = useContext(appContext)
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

  const {
    data: qualityResult,
  } = useQualityResult({
    language: getLanguage(),
    subtitleId: location?.state?.id || pathId,
  });

  return (
    <div ref={target} className="content-main-quality">
      {/* banner */}
      <div
        style={{
          minHeight: '100vh',
        }}
        className="com-img"
      >
        <img src={qualityResult?.pc?.topImage} alt="" />
      </div>
      {/* 质量方针 */}
      <div className="container">
        <div className="section-box">
          <div className="title">{qualityResult?.pc?.ecoTitle}</div>
        </div>
        <div className="row-imgs">
          {qualityResult?.pc.qualityPolicyList.map((x: any,index) => {
            return (
              <div key={index} className="row-item">
                <div className="img-box wow fadeIn">
                  <img src={x.image} alt="" />
                </div>
                <div className="text">{x.content}</div>
              </div>
            );
          })}
        </div>
      </div>
      {/* 四大安全保障 */}
      <div className="store-bg">
        <div className="container">
          <div className="section-box">
            <div className="title ta-left">
              {qualityResult?.pc?.securityTitle}
            </div>
          </div>
          {/*  PC */}
          {size?.width > 580 && (
            <div className="row row-store-pc">
              <div className="col-xs-12 col-md-4">
                <div className="store-wrapper">
                  <div className="store-box store-box-a wow fadeInLeft">
                    <div className="store-icon">
                      <img
                        src={qualityResult?.pc.qualitySecurityList[0].image}
                        alt=""
                      />
                    </div>
                    <div className="store-title">
                      <span className="number"></span>
                      <span>
                        {qualityResult?.pc.qualitySecurityList[0].title}
                      </span>
                    </div>
                    <div className="store-text">
                      {qualityResult?.pc.qualitySecurityList[0].content}
                    </div>
                  </div>
                  <div className="store-box store-box-b wow fadeInLeft">
                    <div className="store-icon">
                      <img
                        src={qualityResult?.pc.qualitySecurityList[1].image}
                        alt=""
                      />
                    </div>
                    <div className="store-title">
                      <span>
                        {qualityResult?.pc.qualitySecurityList[1].title}
                      </span>
                    </div>
                    <div className="store-text">
                      {qualityResult?.pc.qualitySecurityList[1].content}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-4 wow fadeIn">
                <div className="store-img">
                  <img src={qualityResult?.pc.productImage} alt="" />
                </div>
              </div>
              <div className="col-xs-12 col-md-4">
                <div className="store-wrapper">
                  <div className="store-box store-box-c wow fadeInLeft">
                    <div className="store-icon">
                      <img
                        src={qualityResult?.pc.qualitySecurityList[2].image}
                        alt=""
                      />
                    </div>
                    <div className="store-title">
                      <span>
                        {qualityResult?.pc.qualitySecurityList[2].title}
                      </span>
                    </div>
                    <div className="store-text">
                      {qualityResult?.pc.qualitySecurityList[2].content}
                    </div>
                  </div>
                  <div className="store-box store-box-d wow fadeInLeft">
                    <div className="store-icon">
                      <img
                        src={qualityResult?.pc.qualitySecurityList[3].image}
                        alt=""
                      />
                    </div>
                    <div className="store-title">
                      <span>
                        {qualityResult?.pc.qualitySecurityList[3].title}
                      </span>
                    </div>
                    <div className="store-text">
                      {qualityResult?.pc.qualitySecurityList[3].content}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* H5 */}
          {size?.width <= 580 && (
            <div className="row row-store-m">
              <div className="col-xs-12">
                <div className="store-wrapper wow fadeInDown">
                  <div className="store-box">
                    <div className="store-title">
                      <span className="number">
                        <img
                          src={qualityResult?.h5.qualitySecurityList[0].image}
                          alt=""
                        />
                      </span>
                      <div className="store-text">
                        <div className="title">
                          {qualityResult?.h5.qualitySecurityList[0].title}
                        </div>
                        <div className="subtitle">
                          {qualityResult?.h5.qualitySecurityList[0].content}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="store-wrapper wow fadeInDown">
                  <div className="store-box">
                    <div className="store-title">
                      <span className="number">
                        <img
                          src={qualityResult?.h5.qualitySecurityList[1].image}
                          alt=""
                        />
                      </span>
                      <div className="store-text">
                        <div className="title">
                          {qualityResult?.h5.qualitySecurityList[1].title}
                        </div>
                        <div className="subtitle">
                          {qualityResult?.h5.qualitySecurityList[1].content}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="store-wrapper wow fadeInDown">
                  <div className="store-box">
                    <img
                      className="middle-img"
                      src={qualityResult?.pc.productImage}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="store-wrapper wow fadeInDown">
                  <div className="store-box">
                    <div className="store-title">
                      <span className="number">
                        <img
                          src={qualityResult?.h5.qualitySecurityList[2].image}
                          alt=""
                        />
                      </span>
                      <div className="store-text">
                        <div className="title">
                          {qualityResult?.h5.qualitySecurityList[2].title}
                        </div>
                        <div className="subtitle">
                          {qualityResult?.h5.qualitySecurityList[2].content}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="store-wrapper wow fadeInDown">
                  <div className="store-box">
                    <div className="store-title">
                      <span className="number">
                        <img
                          src={qualityResult?.h5.qualitySecurityList[3].image}
                          alt=""
                        />
                      </span>
                      <div className="store-text">
                        <div className="title">
                          {qualityResult?.h5.qualitySecurityList[3].title}
                        </div>
                        <div className="subtitle">
                          {qualityResult?.h5.qualitySecurityList[3].content}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* banner 图 */}
      <div className="com-img com-img-footer">
        <img src={qualityResult?.pc?.bottomImage} alt="" />
      </div>
      {/* 环境方针 */}
      <div className="container-fluid">
        <div className="section-box">
          <div className="title">{qualityResult?.pc?.qualityTitle}</div>
        </div>
        <div className="type-box">
          {qualityResult?.pc?.ecoList.map((x, index) => {
            return (
              <div key={index} className="type-item wow fadeInDown">
                <div className="type-text">{x}</div>
              </div>
            );
          })}
        </div>
      </div>
      {/* footer */}
      <ShopFooter />
      <Footer />
    </div>
  );
}
