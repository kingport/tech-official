import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { appContext } from '../../../App';
import Footer from '../../../components/Footer';
import ShopFooter from '../../../components/ShopFooter';
import SvgIcon from '../../../components/SvgIcon';
import { useEliteInfoResult } from '../../../hooks/useEliteInfoResult';
import { useMenusResult } from '../../../hooks/useMenusResult';
import { useSize } from '../../../hooks/useSize';
import { getLanguage } from '../../../utils';
import './index.css';

export default function () {
  const target = React.useRef(null);
  const size = useSize(target);
  const isEn = getLanguage() === 'en';
  const location: any = useLocation();

  const domain = useContext(appContext);

  let pathId = '';
  if (!location?.state?.id) {
    const { data: menusResult } = useMenusResult({
      language: getLanguage(),
      companyId: domain?.id,
    });
    menusResult?.pc?.topTitleVoList.map((x) => {
      if (x.subtitleVoList) {
        x.subtitleVoList.map((k: any) => {
          if (k.path === window.location.pathname) {
            pathId = k.subjectId;
          }
        });
      }
    });
  }

  const { data: eliteInfoResult } = useEliteInfoResult({
    language: getLanguage(),
    subtitleId: location?.state?.id || pathId,
  });

  return (
    <div ref={target} className="content-main-join">
      <div
        style={{
          background: `url(${eliteInfoResult?.pc?.topImage}) center/cover no-repeat`,
        }}
        className="com-img"
      >
        {size?.width > 580 && (
          <div className="info-box">
            <div style={{ color: domain?.theme }} className="title">
              {isEn ? `JOIN US` : '精英加盟'}
            </div>
            <div style={{ textAlign: 'center' }} className="text">
              {isEn
                ? `We will provide customized, comprehensive, and multi-angle training plans based on different career development path plans for employees, and implement them in all levels of the company's system, daily operations, and resource protection.`
                : '我们会依据不同的员工职业发展路径规划，提供定制化、全方位、多角度的培训计划，并落实到公司制度、日常运作以及资源保障的各个层面。'}
            </div>
          </div>
        )}
      </div>
      <div className="container">
        {size?.width > 580 && (
          <div className="d-none d-md-block d-sm-block">
            <div className="section-box wow fadeInDown">
              <div style={{ color: domain?.theme }} className="title">
                {isEn ? `WELFARE BENEFITS` : '福利待遇'}
              </div>
            </div>
          </div>
        )}
        {size?.width <= 580 && (
          <div className="d-block d-sm-none">
            <div className="oem-box wow fadeInDown">
              <div style={{ color: domain?.theme }} className="title">
                {isEn ? `JOIN US` : '精英加盟'}
              </div>
              <div className="subtitle">
                {isEn
                  ? `We will provide customized, comprehensive, and multi-angle training plans based on different career development path plans for employees, and implement them in all levels of the company's system, daily operations, and resource protection.`
                  : '我们会依据不同的员工职业发展路径规划，提供定制化、全方位、多角度的培训计划，并落实到公司制度、日常运作以及资源保障的各个层面。'}
              </div>
              <div
                style={{
                  border: `3px solid ${domain?.theme}`,
                  borderRadius: '50px',
                }}
                className="email-box"
              >
                <div className="box">
                  <div style={{ color: domain?.theme }} className="titles">
                    {isEn ? `WELFARE BENEFITS` : '福利待遇'}
                  </div>
                  <div style={{ color: domain?.theme }} className="subtitles">
                    {isEn ? (
                      <>
                        welcome you to join us,
                        <br /> please send your resume to{' '}
                        {eliteInfoResult?.pc?.email}
                      </>
                    ) : (
                      <>
                        欢迎您的加入，请联系：
                        <br /> {eliteInfoResult?.pc?.email}
                        <br />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="join-box">
          <div
            style={{
              border: size?.width > 580 ? `5px solid ${domain?.theme}` : 'none',
              borderRadius: '50px',
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
                      <div
                        style={{ color: domain?.theme }}
                        className="title wow fadeInDown"
                      >
                        {isEn ? `SALARY INCENTIVES` : '薪酬激励:'}
                      </div>
                    </div>
                  )}
                  {size?.width >= 580 && (
                    <div
                      style={{ paddingTop: 50 }}
                      className="d-none d-md-block d-sm-block"
                    >
                      <div
                        style={{ color: domain?.theme }}
                        className="title wow fadeInDown"
                      >
                        {isEn ? `SALARY INCENTIVES` : '薪酬激励'}
                      </div>
                    </div>
                  )}
                  <div style={{ fontSize: 16 }} className="text wow fadeInDown">
                    {isEn
                      ? `In addition to the fixed salary, the company also has performance wages and project bonuses for some positions. Basically, there are year-end bonuses at the end of the year when the business performance reaches the standard. In the long run, we will have equity for management personnel and some core employees with excellent performance. The second batch of personnel allotment was completed last year. We will have another salary adjustment opportunity in July every year. Salary adjustment is not a general adjustment. It must be determined based on personal performance. The rate adjustment is also determined by personal contribution.`
                      : '公司除了固定工资外，部分岗位还有绩效工资、项目奖金，年终基本在经营业绩达标的情况都有年终奖，从长远看，我们针对管理人员和部分表现优秀的核心员工会配有股权，我们去年已经完成了第二批人员配股。每年我们7月份还会有一次调薪机会，调薪不是普调，要根据个人绩效决定，调幅也因个人贡献决定的。'}
                  </div>
                </div>
              </div>
              <div className="row-flex">
                <div className="row-item">
                  <div className="d-none d-md-block d-sm-block">
                    <div
                      style={{ color: domain?.theme }}
                      className="title wow fadeInDown"
                    >
                      {isEn ? 'THE WELFARE' : '福利'}
                    </div>
                  </div>
                  <div className="text">
                    <div className="item-group">
                      <div className="item-box wow fadeInDown">
                        <div className="icon-box">
                          {domain && (
                            <SvgIcon
                              style={{ width: '30px', height: '30px' }}
                              color={domain?.theme}
                              name="beach"
                            />
                          )}
                        </div>
                        <div className="type-box">
                          <div
                            style={{
                              fontSize: 14,
                              lineHeight: '16px',
                              color: domain?.theme,
                            }}
                            className="type-title"
                          >
                            {isEn
                              ? `Five social insurance and one housing fund`
                              : '五险一金'}
                          </div>
                          <div
                            style={{ fontSize: 14, lineHeight: '16px' }}
                            className="type-text"
                          >
                            {isEn
                              ? `Endowment insurance, medical insurance, unemployment insurance, industrial injury insurance, maternity insurance and housing fund will be paid for you.`
                              : `缴纳养老保险、医疗保险、失业保险、工伤保险、生育保险和住房公积金`}
                          </div>
                        </div>
                      </div>
                      <div className="item-box wow fadeInDown">
                        <div className="icon-box">
                          <SvgIcon
                            style={{ width: '30px', height: '30px' }}
                            color={domain?.theme}
                            name="computer"
                          />
                        </div>
                        <div className="type-box">
                          <div
                            style={{
                              fontSize: 14,
                              lineHeight: '16px',
                              color: domain?.theme,
                            }}
                            className="type-title"
                          >
                            {isEn
                              ? `periodic physical examination`
                              : `定期体检`}
                          </div>
                          <div
                            style={{ fontSize: 14, lineHeight: '16px' }}
                            className="type-text"
                          >
                            {isEn
                              ? `periodic occupational health examination`
                              : `阶段性职业健康检查`}
                          </div>
                        </div>
                      </div>
                      <div className="item-box wow fadeInDown">
                        <div className="icon-box">
                          <SvgIcon
                            style={{ width: '30px', height: '30px' }}
                            color={domain?.theme}
                            name="sailing"
                          />
                        </div>
                        <div className="type-box">
                          <div
                            style={{
                              fontSize: 14,
                              lineHeight: '16px',
                              color: domain?.theme,
                            }}
                            className="type-title"
                          >
                            {isEn ? 'paid annual leave' : '带薪年假'}
                          </div>
                          <div
                            style={{ fontSize: 14, lineHeight: '16px' }}
                            className="type-text"
                          >
                            {isEn
                              ? 'We provide paid annual leave for employees'
                              : '公司为员工提供带薪年休假'}
                          </div>
                        </div>
                      </div>
                      <div className="item-box wow fadeInDown">
                        <div className="icon-box">
                          <SvgIcon
                            style={{ width: '40px', height: '30px' }}
                            color={domain?.theme}
                            name="landscape"
                          />
                        </div>
                        <div className="type-box">
                          <div
                            style={{
                              fontSize: 14,
                              lineHeight: '16px',
                              color: domain?.theme,
                            }}
                            className="type-title"
                          >
                            {isEn ? 'Company party travel' : '员工旅行'}
                          </div>
                          <div
                            style={{ fontSize: 14, lineHeight: '16px' }}
                            className="type-text"
                          >
                            {isEn
                              ? 'we will organize travel activities for employees'
                              : '组织员工旅游活动'}
                          </div>
                        </div>
                      </div>
                      <div className="item-box wow fadeInDown">
                        <div className="icon-box">
                          <SvgIcon
                            style={{ width: '30px', height: '30px' }}
                            color={domain?.theme}
                            name="cake"
                          />
                        </div>
                        <div className="type-box">
                          <div
                            style={{
                              fontSize: 14,
                              lineHeight: '16px',
                              color: domain?.theme,
                            }}
                            className="type-title"
                          >
                            {isEn ? `Snacks and afternoon tea` : `零食下午茶`}
                          </div>
                          <div
                            style={{ fontSize: 14, lineHeight: '16px' }}
                            className="type-text"
                          >
                            {isEn
                              ? `afternoon tea such as snacks, drink, fruits will be provided for our employees`
                              : `为员工提供零食、饮料、水果作为下午茶`}
                          </div>
                        </div>
                      </div>
                      <div className="item-box wow fadeInDown">
                        <div className="icon-box">
                          <SvgIcon
                            style={{ width: '30px', height: '30px' }}
                            color={domain?.theme}
                            name="schedule"
                          />
                        </div>
                        <div className="type-box">
                          <div
                            style={{
                              fontSize: 14,
                              lineHeight: '16px',
                              color: domain?.theme,
                            }}
                            className="type-title"
                          >
                            {isEn ? 'Holiday benefits' : '节日福利'}
                          </div>
                          <div
                            style={{ fontSize: 14, lineHeight: '16px' }}
                            className="type-text"
                          >
                            {isEn
                              ? `we offer gifts to employees when Statutory or special holidays`
                              : `法定或者特定节日时提供礼物`}
                          </div>
                        </div>
                      </div>
                      <div className="item-box wow fadeInDown">
                        <div className="icon-box">
                          <SvgIcon
                            style={{ width: '30px', height: '30px' }}
                            color={domain?.theme}
                            name="workspace"
                          />
                        </div>
                        <div className="type-box">
                          <div
                            style={{
                              fontSize: 14,
                              lineHeight: '16px',
                              color: domain?.theme,
                            }}
                            className="type-title"
                          >
                            {isEn ? 'The annual bonus' : '年终奖'}
                          </div>
                          <div
                            style={{ fontSize: 14, lineHeight: '16px' }}
                            className="type-text"
                          >
                            {isEn
                              ? `Give annual bonus to employees at the end of the year for recognition to the performance of the past year`
                              : `年末给予员工年终奖励，对一年来的工作业绩给予肯定`}
                          </div>
                        </div>
                      </div>
                      <div className="item-box wow fadeInDown">
                        <div className="icon-box">
                          <SvgIcon
                            style={{ width: '30px', height: '30px' }}
                            color={domain?.theme}
                            name="today"
                          />
                        </div>
                        <div className="type-box">
                          <div
                            style={{
                              fontSize: 14,
                              lineHeight: '16px',
                              color: domain?.theme,
                            }}
                            className="type-title"
                          >
                            {isEn ? 'Weekends rest' : '双休'}
                          </div>
                          <div
                            style={{ fontSize: 14, lineHeight: '16px' }}
                            className="type-text"
                          >
                            {isEn
                              ? 'workday is from Monday to Friday, and the weekends will be rest days'
                              : '工作日为周一到周五，周末双休'}
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
            style={{ paddingBottom: 100, color: domain?.theme }}
            className="text-box wow fadeInDown"
          >
            {isEn
              ? `welcome you to join us, please send your resume to ${eliteInfoResult?.pc?.email}`
              : `欢迎您的加入，请联系：${eliteInfoResult?.pc?.email}`}
          </div>
        )}
      </div>
      <ShopFooter />
      <Footer />
    </div>
  );
}
