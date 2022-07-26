// 荣誉资质

import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

import ShopFooter from '../../../components/ShopFooter';
import './index.css'
import "swiper/css";
import "swiper/css/navigation";

import {Navigation} from "swiper";

export default function () {
    return (
        <div className='content-main'>
            {/* banner */}
            <div className="com-img"></div>
            {/* 荣誉资质 */}
            <div className="container">
                <div className="section-box">
                    <div className="title">荣誉资质</div>
                    <div className="company-info">
                        <p className="wow fadeInDown">华宝新能及子公司拥有境内专利116项（其中发明专利21项），拥有境外专利66项（其中发明专利4项），取得了计算机软件著作权16项</p>
                        <p className="wow fadeInDown">获得德国红点设计奖、汉诺威工业（IF）设计奖、美国CES创新奖、A'Design Award &amp; Competition设计金奖共12项</p>
                        <p className="wow fadeInDown">产品创新性得到了国际消费电子领域的认可</p>
                    </div>
                </div>
            </div>
            {/* 轮播 */}
            <div className='honor-wrapper'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        [1, 2, 3, 4, 5].map((x) => {
                            return (
                                <SwiperSlide key={x} className="honor-swiper-img"><img
                                    src="https://api.hello-tech.com/thinkitcmsresource/image/20210623/592348605050781696.jpg"/></SwiperSlide>

                            )
                        })
                    }
                </Swiper>
            </div>
            {/* 企业荣誉 */}
            <div className="honor-bg">
                <div className="honor-info">
                    {
                        [1, 2].map((x) => {
                            return (
                                <div className="info-item">
                                    {
                                        [
                                            1,
                                            2,
                                            3,
                                            4,
                                            5,
                                            6,
                                            7,
                                            8,
                                            9
                                        ].map((x) => {
                                            return (
                                                <div className="text-box wow fadeInDown">
                                                    <div className="icon">
                                                        <img src="https://www.hello-tech.com/images/honor-icon.png"/>
                                                    </div>
                                                    <div className="text">2021 华宝新能被评为德勤深圳高科技高成长20强</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* footer */}
            <ShopFooter/>
        </div>
    )
}
