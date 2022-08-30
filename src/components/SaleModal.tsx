import React from 'react';
import { useFieldFormResult } from '../hooks/useFieldFormResult';
import { useWindowResult } from '../hooks/useWindowResult';
import { getLanguage } from '../utils';
import './saleModal.css';
import { Formik, Field, Form } from 'formik';
import { useMutation } from 'react-query';
import { postFormSumbit } from '../apis';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { Message, Modal, Button } from '@arco-design/web-react';
import { useSize } from '../hooks/useSize';
import gsap from 'gsap';
import { IconMinusCircleFill } from '@arco-design/web-react/icon';
import { useCompanyIdResult } from '../hooks/useCompanyIdResult';
import styled from '@emotion/styled';
import Draggable from 'react-draggable';

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
  const size = useSize(target);

  const [open, setOpen] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState<any>(false);

  const handleClickOpen = (e: any) => {
    // e.stopPropagation();
    if (!isDragging) {
      setOpen(true);
    }
  };

  const { data: companyIdResult } = useCompanyIdResult({
    domainName:
      window.location.hostname === 'localhost'
        ? 'test.wangdingkun.xyz'
        : window.location.hostname,
  });

  const { data: windowResult } = useWindowResult({
    language: getLanguage(),
    companyId: companyIdResult?.id,
  });

  const { data: formResult } = useFieldFormResult({
    language: getLanguage(),
    companyId: companyIdResult?.id,
  });

  const [productImg, setProductImg] = React.useState('');
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

    // if(size?.width > 580 ) {
    //   gsap.to('.sale-container', { left: 20, right: 'auto', duration: 0.5 });
    // }else {
    // }
    setProductImg(formResult?.productVoList[0]?.imageUrl);
    setProductId(formResult?.productVoList[0]?.brandId);
  }, [formResult]);

  React.useEffect(() => {
    if (open) {
      gsap.to('.sale-container', { right: -120, duration: 0.5 });

      // if(size?.width > 580 ) {
      // }else {
      //   gsap.to('.sale-container', { right: -120, duration: 0.5 });
      // }
    } else {
      gsap.to('.sale-container', { right: 20, duration: 0.5 });

      // if(size?.width > 580 ) {
      // }else {
      //   gsap.to('.sale-container', { right: 20, duration: 0.5 });
      // }
    }
  }, [open]);

  const eventControl = (event: { type: any }, info: any) => {
    if (event.type === 'mousemove' || event.type === 'touchmove') {
      setIsDragging(true);
    }

    if (event.type === 'mouseup' || event.type === 'touchend') {
      setTimeout(() => {
        setIsDragging(false);
      }, 100);
    }
  };

  return (
    <>
      <div ref={target}>
        <Draggable
          bounds={{ top: -600, left: 0, right: 0, bottom: 0 }}
          handle=".sales-content"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              gsap.to('.sale-container', { right: 20, duration: 0.5 });
              // if(size?.width > 580 ) {
              // }else {
              //   gsap.to('.sale-container', { right: 20, left: 'none',duration: 0.5 });
              // }
            }}
            className="sale-container"
            style={{ background: companyIdResult?.theme }}
          >
            <div className="sales-content">
              <p className="sale-title">{windowResult?.title}</p>
              <p className="sale-percent">{windowResult?.discount}</p>
              <p className="sale-description">sale Ends:</p>
              <p className="sale-description">{windowResult?.saleEnd}</p>
            </div>
            <SaleBtn
              color={companyIdResult?.theme}
              onClick={handleClickOpen}
              className="sale-btn"
            >
              REVEL OFFER
            </SaleBtn>
            <IconMinusCircleFill
              onClick={(e) => {
                e.stopPropagation();
                gsap.to('.sale-container', { right: -120, duration: 0.5 });
                // if(size?.width > 580 ) {
                // }else {
                //   gsap.to('.sale-container', { right: -120,left: 'none', duration: 0.5 });
                // }
              }}
              className="minus"
              style={{ color: '#fff' }}
            />
          </div>
        </Draggable>
      </div>
      <Modal
        visible={open}
        footer={null}
        onCancel={() => {
          setOpen(false);
        }}
        style={{ width: size?.width > 580 ? 'auto' : '90%' }}
      >
        <div className="form-container">
          <div className="form-l">
            <div className="form-header">
              {size?.width > 580 && <img src={formResult?.logoImageUrl} />}
              {size?.width < 580 && productImg && (
                <img
                  style={{ width: '100%', height: '100px' }}
                  src={productImg}
                />
              )}
              <p>
                {
                  formResult?.productVoList.find(
                    (x) => x.brandId * 1 === productId * 1
                  )?.title
                }{' '}
                🎉
              </p>
              {productId && (
                <p style={{ color: companyIdResult?.theme }}>
                  {
                    formResult?.productVoList.find(
                      (x) => x.brandId * 1 === productId * 1
                    ).discount
                  }
                </p>
              )}
              <p>When You Join Our Email List</p>
            </div>
            <div className="form">
              <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form className="form-horizontal">
                  <div className="field" key={'brandId'}>
                    <label
                      className="field-label"
                      htmlFor={'brandId'}
                      style={{ color: companyIdResult?.theme }}
                    >
                      Product*
                    </label>
                    <Field
                      type="text"
                      as="select"
                      className="field-input"
                      name={'brandId'}
                      placeholder=""
                      value={productId}
                      onChange={(e: any) => {
                        const imgurl = formResult?.productVoList.find(
                          (x) => x.brandId * 1 === e.target.value * 1
                        ).imageUrl;
                        setProductImg(imgurl);
                        setProductId(e.target.value);
                      }}
                      required
                    >
                      {formResult?.productVoList?.map((x: any, index: any) => {
                        return (
                          <option key={index} value={x.brandId}>
                            {x.brandName}
                          </option>
                        );
                      })}
                    </Field>
                  </div>
                  {formResult?.fieldList.map(
                    (item: { fieldName: string; fieldKey: string }, index) => {
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
                    Buy on amazon
                  </button>
                  <BuyUrl
                    shape="round"
                    type="primary"
                    onClick={() => {
                      if (formResult?.payUrl) {
                        window.location.href = formResult?.payUrl;
                      }
                    }}
                    className="buy-url"
                    style={{ marginTop: '25px' }}
                    color={companyIdResult?.theme}
                  >
                    Buy on Riwuct
                  </BuyUrl>
                </Form>
              </Formik>
            </div>
          </div>
          {size?.width > 580 && (
            <div className="form-r">
              <img src={productImg} />
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}
