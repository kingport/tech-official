// 配件
import React, { useContext, useState } from 'react';
import ShopFooter from '../../../components/ShopFooter';
import { useSize } from '../../../hooks/useSize';
import './index.css';
import { getLanguage } from '../../../utils';
import { useAccessoryResult } from '../../../hooks/useAccessoryResult';
import { useLocation } from 'react-router-dom';
import Footer from '../../../components/Footer';
import { appContext } from '../../../App';
import { useMenusResult } from '../../../hooks/useMenusResult';

function Part():any {
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
  
  const { data: accessoryResult } = useAccessoryResult({
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
            minHeight: '100vh',
            background: `url(${accessoryResult?.pc?.image}) center/cover no-repeat`,
          }}
          className="com-img"
        ></div>
        {/* 配件 */}
        <div className="row-part">
          {accessoryResult?.pc?.detailVoList?.map((x: any, index) => {
            return (
              <div key={index} className="part-box">
                <div className="container part-item wow fadeInDown">
                  {size?.width > 580 && (
                    <div className="d-none d-md-block d-sm-block">
                      <div className="part-img">
                        <img src={x.image} alt="" />
                      </div>
                    </div>
                  )}
                  {size?.width <= 580 && (
                    <div className="d-block d-sm-none">
                      <div className="part-img">
                        <img src={x.image} alt="" />
                      </div>
                    </div>
                  )}
                  <div className="part-info">
                    <span className="title">{x.title}</span>
                    <div className="text">{x.content}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* shopFooter */}
        <ShopFooter />
        <Footer />
      </div>
    </div>
  );
}

export default Part;
