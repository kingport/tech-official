// 新闻内容
import React from 'react';

import ShopFooter from '../../../components/ShopFooter';
import {useSize} from '../../../hooks/useSize';
import './index.css'

export default function () {
    const target = React.useRef(null)
    const size = useSize(target)

    return (
        <div ref={target} className='content-main'>
            <div className="content-main">
                <div className="com-img"></div>
            </div>
            <div className="section-box wow fadeInDown">
                <div className="title">新闻与事件</div>
            </div>
            {/* 新闻内容 */}
            <div className="d-none d-md-block d-sm-block">
                <div className="news-wrapper">
                    {
                        [1, 2, 3, 4].map((x) => {
                            return (
                                <a
                                    className="news-box wow fadeInDown"
                                    key={x}
                                    href="https://baidu.com">
                                    <div className="news-l">
                                        <div className="news-img">
                                            <div className="img-box">
                                                <img
                                                    src="http://api.hello-tech.com/thinkitcmsresource/image/20210810/609672703393136640.jpg"
                                                    alt=""/></div>
                                        </div>
                                    </div>
                                    <div className="news-r">
                                        <div className="news-item">
                                            <div className="news-info">
                                                <div className="news-title">
                                                    <div className="title">电小二户外电源亮相上海国际房车展，凭安全环保便携实力圈粉</div>
                                                    <div className="date">2021.05.31</div>
                                                </div>
                                                <div className="news-text d-none d-md-block d-sm-block">5月27日-30日，第十四届上海国际房车展于上海汽车会展中心举办，来自全国房车整车、房车配件、户外露营装备、自驾旅游等相关领域的100余家企业参展，吸引大批房车爱好者前来打卡。户外电源开创品牌电小二在品牌云集的展会中脱颖而出，在众多房车爱好者、旅行爱好者中圈粉无数。</div>
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

                {/* <div className="look-more">
                    <ul className="pages">
                        <li>
                            <a href="index.html">1</a>
                        </li>
                        <li>
                            <a href="index_2.html">2</a>
                        </li>
                        <li>
                            <a href="index_2.html">»</a>
                        </li>
                    </ul>
                </div> */
                }
            </div>
            {/* footer */}
            <ShopFooter/>
        </div>
    )
}
