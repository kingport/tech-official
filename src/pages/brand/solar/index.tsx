// 公司简介
import React, { useState } from "react";
import ShopFooter from "../../../components/ShopFooter";
import { useSize } from "../../../hooks/useSize";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css/navigation";
// import required modules

import './index.css'
function Storage() {
  const target = React.useRef(null)
  const size = useSize(target)
  const [active,setActive] = React.useState('1')
  

  return (
    <div ref={target} className="about-container">
      <div className="content-main">
        {/* banner 背景图 */}
        <div className="com-img"></div>
        {/* 产品 */}
        <div className="d-none d-md-block d-sm-block">
          <div className="container">
            <div className="row row-section">
              <div className="col-xs-12 col-md-6 wow fadeInLeft" >
                <div className="row-img"><img src="https://www.hello-tech.com/images/storage-sm-b5c53263380711b4265083925ed4de5c8.png" alt="" /></div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="row-info-wrapper wow fadeInRight" >
                  <div className="row-info">
                    <div className="title">户外电源1000<span>1002WH大容量，尽情用电不用慌</span></div>
                    <div className="text-box">
                      <div className="text-item">AC/USB/车充三种输出方式，户外充电一应俱全</div>
                      <div className="text-item">采用车规级UL权威认证电芯，耐用寿命更长</div>
                      <div className="text-item">冷热散热口，环保静音，规则条形设计，高效散热</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 多场景使用 PC */}
        {
          size?.width > 580 && 
          <div className="d-none d-md-block d-sm-block">
            <div className="com-wrapper">
              <div className="com-right wow fadeInRight">
                <div className="com-bg">
                  <div className="com-bg-item opacity" style={{background:`url(https://www.hello-tech.com/images/storage-img-b5632448a3d1834da46929f8efebe9220.jpg) center / cover no-repeat`}}></div>
                  <div className="com-bg-item" style={{background:`url(https://www.hello-tech.com/images/storage-img-b5632448a3d1834da46929f8efebe9220.jpg) center / cover no-repeat`}}></div>
                  <div className="com-bg-item" style={{background:`url(https://www.hello-tech.com/images/storage-img-b5632448a3d1834da46929f8efebe9220.jpg) center / cover no-repeat`}}></div>
                </div>
                <div onMouseEnter={() => {setActive('1')}} className="com-tips">
                  <div className="com-tips-item active">
                    <div className="tips-wrapper">
                      <div className="tips-icon"><i></i></div>
                      <div className="tips-title">户外聚会</div>
                    </div>
                  </div>
                  <div onMouseEnter={() => {setActive('2')}} className="com-tips-item">
                    <div className="tips-wrapper">
                      <div className="tips-icon"><i></i></div>
                      <div className="tips-title">外景作业</div>
                    </div>
                  </div>
                  <div onMouseEnter={() => {setActive('3')}} className="com-tips-item">
                    <div className="tips-wrapper">
                      <div className="tips-icon"><i></i></div>
                      <div className="tips-title">自驾出行</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="com-left wow fadeInLeft">
                <div className="com-info">
                  <div className="com-info-item" style={{display: active === '1' ? 'block' : 'none'}}>
                    <div className="info-item">
                      <div className="item-l">
                        <div className="number">01</div>
                        <div className="title">多场景使用</div>
                      </div>
                      <div className="item-r">
                        <div className="title">户外聚会</div>
                        <div className="text">户外聚会再无需担心用电问题，车载冰箱、投影仪、户外照明、音箱统统搞定</div>
                      </div>
                    </div>
                  </div>
                  <div className="com-info-item" style={{display: active === '2' ? 'block' : 'none'}}>
                    <div className="info-item">
                      <div className="item-l">
                        <div className="number">02</div>
                        <div className="title">多场景使用</div>
                      </div>
                      <div className="item-r">
                        <div className="title">外景作业</div>
                        <div className="text">外景作业，带上电小二户外电源，说走就走，还惧怕什么电量不足</div>
                      </div>
                    </div>
                  </div>
                  <div className="com-info-item" style={{display: active === '3' ? 'block' : 'none'}}>
                    <div className="info-item">
                      <div className="item-l">
                        <div className="number">03</div>
                        <div className="title">多场景使用</div>
                      </div>
                      <div className="item-r">
                        <div className="title">自驾出行</div>
                        <div className="text">解决家用大设备应急用电、照明等状况，随插随用，不惧黑暗</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        {/* 多场景使用 H5 */}
        {
          size?.width <= 580 && 
          <div className="d-block d-sm-none">
            <div className="storage-info">
              <div className="storage-title">多场景使用</div>
              <div className="item-list">
                <div className="cover-img"><img src="https://www.hello-tech.com/images/storage-img-a50b68324fc4235571fdb3223061fc939.png" alt="" /></div>
                <div className="info-item-sm">
                  <div className="number">01<span>户外聚会</span></div>
                  <div className="subtitle">户外聚会再无需担心用电问题，车载冰箱、投影仪、户外照明、音箱统统搞定</div>
                </div>
              </div>
              <div className="item-list">
                <div className="cover-img"><img src="https://www.hello-tech.com/images/storage-img-a50b68324fc4235571fdb3223061fc939.png" alt="" /></div>
                <div className="info-item-sm">
                  <div className="number">02<span>外景作业</span></div>
                  <div className="subtitle">外景作业，带上电小二户外电源，说走就走，还惧怕什么电量不足</div>
                </div>
              </div>
              <div className="item-list">
                <div className="cover-img"><img src="https://www.hello-tech.com/images/storage-img-a50b68324fc4235571fdb3223061fc939.png" alt="" /></div>
                <div className="info-item-sm">
                  <div className="number">03<span>自驾出行</span></div>
                  <div className="subtitle">解决家用大设备应急用电、照明等状况，随插随用，不惧黑暗。</div>
                </div>
              </div>
            </div>
          </div>
        }
        {/* shopFooter */}
        <ShopFooter />
      </div>
    </div>
  )
}


export default Storage
