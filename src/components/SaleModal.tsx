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

export interface State extends SnackbarOrigin {
  openSnackbar: boolean;
}

export default function() {


  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('lg');

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        enqueueSnackbar(data.msg, {variant: 'success',anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },autoHideDuration: 1000});
        setOpen(false)
      }else {
        enqueueSnackbar(data.msg, {variant: 'error',anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },autoHideDuration: 1000});
      }
    },
  })

  const onSubmit = async (values:any) => {
    if(values) {
      values.companyId = 1
      await mutation.mutate(values)    
    }
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
                  <button className='submit-btn' type="submit">Submit</button>
                </Form>
              </Formik>
            </div>
          </div>
          <div className='form-r'>
            <img src={formResult?.productImageUrl} />
          </div>
        </div>       
      </Dialog>
    </div>
  )
}
