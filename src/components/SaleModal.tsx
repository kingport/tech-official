import React from 'react';
import { useFieldFormResult } from '../hooks/useFieldFormResult';
import { useWindowResult } from '../hooks/useWindowResult';
import { getLanguage } from '../utils';
import './saleModal.css';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

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

            </div>
          </div>
          <div className='form-r'>
            <img src='' />
          </div>
        </div>       
      </Dialog>
    </div>
  )
}
