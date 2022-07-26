// 公司简介
import React from "react";
import ShopFooter from "../../components/ShopFooter";
import { useSize } from "../../hooks/useSize";
import HistorySwiper from "./HistorySwiper";

import './index.css'
function About() {
  const target = React.useRef(null)
  const size = useSize(target)

  const mockdata = [
    {
      title: '我们的使命',
      desc: 'MISSION',
      text: '让绿色能源无处不在'
    },
    {
      title: '我们的愿景',
      desc: 'OUR VISION',
      text: '成为全球消费者最信赖的绿色能源品牌'
    },
    {
      title: '核心价值观',
      desc: 'COMPANY VALUES',
      text: '客户至上、开放创新、简单高效、团结协作'
    }
  ]
  return (
    <div ref={target} className="about-container">
      <div className="content-main">
        {/* banner 背景图 */}
        <div className="com-img"></div>
        {/* 公司简介 */}
        <div className="container">
          <div className="section-box">
            <div className="title">公司简介</div>
            <div className="company-info">
              <p className="wow fadeInDown">深圳市华宝新能源股份有限公司是行业领先的便携储能品牌企业，系国家高新技术企业。秉承“让绿色能源无处不在”的使命，以及“成为全球消费者最信赖的绿色能源品牌”的愿景，坚持不懈为应对全球气候危机而努力。</p>
              <p className="wow fadeInDown">华宝新能致力于便携储能产品的研发、生产和销售，公司及子公司拥有境内专利116项（其中发明专利21项），拥有境外专利66项（其中发明专利4项），累计获得德国红点设计奖、汉诺威工业（IF）设计奖、美国CES创新奖、A'Design Award &amp; Competition设计金奖共12项，产品创新性得到了国际消费电子领域的认可。华宝新能善于发掘潜在需求，于2015年开创锂电池便携储能新品类，以满足户外旅行和应急备灾对便携、绿色和安静的能源新需求。</p>
              <p className="wow fadeInDown">华宝新能历经五年规划布局，构建了集研发、生产、品牌、销售于一体的全价值链的M2C经营模式。依托“Jackery”和“电小二”主力品牌，以电商直销为主，现已成为“亚马逊、乐天、天猫、京东”等全球主流电商平台细分市场中的领先品牌。华宝新能聚焦主业，以数字化M2C智造直销全球平台为基础，不断创新应用，立志打造成为世界一流的消费级绿色能源品牌。</p>
            </div>
          </div>
        </div>
        {/* 企业文化 */}
        <div className="culture-container">
          <div className="section-box">
            <div className="title">企业文化</div>
          </div>
          <div className="culture-wrapper">
            {
              mockdata.map((item,index) =>  
              <div key={index} className="culture-info wow fadeInDown">
                <div className="title">
                  {item?.title}
                  <span>{item?.desc}</span>
                </div>
                <div className="text">{item?.text}</div>
              </div>)
            }
          </div>
        </div>
        {/* 发展历程 Timeline */}
        {/* PC */}
        {
          size?.width > 580 &&  
          <div className="d-none d-md-block d-sm-block">
            <div className="development-bg">
              <div className="section-box">
                  <div className="title">发展历程</div>
              </div>
              <div className="time-box">
                <div className="time-item wow fadeInDown">
                    <div className="time-title">2011
                    </div>
                </div>
                <div className="time-item wow fadeInDown">
                    <div className="time-title">2015
                    </div>
                </div>
                <div className="time-item wow fadeInDown">
                    <div className="time-title">2018
                    </div>
                </div>
                <div className="time-item wow fadeInDown">
                    <div className="time-title">2020
                    </div>
                </div>
                <div className="time-item wow fadeInDown active">
                    <div className="time-title">现在
                        <div className="arrow-right"></div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        }
        {/* H5 */}
        {
          size?.width <= 580 &&  
          <div className="development-bg d-block d-sm-none">
            <div className="development-box">
              <div className="section-box active">
                <div className="title">发展历程</div>
              </div>
              <div className="time-box-sm">
                <div className="time-item wow fadeInDown">
                  <div className="time-title">2011
                  </div>
                </div>
                <div className="time-item wow fadeInDown">
                  <div className="time-title">2015
                  </div>
                </div>
                <div className="time-item wow fadeInDown">
                  <div className="time-title">2018
                  </div>
                </div>
                <div className="time-item wow fadeInDown">
                  <div className="time-title">2020
                  </div>
                </div>
                <div className="time-item wow fadeInDown active">
                  <div className="time-title">现在
                    <div className="arrow-right"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
       
        {/* 发展历程 轮播*/}
        <HistorySwiper />
        {/* shopFooter */}
        <ShopFooter />
      </div>
    </div>
  )
}


export default About
