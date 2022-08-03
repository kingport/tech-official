// 公司简介
import React from "react";
import { useLocation } from "react-router-dom";
import ShopFooter from "../../components/ShopFooter";
import { useCompanyResult } from "../../hooks/useCompanyResult";
import { useSize } from "../../hooks/useSize";
import { getLanguage } from "../../utils";
import HistorySwiper from "./HistorySwiper";

import './index.css'
function About() {
  const target = React.useRef(null)
  const size = useSize(target)
  const location: any = useLocation()

  const {
    data: aboutResult,
    isLoading: aboutResultLoading,
  } = useCompanyResult({language: getLanguage(), subtitleId: location?.state?.id})

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

  const bannerStyle = {
    background: `url(${aboutResult?.pc.topImageUrl}) no-repeat no-repeat`,
    minHeight: "100vh",
  }

  return (
    <div ref={target} className="about-container">
      <div className="content-main">
        {/* banner 背景图 */}
        <div style={bannerStyle} className="com-img-about"></div>
        {/* 公司简介 */}
        <div className="container">
          <div className="section-box">
            <div className="title">公司简介</div>
            <div dangerouslySetInnerHTML={{__html: aboutResult?.pc.introduction}} className="company-info"></div>
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
            <div style={{background: `url(${aboutResult?.pc.historyImageUrl}) center/cover no-repeat`}} className="development-bg">
              <div className="section-box">
                  <div className="title">发展历程</div>
              </div>
              <div className="time-box">
                {
                  aboutResult?.pc?.historyVoList?.map((item: {years:string},index) => {
                    const isLast = index + 1 === aboutResult?.pc.historyVoList.length
                    return (
                      <div key={index} className={`time-item wow fadeInDown ${isLast ? 'active' : ''}`}>
                          <div className="time-title">{item?.years}
                          {
                            isLast  && 
                            <div className="arrow-right"></div>
                          }
                          </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        }
        {/* H5 */}
        {
          size?.width <= 580 &&  
          <div className="development-bg d-block d-sm-none">
            <div style={{background: `url(${aboutResult?.pc.historyImageUrl}) center/cover no-repeat`}}  className="development-box">
              <div className="section-box active">
                <div className="title">发展历程</div>
              </div>
             
              <div className="time-box-sm">
                {
                  aboutResult?.pc?.historyVoList?.map((item: {years:string},index) => {
                    const isLast = index + 1 === aboutResult?.pc.historyVoList.length
                    return (
                      <div key={index} className={`time-item wow fadeInDown ${isLast ? 'active' : ''}`}>
                          <div className="time-title">
                            {item?.years}                          
                          </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        }       
        {/* 发展历程 轮播*/}
        <HistorySwiper historyVoList={aboutResult?.pc.historyVoList} />
        {/* shopFooter */}
        <ShopFooter />
      </div>
    </div>
  )
}


export default About
