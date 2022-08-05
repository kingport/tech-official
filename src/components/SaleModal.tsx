import React from 'react';
import { useFieldFormResult } from '../hooks/useFieldFormResult';
import { useWindowResult } from '../hooks/useWindowResult';
import { getLanguage } from '../utils';
import './saleModal.css';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import { Formik, Field, Form } from 'formik';
import { useMutation } from 'react-query';
import { postFormSumbit } from '../apis';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { useSnackbar } from 'notistack';
import { Message, Modal } from '@arco-design/web-react';
import { useSize } from '../hooks/useSize';
import gsap from 'gsap'

export interface State extends SnackbarOrigin {
  openSnackbar: boolean;
}

export default function() {
  const target = React.useRef(null)
  const size = useSize(target)

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const {
    data: windowResult
  } = useWindowResult({language: getLanguage(), companyId: 1})

  const {
    data: formResult
  } = useFieldFormResult({language: getLanguage(), companyId: 1})

  const initialValues = () => {
    return {
    }
  }

  const mutation = useMutation(postFormSumbit, {
    onSuccess: (data:any, variables, context) => {
      if(data.code === 0) {   
        Message.success(data.msg)
        if(formResult?.productTurnUrl) {
          window.location.href = formResult?.productTurnUrl
        }
        setOpen(false)
      }else {
        Message.error(data.msg)
      }
    },
  })

  const onSubmit = async (values:any) => {
    if(values) {
      values.companyId = 1
      await mutation.mutate(values)    
    }
  }

  React.useLayoutEffect(() => {
    gsap.to('.sale-container', {right: 20, duration: 0.5})  
  }, [])

  return (
    <div ref={target}>
      <div className="sale-container">
        <div className="sales-content">
          <p className="sale-title">{windowResult?.title}</p>
          <p className="sale-percent">{windowResult?.discount}</p>
          <p className="sale-description">sale Ends:</p>
          <p className="sale-description">{windowResult?.saleEnd}</p>
          <button onClick={handleClickOpen} className="sale-btn">REVEL OFFER</button>
        </div>
      </div>
      <Modal
        visible={open}
        footer={null}
        onCancel={() => {
          setOpen(false);
        }}
        style={{width: size?.width > 580 ? 'auto' : '90%'}}
      >
        <div className="form-container">
          <div className="form-l">
            <div className='form-header'>
              <img src={formResult?.logoImageUrl} />
              <p>{formResult?.title} 🎉</p>
              <p>{formResult?.discount}</p>
              <p>When You Join Our Email List</p>
            </div>
            <div className='form'>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
              >
                <Form className="form-horizontal">
                  {
                    formResult?.fieldList.map((item: {fieldName: string,fieldKey: string},index) => {
                      return (
                        <div className='field' key={index}>
                          <label className='field-label' htmlFor="firstName">{item?.fieldName}*</label>
                          <Field required className='field-input' id="firstName" name={item?.fieldKey} placeholder="" />
                        </div>
                      )
                    })
                  }
                  <button className='submit-btn' type="submit">TAKE ME TO MY OFFER!</button>
                  <a onClick={() => {
                    if(formResult?.payUrl) {
                      window.location.href = formResult?.payUrl
                    }
                  }} className='buy-url' style={{marginTop: '25px'}}>No Thanks, I Want To Pay Full Price</a>
                </Form>
              </Formik>
            </div>
          </div>
          {
            size?.width > 580 && 
            <div className='form-r'>
              <img src={formResult?.productImageUrl} />
            </div>
          }
        </div>
      </Modal>
    </div>
  )
}
