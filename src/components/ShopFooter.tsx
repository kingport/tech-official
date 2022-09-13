import React from 'react';
import { useCompanyIdResult } from '../hooks/useCompanyIdResult';
import { useFooterUrlResult } from '../hooks/useFooterUrlResult';
import { useSize } from '../hooks/useSize';
import { getLanguage } from '../utils';
import './shopFooter.css';

export default function () {
  const target = React.useRef(null);
  const size = useSize(target);
  const { data: companyIdResult } = useCompanyIdResult({
    domainName:
      window.location.hostname === 'localhost'
        ? 'www.lingxisz.xyz'
        : window.location.hostname,
  });

  const { data: footerResult } = useFooterUrlResult({
    language: getLanguage(),
    companyId: companyIdResult?.id,
  });

  return (
    <div ref={target} className="footer-main">
      {size?.width > 580 && (
        <div className="d-none d-md-block d-sm-block">
          <div className="mall-wrapper">
            <div className="container">
              <div className="mall-box">
                <div style={{ width: '100%' }} className="mall-l">
                  <div style={{ width: '100%' }} className="make-box">
                    <div className="make-item">
                      <div
                        style={{ justifyContent: 'space-between' }}
                        className="make-a-box"
                      >
                        {footerResult?.bottomUrlVoList.map(
                          (
                            item: { imageUrl: string; turnUrl: string },
                            index
                          ) => {
                            return (
                              <a
                                className="make-a d-none d-sm-block"
                                href={item?.turnUrl}
                                key={index}
                                target="_blank"
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
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
              <div className="footer-logo-sm"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
