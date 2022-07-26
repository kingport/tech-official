// 社会责任
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
                                        <div className="title">公益慈善</div>
                                        <div className="contentBox">
                                            <div className="contentItem">
                                                <img
                                                    src="https://www.hello-tech.com/images/resp-img-ccfeeafc03ce5a24be6bebfcbccb29042.jpg"
                                                    alt=""/>
                                                <div className="contentTitle">
                                                    <div className="resp-title">抢险救灾，电小二在行动</div>
                                                    <div className="tag">公益慈善</div>
                                                </div>
                                                <div className="time">2021.07.21</div>
                                                <div className="subtitle">2021年7月河南暴雨灾情严重，抢险救援急需电力支持，电小二紧急安排河南合作伙伴向蓝天救援队及曙光救援队捐赠一批电小二户外电源，方便其为气艇、冲锋舟、无人机、照明灯等救援设备供电，保障救援工作安全顺利开展。同时，电小二户外电源深圳总部向河南省郑州市中牟县红十字会捐赠一批大容量大功率户外电源并安排专车连夜发往郑州，用于救灾应急用电、灾后重建户外用电。</div>
                                            </div>
                                            <div className="contentItem">
                                                <img
                                                    src="https://www.hello-tech.com/images/resp-img-ccfeeafc03ce5a24be6bebfcbccb29042.jpg"
                                                    alt=""/>
                                                <div className="contentTitle">
                                                    <div className="resp-title">精准扶贫 共同帮扶</div>
                                                    <div className="tag">公益慈善</div>
                                                </div>
                                                <div className="time">2020.06.21</div>
                                                <div className="subtitle">2020年6月，得知广西壮族自治区三江侗族自治县同乐苗族乡良冲村学校、村委经常受断电困扰，深圳市华宝新能源股份有限公司援建太阳能应急储能系统。通过加班加点安装调试，解决了困扰村部和学校经常性停电问题，助力义务教育发展。</div>
                                            </div>
                                            <div className="contentItem">
                                                <img
                                                    src="https://www.hello-tech.com/images/resp-img-ccfeeafc03ce5a24be6bebfcbccb29042.jpg"
                                                    alt=""/>
                                                <div className="contentTitle">
                                                    <div className="resp-title">全球战役 一起行动</div>
                                                    <div className="tag">公益慈善</div>
                                                </div>
                                                <div className="time">2019.12.21</div>
                                                <div className="subtitle">2019年底，武汉市爆发新型冠状肺炎疫情后，华宝新能源股份有限公司于2020年春节紧急组织力量驰援武汉，向武汉人民捐赠了一批户外便携储能物资，为武汉人民解决电力缺乏问题，为抗疫护航。</div>
                                            </div>
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
                                        <div className="title">公益慈善</div>
                                    </div>
                                    <div className="responsibility-content">
                                        <div className="resp-info-sm wow fadeInDown animated">
                                            <div className="resp-img">
                                                <img src="https://www.hello-tech.com/images/resp-img-ccfeeafc03ce5a24be6bebfcbccb29042.jpg" alt=""/></div>
                                            <div className="resp-title-sm">抢险救灾，电小二在行动</div>
                                            <div className="resp-text-sm">2021年7月河南暴雨灾情严重，抢险救援急需电力支持，电小二紧急安排河南合作伙伴向蓝天救援队及曙光救援队捐赠一批电小二户外电源，方便其为气艇、冲锋舟、无人机、照明灯等救援设备供电，保障救援工作安全顺利开展。同时，电小二户外电源深圳总部向河南省郑州市中牟县红十字会捐赠一批大容量大功率户外电源并安排专车连夜发往郑州，用于救灾应急用电、灾后重建户外用电。</div>
                                            <div className="resp-img">
                                                <img src="https://www.hello-tech.com/images/resp-img-ccfeeafc03ce5a24be6bebfcbccb29042.jpg" alt=""/></div>
                                            <div className="resp-title-sm">精准扶贫 共同帮扶</div>
                                            <div className="resp-text-sm">2020年6月，得知广西壮族自治区三江侗族自治县同乐苗族乡良冲村学校、村委经常受断电困扰，深圳市华宝新能源股份有限公司援建太阳能应急储能系统。通过加班加点安装调试，解决了困扰村部和学校经常性停电问题，助力义务教育发展。</div>
                                            <div className="resp-img">
                                                <img src="https://www.hello-tech.com/images/resp-img-ccfeeafc03ce5a24be6bebfcbccb29042.jpg" alt=""/></div>
                                            <div className="resp-title-sm">全球战役 一起行动</div>
                                            <div className="resp-text-sm">2019年底，武汉市爆发新型冠状肺炎疫情后，华宝新能源股份有限公司于2020年春节紧急组织力量驰援武汉，向武汉人民捐赠了一批户外便携储能物资，为武汉人民解决电力缺乏问题，为抗疫护航。</div>
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
