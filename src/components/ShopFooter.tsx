import React from 'react';
import { useCompanyIdResult } from '../hooks/useCompanyIdResult';
import { useFooterUrlResult } from '../hooks/useFooterUrlResult';
import { useSize } from '../hooks/useSize';
import { getLanguage } from '../utils';
import './shopFooter.css';

export default function () {
  const target = React.useRef(null);
  const size = useSize(target);
  const { data: companyIdResult, isLoading: companyIdResultLoading } = useCompanyIdResult({domainName: window.location.hostname === 'localhost' ? "test.wangdingkun.xyz" : window.location.hostname});

  const {
    data: footerResult,
  } = useFooterUrlResult({ language: getLanguage(), companyId: companyIdResult });

  return (
    <div ref={target} className="footer-main">
      {size?.width > 580 && (
        <div className="d-none d-md-block d-sm-block">
          <div className="mall-wrapper">
            <div className="container">
              <div className="mall-box">
                <div className="mall-l">
                  <div className="make-box">
                    <div className="make-item">
                      <div className="make-a-box">
                        {footerResult?.bottomUrlVoList.map(
                          (
                            item: { imageUrl: string; turnUrl: string },
                            index
                          ) => {
                            return (
                              <a
                                className="make-a d-none d-md-block d-sm-block"
                                href={item?.turnUrl}
                                key={index}
                                target="_blank"
                              >
                                <div className="logo-item">
                                  <img src={item?.imageUrl} alt="" />
                                </div>
                              </a>
                            );
                          }
                        )}
                        <div className="make-a d-block d-sm-none">
                          <div className="qrcode-box">
                            <img src="" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mall-r">
                  <div className="footer-logo">
                    <div className="logo-item d-block d-sm-none">
                      <a href="http://www.dx2.cn" target="_blank">
                        <img
                          src="https://www.hello-tech.com/images/jackery-logo0bf0f38cddab4b996df749e7ecdf3792.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="logo-item">
                      <a href="https://www.jackery.com" target="_blank">
                        <img
                          src="/images/jackery-logo0bf0f38cddab4b996df749e7ecdf3792.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="make-box">
                <div className="make-item d-none d-md-block d-sm-block">
                  <div className="qrcode-box">
                    <img src={footerResult?.quickCode} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {size?.width <= 580 && (
        <div className="d-block d-sm-none">
          <div className="mall-wrapper-sm">
            <div className="mall-box-sm">
              <div className="make-item-sm">
                <div className="make-a-box">
                  {footerResult?.bottomUrlVoList.map(
                    (item: { imageUrl: string; turnUrl: string }, index) => {
                      return (
                        <a
                          className="make-a-sm"
                          href={item?.turnUrl}
                          key={index}
                          target="_blank"
                        >
                          <div className="logo-item">
                            <img src={item?.imageUrl} alt="" />
                          </div>
                        </a>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="footer-logo-sm">
                <div className="logo-item">
                  <a href="" target="_blank">
                    <img src={footerResult?.quickCode} alt="" />
                  </a>
                </div>
                <div className="logo-item">
                  <a href="https://www.jackery.com" target="_blank">
                    <img
                      src="https://www.hello-tech.com/images/jackery-logo0bf0f38cddab4b996df749e7ecdf3792.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
