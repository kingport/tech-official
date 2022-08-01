// 社会责任
import React from 'react';

import ShopFooter from '../../../components/ShopFooter';
import { useResponsibilityResult } from '../../../hooks/useResponsibilityResult';
import {useSize} from '../../../hooks/useSize';
import { getLanguage } from '../../../utils';
import './index.css'

export default function () {
    const target = React.useRef(null)
    const size = useSize(target)

    const {
        data: responsibilityResult,
        isLoading: responsibilityResultLoading,
        isFetching: responsibilityResultFetching,
        refetch: responsibilityResultRefetch
      } = useResponsibilityResult({language: getLanguage(), subtitleId: 14})

    return (
        <div ref={target} className='content-main'>
            <div className="content-main">
                <div className="com-img">
                    <div className="d-none d-md-block d-sm-block">
                        <div className="info-box">
                            <div className="title">让绿色能源无处不在</div>
                        </div>
                        <div className="d-block d-sm-none">
                            <div className="info-box"></div>
                        </div>
                    </div>
                </div>
                {
                    size
                        ?.width > 580 && <div className="d-none d-md-block d-sm-block">
                                <div className="container">
                                    <div className="section-box">
                                        <div className="title">{responsibilityResult?.pc?.subtitle}</div>
                                        <div className="contentBox">
                                            {
                                                responsibilityResult?.pc?.articleList.map((x:any,index) => {
                                                    return(
                                                        <div key={index} className="contentItem">
                                                            <img
                                                                src={x.image}
                                                                alt=""/>
                                                            <div className="contentTitle">
                                                                <div className="resp-title">{x.title}</div>
                                                                <div className="tag">{x.subtitle}</div>
                                                            </div>
                                                            <div className="time">{x.articleTime}</div>
                                                            <div className="subtitle">2021年7月河南暴雨灾情严重，抢险救援急需电力支持，电小二紧急安排河南合作伙伴向蓝天救援队及曙光救援队捐赠一批电小二户外电源，方便其为气艇、冲锋舟、无人机、照明灯等救援设备供电，保障救援工作安全顺利开展。同时，电小二户外电源深圳总部向河南省郑州市中牟县红十字会捐赠一批大容量大功率户外电源并安排专车连夜发往郑州，用于救灾应急用电、灾后重建户外用电。</div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                }

                {
                    size
                        ?.width <= 580 && <div className="d-block d-sm-none">
                                <div className="responsibility-sm">
                                    <div className="title-box">
                                        <div className="title">{responsibilityResult?.h5?.subtitle}</div>
                                    </div>
                                    <div className="responsibility-content">
                                        <div className="resp-info-sm wow fadeInDown animated">
                                            {
                                                 responsibilityResult?.h5?.articleList.map((x:any,index) => {
                                                    return (
                                                        <div key={index}>
                                                            <div className="resp-img">
                                                                <img src={x.image} alt="" />
                                                            </div>
                                                                <div className="resp-title-sm">{x.title}</div>
                                                                <div className="resp-text-sm">{x.articleTime}河南暴雨灾情严重，抢险救援急需电力支持，电小二紧急安排河南合作伙伴向蓝天救援队及曙光救援队捐赠一批电小二户外电源，方便其为气艇、冲锋舟、无人机、照明灯等救援设备供电，保障救援工作安全顺利开展。同时，电小二户外电源深圳总部向河南省郑州市中牟县红十字会捐赠一批大容量大功率户外电源并安排专车连夜发往郑州，用于救灾应急用电、灾后重建户外用电。
                                                            </div>
                                                        </div>
                                                    )
                                                 })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                }
            </div>
            {/* footer */}
            <ShopFooter/>
        </div>
    )
}
