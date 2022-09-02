import React, { useContext } from 'react';
import ShopFooter from '../../../components/ShopFooter';
import './index.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper';
import { useSize } from '../../../hooks/useSize';
import { getLanguage } from '../../../utils';
import { Formik, Field, Form } from 'formik';
import { useMutation } from 'react-query';
import { postCooperateSumbit } from '../../../apis';
import { useSnackbar } from 'notistack';
import { useLocation } from 'react-router-dom';
import Footer from '../../../components/Footer';
import { useCompanyIdResult } from '../../../hooks/useCompanyIdResult';
import { appContext } from '../../../App';
import { useMenusResult } from '../../../hooks/useMenusResult';
import { useCooperateInfoResult } from '../../../hooks/useCooperateInfoResult';

export default function () {
  const target = React.useRef(null);
  const size = useSize(target);
  const { enqueueSnackbar } = useSnackbar();
  const location: any = useLocation();
  const domain = useContext(appContext);

  const { data: companyIdResult } = useCompanyIdResult({
    domainName:
      window.location.hostname === 'localhost'
        ? 'test.wangdingkun.xyz'
        : window.location.hostname,
  });

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

  const { data: cooperateInfoResult } = useCooperateInfoResult({
    language: getLanguage(),
    subtitleId: location?.state?.id || pathId,
  });

  const mutation = useMutation(postCooperateSumbit, {
    onSuccess: (data: any, variables, context) => {
      if (data.code === 0) {
        enqueueSnackbar(data.msg, {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
          },
          autoHideDuration: 1000,
        });
      } else {
        enqueueSnackbar(data.msg, {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
          },
          autoHideDuration: 1000,
        });
      }
    },
  });

  // @ts-ignore
  const onSubmit = async (values: any, { setSubmitting, resetForm }) => {
    if (values) {
      values.companyId = companyIdResult?.id;
      await mutation.mutate(values);
      resetForm();
    }
  };

  const isEn = getLanguage() === 'en';

  return (
    <div ref={target} className="content-main-dealers">
      <div
        style={{
          background: `url(${cooperateInfoResult?.pc?.topImage}) center/cover no-repeat`,
        }}
        className="com-img"
      >
        {size?.width > 580 && (
          <div className="info-box-dealers">
            <div style={{ color: domain?.theme }} className="title">
              {isEn ? 'BUSINESS COOPERATION' : '商业合作'}
            </div>
            <div className="text">
              {isEn
                ? `We are recruiting distributors and agents worldwide,
                welcome to join us,`
                : '我们正在全球范围内招经销商和代理商，欢迎你的加入，'}
              <br />
              {isEn
                ? `please leave your contact information
                and let’s talk more details.`
                : '请留下你的联系方式，我们会再详细沟通'}
            </div>
          </div>
        )}
      </div>
      {/* 商业合作 */}
      <div className="container">
        <Formik
          initialValues={{
            email: '',
            phone: '',
            content: '',
          }}
          onSubmit={onSubmit}
        >
          <Form className="com-form" id="form">
            {size?.width > 580 && (
              <div className="d-none d-md-block d-sm-block">
                <div
                  style={{ color: domain?.theme }}
                  className="form-title wow fadeInDown"
                >
                  {isEn
                    ? `SEND YOUR EMAIL OR FILL IN THE FOLLOWING "INQUIRY FORM" FOR MORE INFORMATION`
                    : '欢迎发送邮件或填写下方“咨询表”获取更多信息'}
                </div>
              </div>
            )}
            {size?.width <= 580 && (
              <div className="d-block d-sm-none">
                <div className="business-header-sm wow fadeInDown">
                  <div style={{ color: domain?.theme }} className="title">
                    {isEn ? 'BUSINESS COOPERATION' : '商业合作'}
                  </div>
                  <div style={{ color: domain?.theme }} className="subtitle">
                    {isEn
                      ? `We are recruiting distributors and agents worldwide,
                    welcome to join us, please leave your contact information
                    and let’s talk more details.`
                      : '请留下你的联系方式，我们会再详细沟通'}
                    {isEn
                      ? `We are recruiting distributors and agents worldwide,
                    welcome to join us, please leave your contact information
                    and let’s talk more details.`
                      : '我们正在全球范围内招经销商和代理商，欢迎你的加入，请留下你的联系方式，我们会再详细沟通。'}
                  </div>
                </div>
                <div className="business-email-box wow fadeInDown">
                  <div
                    style={{
                      border: `3px solid ${domain?.theme}`,
                      borderRadius: '50px',
                    }}
                    className="email-box"
                  >
                    <div className="box">
                      <div style={{ color: domain?.theme }} className="title">
                        {isEn
                          ? `Send your email or fill in the following "inquiry form" for more information`
                          : '欢迎发送邮件或填写下方“咨询表”获取更多信息'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div
              style={{
                border:
                  size?.width > 580 ? `5px solid ${domain?.theme}` : 'none',
                borderRadius: '50px',
              }}
              className="form-info wow fadeInDown"
            >
              <div className="info-box">
                <div className="row-form row-flex">
                  <div className="form-item">
                    <label>
                      <div style={{ color: domain?.theme }} className="type">
                        {isEn ? `Email address` : '电子邮箱'}
                      </div>
                      <div className="input">
                        {/* @ts-ignore */}
                        <div className="icon-pos">
                          <img src="https://www.hello-tech.com/images/icon-email32138356288f847c44d6f23c323b0efb.png" />
                        </div>
                        <Field
                          style={{ border: `1px solid ${domain?.theme}` }}
                          required
                          className="email"
                          name="email"
                          placeholder={
                            isEn ? 'Please enter your email' : '请输入您的邮箱'
                          }
                        />
                      </div>
                    </label>
                  </div>
                  <div className="form-item">
                    <label>
                      <div style={{ color: domain?.theme }} className="type">
                        {isEn ? 'Phone' : '联系电话'}
                      </div>
                      <div className="input">
                        {/* @ts-ignore */}
                        <div className="icon-pos">
                          <img src="https://www.hello-tech.com/images/icon-tel7e447f4e2eded844b45d0225abdbabfd.png" />
                        </div>
                        <Field
                          style={{ border: `1px solid ${domain?.theme}` }}
                          required
                          className="phone"
                          name="phone"
                          placeholder={
                            isEn
                              ? 'Please enter your phone number'
                              : '请输入您的电话'
                          }
                        />
                      </div>
                    </label>
                  </div>
                </div>
                <div className="row-form">
                  <div className="form-item">
                    <label>
                      <div style={{ color: domain?.theme }} className="type">
                        {isEn ? 'Consultation content' : '咨询内容'}
                      </div>
                      <div className="input">
                        {/* @ts-ignore */}
                        <div className="icon-pos">
                          <img src="https://www.hello-tech.com/images/icon-msg3b18b506527cf1b06d810a1edee387fb.png" />
                        </div>
                        <Field
                          style={{ border: `1px solid ${domain?.theme}` }}
                          as={'textarea'}
                          required
                          className="description"
                          rows={10}
                          name="content"
                          placeholder={
                            isEn
                              ? 'Please enter the content you want to consult'
                              : '请输入您想咨询的内容'
                          }
                        />
                      </div>
                    </label>
                  </div>
                </div>
                <div className="row-form">
                  {size?.width > 580 && (
                    <div className="d-none d-md-block d-sm-block">
                      <div className="form-btn">
                        <button
                          style={{
                            color: domain?.theme,
                            border: `1px solid ${domain?.theme}`,
                          }}
                          type="submit"
                        >
                          {isEn ? `Submit` : '提交咨询'}
                        </button>
                      </div>
                    </div>
                  )}
                  {size?.width <= 580 && (
                    <div className="d-block d-sm-none">
                      <div className="form-btn-sm">
                        <button
                          style={{ backgroundColor: domain?.theme }}
                          type="submit"
                        >
                          {isEn ? `Submit` : '提交咨询'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {size?.width > 580 && (
              <div className="d-none d-md-block d-sm-block">
                <div
                  style={{ color: domain?.theme }}
                  className="text-box wow fadeInDown"
                >
                  {isEn
                    ? `If you want to be our distributor, please email to ${cooperateInfoResult?.pc?.email} and hope for your cooperation.`
                    : `经销加盟联系邮箱${cooperateInfoResult?.pc?.email}，期待与您合作，互利共赢。`}
                </div>
              </div>
            )}
          </Form>
        </Formik>
      </div>
      <div
        style={{ background: '#fff' }}
        className="development-wrapper-storage"
      >
        <Swiper
          slidesPerView={size?.width > 580 ? 3 : 1}
          spaceBetween={40}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          className="history-swiper"
        >
          {cooperateInfoResult?.pc.imageList.map((item: any, index: any) => {
            return (
              <SwiperSlide key={index}>
                <a className="product-box">
                  <div className="product-img">
                    <img src={item} />
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <ShopFooter />
      <Footer />
    </div>
  );
}
