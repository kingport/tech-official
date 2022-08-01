// 新闻内容
import React from 'react';

import ShopFooter from '../../../components/ShopFooter';
import { useNewsEventResult } from '../../../hooks/useNewsEventResult';
import { useNewsResult } from '../../../hooks/useNewsResult';
import {useSize} from '../../../hooks/useSize';
import { getLanguage } from '../../../utils';
import './index.css'

export default function () {
    const target = React.useRef(null)
    const size = useSize(target)

    const { data: newsResult} = useNewsResult({language: getLanguage(), subtitleId: 15})
    const { data: newsEventResult} = useNewsEventResult({language: getLanguage(), newsId: newsResult?.newsId})

      
    return (
        <div ref={target} className='content-main'>
            <div style={{ background: `url(${newsResult?.pc.image}) center/cover no-repeat`}} className="com-img-news"></div>
            <div className="section-box wow fadeInDown">
                <div className="title">{newsResult?.pc.title}</div>
            </div>
            {/* 新闻内容 */}
            {
                size?.width  > 580 && 
                <div className="d-none d-md-block d-sm-block">
                    <div className="news-wrapper">
                        {
                            newsEventResult?.rows.map((x:any,index) => {
                                return (
                                    <a
                                        className="news-box wow fadeInDown"
                                        key={index}
                                        href="https://baidu.com">
                                        <div className="news-l">
                                            <div className="news-img">
                                                <div className="img-box">
                                                    <img
                                                        src={x.pc.image}
                                                        alt=""/></div>
                                            </div>
                                        </div>
                                        <div className="news-r">
                                            <div className="news-item">
                                                <div className="news-info">
                                                    <div className="news-title">
                                                        <div className="title">{x.pc.title}</div>
                                                        <div className="date">{x.pc.articleTime}</div>
                                                    </div>
                                                    <div className="news-text d-none d-md-block d-sm-block">{x.pc.content}</div>
                                                </div>
                                                <div className="news-icon">
                                                    <div className="iconfont iconarrow-r"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            }

            {
                size?.width <= 580 && 
                <div className="d-block d-sm-none">
                    <div className="news_content_sm">
                        <div className="news-wrapper">
                            {
                                newsEventResult?.rows.map((x:any,index) => {
                                    return (
                                        <a key={index} className="news-box" href="/en/news/20210810/609674421535244288.html">
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
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            }
            
            {/* footer */}
            <ShopFooter/>
        </div>
    )
}
