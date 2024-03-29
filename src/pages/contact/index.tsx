import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import ShopFooter from '../../components/ShopFooter';
import { getLanguage } from '../../utils';
import './index.css';

export default function () {
  const navigator = useNavigate();
  const isEn = getLanguage() === 'en';

  return (
    <div className="content-main">
      <div className="com-img">
        <div className="info-box">
          <div className="title"></div>
        </div>
      </div>
      <div className="contact-wrapper">
        <div className="contact-box">
          <div className="contact-item wow fadeInDown">
            <div className="info-box">
              <div className="title">
                {isEn ? (
                  <div>
                    BUSINESS
                    <br />
                    COOPERATION
                  </div>
                ) : (
                  '商业合作'
                )}
              </div>
              <a onClick={() => navigator('/contact/dealers')} className="text">
                <span>{isEn ? 'Get the contact details' : '获取联系方式'}</span>
                <div className="icon">
                  <img
                    src="https://www.hello-tech.com/images/more26b3fb19a67970f8a4cfd333c2144d54.png"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="d-none d-md-block d-sm-block">
              <img
                src="https://www.hello-tech.com/images/contact-a10defed352606b1f34f3b59e7bc208bc.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="contact-item wow fadeInDown">
            <div className="info-box">
              <div className="title">{isEn ? 'JOIN US' : '精英加盟'}</div>
              <a className="text" onClick={() => navigator('/contact/join')}>
                <span>{isEn ? 'Get the contact details' : '获取联系方式'}</span>
                <div className="icon">
                  <img
                    src="https://www.hello-tech.com/images/more26b3fb19a67970f8a4cfd333c2144d54.png"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="d-none d-md-block d-sm-block">
              <img
                src="https://www.hello-tech.com/images/contact-a10defed352606b1f34f3b59e7bc208bc.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="container-box">
            <div className="infos-item wow fadeInDown">
              <div className="d-none d-md-block d-sm-block">
                <a
                  className="mapContent"
                  href="http://api.map.baidu.com/marker?location=22.681452,113.990941&amp;title=深圳市华宝新能源股份有限公司&amp;output=html"
                  target="'_blank"
                >
                  <img src="https://www.hello-tech.com/images/concat-bd3326f50e1f0e80bea2db398f02c377a.jpg" />
                </a>
              </div>
              <div className="madia-head wow fadeInDown">
                <div className="title"></div>
                <div className="line"></div>
              </div>
            </div>
          </div>
          <ShopFooter />
          <Footer />
        </div>
      </div>
    </div>
  );
}
