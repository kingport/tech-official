import React from 'react';
import Footer from '../../../components/Footer';
import ShopFooter from '../../../components/ShopFooter';
import { useSize } from '../../../hooks/useSize';
import { getLanguage } from '../../../utils';
import './index.css';

export default function () {
  const target = React.useRef(null);
  const size = useSize(target);
  const isEn = getLanguage() === 'en';

  return (
    <div ref={target} className="content-main">
      <div className="com-img">
        {size?.width > 580 && (
          <div className="info-box">
            <div className="title">{isEn ? `JOIN US` : '精英加盟'}</div>
            <div style={{ textAlign: 'center' }} className="text">
              {
                isEn ? 
                `We will provide customized, comprehensive, and multi-angle training plans based on different career development path plans for employees, and implement them in all levels of the company's system, daily operations, and resource protection.` :
                '我们会依据不同的员工职业发展路径规划，提供定制化、全方位、多角度的培训计划，并落实到公司制度、日常运作以及资源保障的各个层面。'
              }
            </div>
          </div>
        )}
      </div>
      <div className="container">
        {size?.width > 580 && (
          <div className="d-none d-md-block d-sm-block">
            <div className="section-box wow fadeInDown">
              <div className="title">{isEn ? `WELFARE BENEFITS` : '福利待遇'}</div>
            </div>
          </div>
        )}
        {size?.width <= 580 && (
          <div className="d-block d-sm-none">
            <div className="oem-box wow fadeInDown">
              <div className="title">{isEn ? `JOIN US` : '精英加盟'}</div>
              <div className="subtitle">
              {
                isEn ? 
                `We will provide customized, comprehensive, and multi-angle training plans based on different career development path plans for employees, and implement them in all levels of the company's system, daily operations, and resource protection.` :
                '我们会依据不同的员工职业发展路径规划，提供定制化、全方位、多角度的培训计划，并落实到公司制度、日常运作以及资源保障的各个层面。'
              }
              </div>
              <div className="email-box">
                <div className="box">
                  <div className="titles">{isEn ? `WELFARE BENEFITS` : '福利待遇'}</div>
                  <div className="subtitles">
                    {isEn ? <>Hello Tech welcome you to join us,<br /> please send your resume to hr@jackery.com</> : <>华宝新能欢迎您的加入，请联系：<br /> hr@hello-tech.com<br /></>}                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="join-box">
          <div
            style={{
              background:
                size?.width > 580
                  ? `url(${'https://www.hello-tech.com/images/letter-bg2c0261315592068a94c83925f9824615.png'}) center bottom/contain no-repeat`
                  : 'none',
            }}
            className="form-info"
          >
            <div
              style={{ paddingTop: size?.width > 580 ? 100 : 0 }}
              className="info-box"
            >
              <div className="row-flex">
                <div className="row-item">
                  {size?.width <= 580 && (
                    <div className="d-block d-sm-none">
                      <div className="title wow fadeInDown">{isEn ? `SALARY INCENTIVES` : '薪酬激励:'}</div>
                    </div>
                  )}
                  {size?.width >= 580 && (
                    <div className="d-none d-md-block d-sm-block">
                      <div className="title wow fadeInDown">{isEn ? `SALARY INCENTIVES` : '薪酬激励'}</div>
                    </div>
                  )}
                  <div style={{ fontSize: 18 }} className="text wow fadeInDown">
                    {
                      isEn ? `In addition to the fixed salary, the company also has performance wages and project bonuses for some positions. Basically, there are year-end bonuses at the end of the year when the business performance reaches the standard. In the long run, we will have equity for management personnel and some core employees with excellent performance. The second batch of personnel allotment was completed last year. We will have another salary adjustment opportunity in July every year. Salary adjustment is not a general adjustment. It must be determined based on personal performance. The rate adjustment is also determined by personal contribution.`
                      : '公司除了固定工资外，部分岗位还有绩效工资、项目奖金，年终基本在经营业绩达标的情况都有年终奖，从长远看，我们针对管理人员和部分表现优秀的核心员工会配有股权，我们去年已经完成了第二批人员配股。每年我们7月份还会有一次调薪机会，调薪不是普调，要根据个人绩效决定，调幅也因个人贡献决定的。'
                    }
                  </div>
                </div>
              </div>
              <div className="row-flex">
                <div className="row-item">
                  <div className="d-none d-md-block d-sm-block">
                    <div className="title wow fadeInDown">{isEn ? 'THE WELFARE' : '福利'}</div>
                  </div>
                  <div className="text">
                    <div className="item-group">
                      <div className="item-box wow fadeInDown">
                        <div className="icon-box">
                          <img
                            src="https://www.hello-tech.com/images/join-a62ce2f415dc2c415f08895c0100a0224.png"
                            alt=""
                          />
                        </div>
                        <div className="type-box">
                          <div className="type-title">{isEn ?`Five social insurance and one housing fund`:"五险一金"}</div>
                          <div className="type-text">
                            {
                              isEn ? `Endowment insurance, medical insurance, unemployment insurance, industrial injury insurance, maternity insurance and housing fund will be paid for you.` : `缴纳养老保险、医疗保险、失业保险、工伤保险、生育保险和住房公积金`
                            }
                          </div>
                        </div>
                      </div>
                      <div className="item-box wow fadeInDown">
                        <div className="icon-box">
                          <img
                            src="https://www.hello-tech.com/images/join-beaa16293a1ce1fac5eb669050905a829.png"
                            alt=""
                          />
                        </div>
                        <div className="type-box">
                          <div className="type-title">{isEn ? `periodic physical examination` : `定期体检`}</div>
                          <div className="type-text">{isEn ? `periodic occupational health examination` : `阶段性职业健康检查`}</div>
                        </div>
                      </div>
                      <div className="item-box wow fadeInDown">
                        <div className="icon-box">
                          <img
                            src="https://www.hello-tech.com/images/join-c4a43e08cf924333d7957286bb816119e.png"
                            alt=""
                          />
                        </div>
                        <div className="type-box">
                          <div className="type-title">{isEn ? "paid annual leave" : "带薪年假"}</div>
                          <div className="type-text">
                            {
                              isEn ? 'We provide paid annual leave for employees' : '公司为员工提供带薪年休假'
                            }
                          </div>
                        </div>
                      </div>
                      <div className="item-box wow fadeInDown">
                        <div className="icon-box">
                          <img
                            src="https://www.hello-tech.com/images/join-db0224b6432be709179cd288c1f407788.png"
                            alt=""
                          />
                        </div>
                        <div className="type-box">
                          <div className="type-title">{isEn ? 'Company party travel' : '员工旅行'}</div>
                          <div className="type-text">{isEn ? 'we will organize travel activities for employees' : '组织员工旅游活动'}</div>
                        </div>
                      </div>
                      <div className="item-box wow fadeInDown">
                        <div className="icon-box">
                          <img
                            src="https://www.hello-tech.com/images/join-e1d7e5478b41286bca9bc3c8b3c4021c2.png"
                            alt=""
                          />
                        </div>
                        <div className="type-box">
                          <div className="type-title">{isEn ? `Snacks and afternoon tea` : `零食下午茶`}</div>
                          <div className="type-text">
                            {
                              isEn ? `afternoon tea such as snacks, drink, fruits will be provided for our employees` : `为员工提供零食、饮料、水果作为下午茶`
                            }
                          </div>
                        </div>
                      </div>
                      <div className="item-box wow fadeInDown">
                        <div className="icon-box">
                          <img
                            src="https://www.hello-tech.com/images/join-f78f54ac49651e01da4304861c90d7214.png"
                            alt=""
                          />
                        </div>
                        <div className="type-box">
                          <div className="type-title">{isEn ? 'Holiday benefits' : '节日福利'}</div>
                          <div className="type-text">
                            {
                              isEn ? `we offer gifts to employees when Statutory or special holidays` : `法定或者特定节日时提供礼物`
                            }
                          </div>
                        </div>
                      </div>
                      <div className="item-box wow fadeInDown">
                        <div className="icon-box">
                          <img
                            src="https://www.hello-tech.com/images/join-g9245b2700078f5d146930f72b7f6b866.png"
                            alt=""
                          />
                        </div>
                        <div className="type-box">
                          <div className="type-title">{isEn ? 'The annual bonus' : '年终奖'}</div>
                          <div className="type-text">
                            {
                              isEn ? `Give annual bonus to employees at the end of the year for recognition to the performance of the past year` : `年末给予员工年终奖励，对一年来的工作业绩给予肯定`
                            }
                          </div>
                        </div>
                      </div>
                      <div className="item-box wow fadeInDown">
                        <div className="icon-box">
                          <img
                            src="https://www.hello-tech.com/images/join-h72f5868dcb0e7c0e14a98f5c7f1449c7.png"
                            alt=""
                          />
                        </div>
                        <div className="type-box">
                          <div className="type-title">{isEn ? 'Weekends rest' : '双休'}</div>
                          <div className="type-text">
                            {
                              isEn ? 'workday is from Monday to Friday, and the weekends will be rest days' : '工作日为周一到周五，周末双休'
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {size?.width > 580 && (
          <div
            style={{ paddingBottom: 100 }}
            className="text-box wow fadeInDown"
          >
            {isEn ? `Hello Tech welcome you to join us, please send your resume to hr@jackery.com` : `华宝新能欢迎您的加入，请联系：hr@hello-tech.com`}
          </div>
        )}
      </div>
      <ShopFooter />
      <Footer />
    </div>
  );
}
