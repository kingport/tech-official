// 社会责任
import React from 'react';
import { useLocation } from 'react-router-dom';

import ShopFooter from '../../../components/ShopFooter';
import { useResponsibilityResult } from '../../../hooks/useResponsibilityResult';
import {useSize} from '../../../hooks/useSize';
import { getLanguage } from '../../../utils';
import './index.css'

export default function () {
    const target = React.useRef(null)
    const size = useSize(target)
    const location: any = useLocation()

    const {
        data: responsibilityResult,
        isLoading: responsibilityResultLoading,
        isFetching: responsibilityResultFetching,
        refetch: responsibilityResultRefetch
      } = useResponsibilityResult({language: getLanguage(), subtitleId: location?.state?.id})

    return (
        <div ref={target} className='content-main'>
            <div className="content-main">
                <div style={{minHeight: '100vh',background: `url(${responsibilityResult?.pc.topImage}) center/cover no-repeat`}} className="com-img">
                    <div className="d-none d-md-block d-sm-block">
                        <div className="info-box">
                            <div className="title"></div>
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
                                                            <div className="subtitle">{x.content}</div>
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
                                                                <div className="resp-text-sm">{x.articleTime}{x.content}
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
