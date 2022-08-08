import React from 'react';
import ShopFooter from '../../../components/ShopFooter';
import './index.css';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Autoplay } from 'swiper';
import { useSize } from '../../../hooks/useSize';
import { useStoreListResult } from '../../../hooks/useStoreListResult';
import { getLanguage } from '../../../utils';
import { Formik, Field, Form } from 'formik';
import { useMutation } from 'react-query';
import { postCooperateSumbit } from '../../../apis';
import { useSnackbar } from 'notistack';
import { useLocation } from 'react-router-dom';
import Footer from '../../../components/Footer';

export default function () {
  const target = React.useRef(null);
  const size = useSize(target);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const location: any = useLocation();

  const { data: storeListResult } = useStoreListResult({
    language: getLanguage(),
    subtitleId: location?.state?.id,
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
      values.companyId = 1;
      await mutation.mutate(values);
      resetForm();
    }
  };

  return (
    <div style={{ paddingTop: '60px' }} ref={target} className="content-main">
      {/* banner图 */}
      <div
        style={{
          background: `url(${`https://www.hello-tech.com/images/banner-contact-a2bf9a217fac14ee0aff88337625f1af2.jpg`}) center/cover no-repeat`,
        }}
        className="com-img"
      >
        {size?.width > 580 && (
          <div className="info-box-dealers">
            <div className="title">商业合作</div>
            <div className="text">
              我们正在全球范围内招经销商和代理商，欢迎你的加入，
              <br />
              请留下你的联系方式，我们会再详细沟通
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
                <div className="form-title wow fadeInDown">
                  欢迎发送邮件或填写下方“咨询表”获取更多信息
                </div>
              </div>
            )}
            {size?.width <= 580 && (
              <div className="d-block d-sm-none">
                <div className="business-header-sm wow fadeInDown">
                  <div className="title">商业合作</div>
                  <div className="subtitle">
                    我们正在全球范围内招经销商和代理商，欢迎你的加入，
                    请留下你的联系方式，我们会再详细沟通。
                  </div>
                </div>
                <div className="business-email-box wow fadeInDown">
                  <div className="email-box">
                    <div className="box">
                      <div className="title">
                        欢迎发送邮件或填写下方“咨询表”获取更多信息
                      </div>
                      <div className="subtitle">
                        经销加盟联系邮箱
                        <br />
                        sales@hello-tech.com
                        <br /> 期待与您合作，互利共赢{' '}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="form-info wow fadeInDown">
              <div className="info-box">
                <div className="row-form row-flex">
                  <div className="form-item">
                    <label>
                      <div className="type">电子邮箱</div>
                      <div className="input">
                        {/* @ts-ignore */}
                        <div className="icon-pos">
                          <img src="https://www.hello-tech.com/images/icon-email32138356288f847c44d6f23c323b0efb.png" />
                        </div>
                        <Field
                          required
                          className="email"
                          name="email"
                          placeholder="请输入您的邮箱"
                        />
                      </div>
                    </label>
                  </div>
                  <div className="form-item">
                    <label>
                      <div className="type">联系电话</div>
                      <div className="input">
                        {/* @ts-ignore */}
                        <div className="icon-pos">
                          <img src="https://www.hello-tech.com/images/icon-tel7e447f4e2eded844b45d0225abdbabfd.png" />
                        </div>
                        <Field
                          required
                          className="phone"
                          name="phone"
                          placeholder="请输入您的电话"
                        />
                      </div>
                    </label>
                  </div>
                </div>
                <div className="row-form">
                  <div className="form-item">
                    <label>
                      <div className="type">咨询内容</div>
                      <div className="input">
                        {/* @ts-ignore */}
                        <div className="icon-pos">
                          <img src="https://www.hello-tech.com/images/icon-msg3b18b506527cf1b06d810a1edee387fb.png" />
                        </div>
                        <Field
                          as={'textarea'}
                          required
                          className="description"
                          rows={10}
                          name="content"
                          placeholder="请输入您想咨询的内容"
                        />
                      </div>
                    </label>
                  </div>
                </div>
                <div className="row-form">
                  {size?.width > 580 && (
                    <div className="d-none d-md-block d-sm-block">
                      <div className="form-btn">
                        <button type="submit">
                          <div className="icon">
                            <img src="https://www.hello-tech.com/images/icon-submit905db2b91e8886c73463d3baac6e8016.png" />
                          </div>
                          提交咨询
                        </button>
                      </div>
                    </div>
                  )}
                  {size?.width <= 580 && (
                    <div className="d-block d-sm-none">
                      <div className="form-btn-sm">
                        <button type="submit">
                          <div className="icon">
                            <img src="https://www.hello-tech.com/images/icon-submit-whited9dba3b183484245df6107d0d3e1a603.png" />
                          </div>
                          提交咨询
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {size?.width > 580 && (
              <div className="d-none d-md-block d-sm-block">
                <div className="text-box wow fadeInDown">
                  经销加盟联系邮箱sales@hello-tech.com，期待与您合作，互利共赢。
                </div>
              </div>
            )}
          </Form>
        </Formik>
      </div>
      {/* 线下门店 */}
      <div
        style={{ background: '#fff' }}
        className="development-wrapper-storage"
      >
        <Swiper
          slidesPerView={size?.width > 580 ? 3 : 1}
          spaceBetween={40}
          modules={[Pagination, Autoplay]}
          // navigation={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          className="history-swiper"
        >
          {storeListResult?.pc.imageList.map((item: any, index) => {
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
      {/* shopFooter */}
      <ShopFooter />
      {/*  */}
      <Footer />
    </div>
  );
}
