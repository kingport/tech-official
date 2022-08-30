import React from 'react';
import { useFieldFormResult } from '../hooks/useFieldFormResult';
import { useWindowResult } from '../hooks/useWindowResult';
import { getLanguage } from '../utils';
import './saleModal.css';
import { Formik, Field, Form } from 'formik';
import { useMutation } from 'react-query';
import { postFormSumbit } from '../apis';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { Message, Modal, Button, Select } from '@arco-design/web-react';
import gsap from 'gsap';
import { IconMinusCircleFill } from '@arco-design/web-react/icon';
import { useCompanyIdResult } from '../hooks/useCompanyIdResult';
import styled from '@emotion/styled';
import Draggable from 'react-draggable';
const Option = Select.Option;
export interface State extends SnackbarOrigin {
  openSnackbar: boolean;
}

const SaleBtn = styled.button`
  &:hover {
    color: ${(props) => props.color};
  }
`;
const BuyUrl = styled(Button)`
  &:hover {
    color: ${(props) => props.color};
  }
`;

export default function () {
  const target = React.useRef(null);
  const isEn = getLanguage() === 'en';
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e: any) => {
    setOpen(true);
  };

  const { data: companyIdResult, isLoading: companyLoading } =
    useCompanyIdResult({
      domainName:
        window.location.hostname === 'localhost'
          ? 'test.wangdingkun.xyz'
          : window.location.hostname,
    });

  const { data: windowResult, isLoading } = useWindowResult({
    language: getLanguage(),
    companyId: companyIdResult?.id,
  });

  const { data: formResult, isLoading: formisLoading } = useFieldFormResult({
    language: getLanguage(),
    companyId: companyIdResult?.id,
  });

  const [productImg, setProductImg] = React.useState('');
  const [productH5Img, setProductH5Img] = React.useState('');
  const [productId, setProductId] = React.useState(0);

  const initialValues = () => {
    return {
      first_name: '',
      email: '',
      brandId: '',
    };
  };

  const mutation = useMutation(postFormSumbit, {
    onSuccess: (data: any, variables, context) => {
      if (data.code === 0) {
        Message.success(data.msg);
        if (formResult?.productTurnUrl) {
          window.location.href = formResult?.productTurnUrl;
        }
        setOpen(false);
      } else {
        Message.error(data.msg);
      }
    },
  });

  const onSubmit = async (values: any) => {
    if (values) {
      values.companyId = companyIdResult?.id;
      values.brandId = productId;
      await mutation.mutate(values);
    }
  };

  React.useLayoutEffect(() => {
    gsap.to('.sale-container', { right: 20, duration: 0.5 });
    setProductImg(formResult?.pc?.productVoList[0]?.imageUrl);
    setProductH5Img(formResult?.h5?.productVoList[0]?.imageUrl);
    setProductId(formResult?.pc?.productVoList[0]?.brandId);
  }, [formResult]);

  React.useEffect(() => {
    if (open) {
      gsap.to('.sale-container', { right: -120, duration: 0.5 });
    } else {
      gsap.to('.sale-container', { right: 20, duration: 0.5 });
    }
  }, [open]);

  if (companyLoading) return null;

  return (
    <>
      {
        <div ref={target}>
          <Draggable
            bounds={{ top: -600, left: 0, right: 0, bottom: 0 }}
            handle=".sales-content"
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
                gsap.to('.sale-container', { right: 20, duration: 0.5 });
              }}
              className="sale-container"
              style={{ background: companyIdResult?.theme }}
            >
              <div className="sales-content">
                <p className="sale-title">{windowResult?.pc?.title}</p>
                <p className="sale-percent">{windowResult?.pc?.discount}</p>
                <p className="sale-description">
                  {isEn ? 'sale Ends:' : '销售截止:'}
                </p>
                <p className="sale-description">{windowResult?.pc?.saleEnd}</p>
              </div>
              <SaleBtn
                color={companyIdResult?.theme}
                onClick={handleClickOpen}
                className="sale-btn"
              >
                {isEn ? 'REVEL OFFER' : '狂欢价格'}
              </SaleBtn>
              <IconMinusCircleFill
                onClick={(e) => {
                  e.stopPropagation();
                  gsap.to('.sale-container', { right: -120, duration: 0.5 });
                }}
                className="minus"
                style={{ color: '#fff' }}
              />
            </div>
          </Draggable>
        </div>
      }

      <Modal
        visible={open}
        footer={null}
        onCancel={() => {
          setOpen(false);
        }}
        className="modal-sale"
      >
        <div className="form-container">
          <div className="form-l">
            <div className="form-header">
              <img
                className="logo-image-url"
                src={formResult?.pc?.logoImageUrl}
              />
              <p>
                {
                  formResult?.pc?.productVoList.find(
                    (x: any) => x.brandId * 1 === productId * 1
                  )?.title
                }{' '}
                🎉
              </p>
              {productId && (
                <p style={{ color: companyIdResult?.theme }}>
                  {
                    formResult?.pc?.productVoList.find(
                      (x: any) => x.brandId * 1 === productId * 1
                    ).discount
                  }
                </p>
              )}
              <p>
                {isEn ? 'When You Join Our Email List' : '成为我们尊贵的会员'}
              </p>
            </div>
            {productH5Img && (
              <img
                className="logo-image-url-h5"
                style={{ width: '100%', height: 'auto' }}
                src={productH5Img}
              />
            )}
            <div className="form">
              <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form className="form-horizontal">
                  <div className="field" key={'brandId'}>
                    <label
                      className="field-label"
                      htmlFor={'brandId'}
                      style={{ color: companyIdResult?.theme }}
                    >
                      {isEn ? 'Product*' : '产品*'}
                    </label>
                    <Select
                      // type="text"
                      // as="select"
                      // className="field-input"
                      // name={'brandId'}
                      placeholder=""
                      value={productId}
                      onChange={(value: any) => {
                        const imgurl = formResult?.pc?.productVoList.find(
                          (x: any) => x.brandId * 1 === value * 1
                        ).imageUrl;
                        const imgurlH5 = formResult?.h5?.productVoList.find(
                          (x: any) => x.brandId * 1 === value * 1
                        ).imageUrl;
                        setProductImg(imgurl);
                        setProductH5Img(imgurlH5);
                        setProductId(value);
                      }}
                      // required
                    >
                      {formResult?.pc?.productVoList?.map(
                        (x: any, index: any) => {
                          return (
                            <Option key={index} value={x.brandId}>
                              {x.brandName}
                            </Option>
                          );
                        }
                      )}
                    </Select>
                  </div>
                  {formResult?.pc?.fieldList.map(
                    (
                      item: { fieldName: string; fieldKey: string },
                      index: any
                    ) => {
                      return (
                        <div className="field" key={index}>
                          <label
                            className="field-label"
                            htmlFor={item?.fieldKey}
                            style={{ color: companyIdResult?.theme }}
                          >
                            {item?.fieldName}*
                          </label>
                          <Field
                            type="text"
                            required
                            className="field-input"
                            name={item?.fieldKey}
                            placeholder=""
                          />
                        </div>
                      );
                    }
                  )}
                  <button
                    style={{ background: companyIdResult?.theme }}
                    className="submit-btn"
                    type="submit"
                  >
                    {isEn ? 'Buy on amazon' : '亚马逊购买'}
                  </button>
                  <BuyUrl
                    shape="round"
                    type="primary"
                    onClick={() => {
                      if (formResult?.pc?.payUrl) {
                        window.location.href = formResult?.pc?.payUrl;
                      }
                    }}
                    className="buy-url"
                    style={{ marginTop: '25px' }}
                    color={companyIdResult?.theme}
                  >
                    {isEn ? 'Buy on Riwuct' : 'Riwuct 购买'}
                  </BuyUrl>
                </Form>
              </Formik>
            </div>
          </div>
          <div className="form-r">
            <img src={productImg} />
          </div>
        </div>
      </Modal>
    </>
  );
}
