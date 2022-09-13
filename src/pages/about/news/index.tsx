// 新闻内容
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { appContext } from '../../../App';
import Footer from '../../../components/Footer';
import ShopFooter from '../../../components/ShopFooter';
import { useMenusResult } from '../../../hooks/useMenusResult';
import { useNewsEventResult } from '../../../hooks/useNewsEventResult';
import { useNewsResult } from '../../../hooks/useNewsResult';
import { useSize } from '../../../hooks/useSize';
import { getLanguage } from '../../../utils';
import './index.css';
import styled from '@emotion/styled';
import { useCompanyIdResult } from '../../../hooks/useCompanyIdResult';

const NewBox = styled.a`
  &:hover {
    .news-info .news-title {
      color: ${(props) => props.color};
    }
    .news-icon .iconfont {
      color: ${(props) => props.color};
    }
  }
`;
export default function (): any {
  const target = React.useRef(null);
  const size = useSize(target);
  let navigate = useNavigate();
  const location: any = useLocation();

  const { data: companyIdResult } = useCompanyIdResult({
    domainName:
      window.location.hostname === 'localhost'
        ? 'www.lingxisz.xyz'
        : window.location.hostname,
  });

  let pathId = '';
  if (!location?.state?.id) {
    const domain = useContext(appContext);
    const { data: menusResult } = useMenusResult({
      language: getLanguage(),
      companyId: domain?.id,
    });
    menusResult?.pc?.topTitleVoList.map((x) => {
      if (x.subtitleVoList) {
        x.subtitleVoList.map((k: any) => {
          if (k.path === window.location.pathname) {
            pathId = k.subjectId;
          }
        });
      }
    });
  }

  const { data: newsResult } = useNewsResult({
    language: getLanguage(),
    subtitleId: location?.state?.id || pathId,
  });
  const { data: newsEventResult } = useNewsEventResult({
    language: getLanguage(),
    newsId: newsResult?.newsId,
  });

  return (
    <div ref={target} className="content-main">
      <div
        style={{
          background: `url(${newsResult?.pc.image}) center/cover no-repeat`,
        }}
        className="com-img-news"
      ></div>
      <div className="section-box wow fadeInDown">
        <div className="title">{newsResult?.pc.title}</div>
      </div>
      {/* 新闻内容 */}
      {size?.width > 580 && (
        <div className="d-none d-md-block d-sm-block">
          <div className="news-wrapper">
            {newsEventResult?.rows.map((x: any, index) => {
              return (
                <NewBox
                  className="news-box wow fadeInDown"
                  key={index}
                  color={companyIdResult?.theme}
                  onClick={() => navigate(`/about/news/${x.pc.id}`)}
                >
                  <div className="news-l">
                    <div className="news-img">
                      <div className="img-box">
                        <img src={x.pc.image} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="news-r">
                    <div className="news-item">
                      <div className="news-info">
                        <div className="news-title">
                          <div className="title">{x.pc.title}</div>
                          <div className="date">{x.pc.articleTime}</div>
                        </div>
                        <div className="news-text d-none d-md-block d-sm-block">
                          {x.pc.content}
                        </div>
                      </div>
                      <div className="news-icon">
                        <div className="iconfont iconarrow-r"></div>
                      </div>
                    </div>
                  </div>
                </NewBox>
              );
            })}
          </div>
        </div>
      )}

      {size?.width <= 580 && (
        <div className="d-block d-sm-none">
          <div className="news_content_sm">
            <div className="news-wrapper">
              {newsEventResult?.rows.map((x: any, index) => {
                return (
                  <a
                    key={index}
                    className="news-box"
                    onClick={() => navigate(`/about/news/${x.h5.id}`)}
                  >
                    <div className="news-l">
                      <div className="news-img">
                        <div className="img-box">
                          <img src={x.h5.image} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="news-r">
                      <div className="news-item">
                        <div className="news-info">
                          <div className="news-title">
                            <div className="title">{x.h5.content}</div>
                            <div className="date">{x.h5.articleTime}</div>
                          </div>
                        </div>
                        <div className="news-icon">
                          <div className="iconfont iconarrow-r"></div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {/* footer */}
      <ShopFooter />
      <Footer />
    </div>
  );
}
