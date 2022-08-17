import React from 'react';
import { useFieldFormResult } from '../hooks/useFieldFormResult';
import { useWindowResult } from '../hooks/useWindowResult';
import { getLanguage } from '../utils';
import './saleModal.css';
import { Formik, Field, Form } from 'formik';
import { useMutation } from 'react-query';
import { postFormSumbit } from '../apis';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { Message, Modal } from '@arco-design/web-react';
import { useSize } from '../hooks/useSize';
import gsap from 'gsap';
import { IconMinusCircleFill } from '@arco-design/web-react/icon';
import { useCompanyIdResult } from '../hooks/useCompanyIdResult';

export interface State extends SnackbarOrigin {
  openSnackbar: boolean;
}

export default function () {
  const target = React.useRef(null);
  const size = useSize(target);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const { data: companyIdResult, isLoading: companyIdResultLoading } = useCompanyIdResult({domainName: window.location.hostname === 'localhost' ? "test.wangdingkun.xyz" : window.location.hostname});

  const { data: windowResult } = useWindowResult({
    language: getLanguage(),
    companyId: companyIdResult,
  });

  const { data: formResult } = useFieldFormResult({
    language: getLanguage(),
    companyId: companyIdResult,
  });

  const initialValues = () => {
    return {
      first_name: '',
      email: '',
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
      values.companyId = 1;
      await mutation.mutate(values);
    }
  };

  React.useLayoutEffect(() => {
    gsap.to('.sale-container', { right: 20, duration: 0.5 });
  }, []);

  return (
    <div ref={target}>
      <div
        onClick={(e) => {
          e.stopPropagation();
          gsap.to('.sale-container', { right: 20, duration: 0.5 });
        }}
        className="sale-container"
      >
        <div className="sales-content">
          <p className="sale-title">{windowResult?.title}</p>
          <p className="sale-percent">{windowResult?.discount}</p>
          <p className="sale-description">sale Ends:</p>
          <p className="sale-description">{windowResult?.saleEnd}</p>
          <button onClick={handleClickOpen} className="sale-btn">
            REVEL OFFER
          </button>
        </div>
        <IconMinusCircleFill
          onClick={(e) => {
            e.stopPropagation();
            gsap.to('.sale-container', { right: -120, duration: 0.5 });
          }}
          className="minus"
          style={{ color: '#fff' }}
        />
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
              <img src={formResult?.logoImageUrl} />
              <p>{formResult?.title} 🎉</p>
              <p>{formResult?.discount}</p>
              <p>When You Join Our Email List</p>
            </div>
            <div className="form">
              <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form className="form-horizontal">
                  {formResult?.fieldList.map(
                    (item: { fieldName: string; fieldKey: string }, index) => {
                      return (
                        <div className="field" key={index}>
                          <label
                            className="field-label"
                            htmlFor={item?.fieldKey}
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
                  <button className="submit-btn" type="submit">
                    TAKE ME TO MY OFFER!
                  </button>
                  <a
                    onClick={() => {
                      if (formResult?.payUrl) {
                        window.location.href = formResult?.payUrl;
                      }
                    }}
                    className="buy-url"
                    style={{ marginTop: '25px' }}
                  >
                    No Thanks, I Want To Pay Full Price
                  </a>
                </Form>
              </Formik>
            </div>
          </div>
          {size?.width > 580 && (
            <div className="form-r">
              <img src={formResult?.productImageUrl} />
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
