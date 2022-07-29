// 质量方针
import React from 'react';

import ShopFooter from '../../../components/ShopFooter';
import { useQualityResult } from '../../../hooks/useQualityResult';
import {useSize} from '../../../hooks/useSize';
import { getLanguage } from '../../../utils';
import './index.css'

export default function () {
    const target = React.useRef(null)
    const size = useSize(target)

    const {
        data: qualityResult,
        isLoading: qualityResultLoading,
        isFetching: qualityResultFetching,
        refetch: qualityResultRefetch
      } = useQualityResult({language: getLanguage(), subtitleId: 13})

    return (
        <div ref={target} className='content-main'>
            {/* banner */}
            <div className="com-img"></div>
            {/* 质量方针 */}
            <div className="container">
                <div className="section-box">
                    <div className="title">质量方针</div>
                </div>
                <div className="row-imgs">
                    {
                        qualityResult?.pc.qualityPolicyList.map((x:any) => {
                            return (
                                <div key={x} className="row-item">
                                    <div className="img-box wow fadeIn">
                                        <img src={x.image} alt=""/>
                                    </div>
                                    <div className="text">{x.content}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* 四大安全保障 */}
            <div className="store-bg">
                <div className="container">
                    <div className="section-box">
                        <div className="title ta-left">四大安全保障</div>
                    </div>
                    {/*  PC */}
                    {
                        size
                            ?.width > 580 && <div className="row row-store-pc">
                                    <div className="col-xs-12 col-md-4">
                                        <div className="store-wrapper">
                                            <div className="store-box store-box-a wow fadeInLeft">
                                                <div className="store-icon">
                                                    <img
                                                        src={qualityResult?.pc.qualitySecurityList[0].image}
                                                        alt=""/></div>
                                                <div className="store-title">
                                                    <span className="number"></span>
                                                    <span>{qualityResult?.pc.qualitySecurityList[0].title}</span>
                                                </div>
                                                <div className="store-text">{qualityResult?.pc.qualitySecurityList[0].content}</div>
                                            </div>
                                            <div className="store-box store-box-b wow fadeInLeft">
                                                <div className="store-icon">
                                                    <img
                                                        src={qualityResult?.pc.qualitySecurityList[1].image}
                                                        alt=""/></div>
                                                <div className="store-title">
                                                    <span>{qualityResult?.pc.qualitySecurityList[1].title}</span>
                                                </div>
                                                <div className="store-text">{qualityResult?.pc.qualitySecurityList[1].content}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-4 wow fadeIn">
                                        <div className="store-img">
                                            <img
                                                src="https://www.hello-tech.com/images/quality-middle-img05bf80baf12f20ab6ce76b97194f176b.png"
                                                alt=""/></div>
                                    </div>
                                    <div className="col-xs-12 col-md-4">
                                        <div className="store-wrapper">
                                            <div className="store-box store-box-c wow fadeInLeft">
                                                <div className="store-icon">
                                                    <img
                                                        src={qualityResult?.pc.qualitySecurityList[2].image}
                                                        alt=""/></div>
                                                <div className="store-title">
                                                    <span>{qualityResult?.pc.qualitySecurityList[2].title}</span>
                                                </div>
                                                <div className="store-text">{qualityResult?.pc.qualitySecurityList[2].content}</div>
                                            </div>
                                            <div className="store-box store-box-d wow fadeInLeft">
                                                <div className="store-icon">
                                                    <img
                                                        src={qualityResult?.pc.qualitySecurityList[3].image}
                                                        alt=""/></div>
                                                <div className="store-title">
                                                    <span>{qualityResult?.pc.qualitySecurityList[3].title}</span>
                                                </div>
                                                <div className="store-text">{qualityResult?.pc.qualitySecurityList[3].content}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    }

                    {/* H5 */}
                    {
                        size
                            ?.width <= 580 && <div className="row row-store-m">
                                    <div className="col-xs-12">
                                        <div className="store-wrapper wow fadeInDown">
                                            <div className="store-box">
                                                <div className="store-title">
                                                    <span className="number">
                                                        <img
                                                            src="https://www.hello-tech.com/images/quality-icon-ae533b0bcb04379b8c21cc2d58ffa90ea.png"
                                                            alt=""/></span>
                                                    <div className="store-text">
                                                        <div className="title">九道质检工序UL安全检测</div>
                                                        <div className="subtitle">拥有广东省工程技术中心和行业标准实验室，产品必须经过7大类目测试项目UL安全检测及45道测试工序。</div>
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
                                                            src="https://www.hello-tech.com/images/quality-icon-ae533b0bcb04379b8c21cc2d58ffa90ea.png"
                                                            alt=""/></span>
                                                    <div className="store-text">
                                                        <div className="title">智能BMS保护板自动识别高压电流</div>
                                                        <div className="subtitle">智能BMS保护板，能够自动识别高电压电流，有效地保护电芯，避免过放、过充或短路等问题，安全可靠。</div>
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
                                                    src="https://www.hello-tech.com/images/quality-middle-img05bf80baf12f20ab6ce76b97194f176b.png"
                                                    alt=""/></div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="store-wrapper wow fadeInDown">
                                            <div className="store-box">
                                                <div className="store-title">
                                                    <span className="number">
                                                        <img
                                                            src="https://www.hello-tech.com/images/quality-icon-ae533b0bcb04379b8c21cc2d58ffa90ea.png"
                                                            alt=""/></span>
                                                    <div className="store-text">
                                                        <div className="title">绿色环保耐高温低压锂电芯</div>
                                                        <div className="subtitle">电小二锂电芯经过测试，在-10度-40度的恶劣环境下仍然可正常运转，其电芯寿命高可反复循环使用，缘色环保。</div>
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
                                                            src="https://www.hello-tech.com/images/quality-icon-ae533b0bcb04379b8c21cc2d58ffa90ea.png"
                                                            alt=""/></span>
                                                    <div className="store-text">
                                                        <div className="title">平安保险承保您的权益我们买单</div>
                                                        <div className="subtitle">本产品由中国平安保险承保，您的权益我们买单，安心使用，享受精彩户外</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    }

                </div>
            </div>
            {/* banner 图 */}
            <div className='com-img com-img-footer'></div>
            {/* 环境方针 */}
            <div className="container-fluid">
                <div className="section-box">
                    <div className="title">环境方针</div>
                </div>
                <div className="type-box">
                    <div className="type-item wow fadeInDown">
                        <div className="type-text">遵守法规</div>
                    </div>
                    <div className="type-item wow fadeInDown">
                        <div className="type-text">节约能源</div>
                    </div>
                    <div className="type-item wow fadeInDown">
                        <div className="type-text">提前预防</div>
                    </div>
                    <div className="type-item wow fadeInDown">
                        <div className="type-text">保护环境</div>
                    </div>
                    <div className="type-item wow fadeInDown">
                        <div className="type-text">减少污染</div>
                    </div>
                    <div className="type-item wow fadeInDown">
                        <div className="type-text">持续发展</div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <ShopFooter/>
        </div>
    )
}
