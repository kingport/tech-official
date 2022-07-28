import React from 'react';
import { useFieldFormResult } from '../hooks/useFieldFormResult';
import { useWindowResult } from '../hooks/useWindowResult';
import { getLanguage } from '../utils';
import './saleModal.css';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import { Formik, Field, Form, FormikHelpers } from 'formik';


export default function() {

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const [open, setOpen] = React.useState(false);
  const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('lg');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const {
    data: windowResult,
    isLoading: windowResultLoading,
    isFetching: windowResultFetching,
    refetch: windowResultRefetch
  } = useWindowResult({language: getLanguage(), companyId: 1})

  const {
    data: formResult,
    isLoading: formResultLoading,
    isFetching: formResultFetching,
    refetch: formResultRefetch
  } = useFieldFormResult({language: getLanguage(), companyId: 1})

  // 弹窗表单信息
  const renderForm = () => {
    return (
      <form>

      </form>
    )
  }

  return (
    <div>
      <div className="sale-container">
        <div className="sales-content">
          <p className="sale-title">{windowResult?.title}</p>
          <p className="sale-percent">{windowResult?.discount}</p>
          <p className="sale-description">sale Ends:</p>
          <p className="sale-description">{windowResult?.saleEnd}</p>
          <button onClick={handleClickOpen} className="sale-btn">REVEL OFFER</button>
        </div>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth={maxWidth}
        // aria-describedby="alert-dialog-slide-description"
      >
        <div className="form-container">
          <div className="form-l">
            <div className='form-header'>
              <img src='' />
              <p>Take advantage of our Bi-Annual Sale 🎉</p>
              <p>GET YOUR 40% OFF</p>
              <p>When You Join Our Email List</p>
            </div>
            <div className='form'>
              <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                }}
                onSubmit={(
                  values: any,
                  { setSubmitting }: FormikHelpers<Values>
                ) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 500);
                }}
              >
                <Form className="form-horizontal">
                  {
                    formResult?.fieldList.map((item: {
                    fieldName: string,
                    fieldKey: string
                  },index) => {
                      return (
                        <div className='field' key={index}>
                          <label className='field-label' htmlFor="firstName">{item?.fieldName}*</label>
                          <Field className='field-input' id="firstName" name={item?.fieldKey} placeholder="" />
                        </div>
                      )
                    })
                  }
                  <button className='submit-btn' type="submit">Submit</button>
                </Form>
              </Formik>
            </div>
          </div>
          <div className='form-r'>
            <img src='https://d9hhrg4mnvzow.cloudfront.net/bac8b10c9c144ad29131c4204f77c456.pages.ubembed.com/16654b42-f890-4d00-8e1f-72281c21cb86/fbfc3d9b-ic-unbounce-popup_107g0dc000000000000000.jpg' />
          </div>
        </div>       
      </Dialog>
    </div>
  )
}
