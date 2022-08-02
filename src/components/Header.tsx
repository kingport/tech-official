import React from "react";
import { useNavigate } from "react-router-dom";
import listBlackIcon from '../assets/index-list.png';
import './header.css'
import { useMenusResult } from '../hooks/useMenusResult'
import { useSize } from "../hooks/useSize";
import { getLanguage } from "../utils";


interface navParams {
  id: number, 
  title: string,
  path?: string,
  subjectId?: number
}


export default function () {
  const target = React.useRef(null)
  const size = useSize(target)
  let navigate = useNavigate();
  const [selectId,setSelectId] = React.useState<any>(1)
  
  const {
    data: menusResult,
  } = useMenusResult({language: getLanguage(), companyId: 1})


  const jumpToNav = (item: navParams) => {
    // navigate(item?.path);
    if(item.id === 1) {
      navigate('/')
    }
    if(item.id === 2) {
      navigate('/about')
    }
    if(item.id === 3) {
      navigate('/brand/storage')
    }
    if(item.id === 4) {
      navigate('/contact')
    }
    if(item.subjectId === 11) {
      navigate('/about')
    }
    if(item.subjectId === 12) {
      navigate('/about/honor')
    }
    if(item.subjectId === 13) {
      navigate('/about/quality')

    }
    if(item.subjectId === 14) {
      navigate('/about/responsibility')
    }
    if(item.subjectId === 15) {
      navigate('/about/news')
    }
    if(item.subjectId === 16) {
      navigate('/brand/storage')
    }
    if(item.subjectId === 17) {
      navigate('/brand/solar')
    }
    if(item.subjectId === 18) {
      navigate('/brand/part')
    }
    if(item.subjectId === 19) {
      navigate('/contact')
    }
    if(item.subjectId === 20) {
      navigate('/contact/dealers')
    }
  }

  return (
    <header ref={target} className="header-maim d-none d-md-block d-sm-block index active" style={{position: 'fixed'}}>
      <div className="container-fluid">
        <div className="header-box">
          <div className="header-l">
            <div className="logo">
              <img style={{width: size?.width > 580 ? '200px' : '100px'}} className="navbar-logo" src={size?.width > 580 ? menusResult?.pc?.logoUrl : menusResult?.h5?.logoUrl} />
            </div>
          </div>
          <div className="header-c">
            <div className="nav-box">
              {
                menusResult?.pc?.topTitleVoList?.map((nav: navParams) => 
                <div  onMouseEnter={() => {setSelectId(nav.id)}} onClick={() => jumpToNav(nav)} className="nav-item nav-item-main" key={nav.id}>
                  <span className="nav-item-a">{nav.title}</span>
                </div>)
              }
            </div>
          </div>
          <div className="header-r">
            <div className="nav-box">
              <div className="nav-item">
                <span
                  onClick={() => {
                    localStorage.setItem('lang', 'cn');
                    window.location.reload()
                  }}
                 className="lang">Chinese</span>
                <span>&nbsp;/&nbsp;</span>
                <span 
                  onClick={() => {
                    localStorage.setItem('lang', 'en');
                    window.location.reload()
                  }} 
                className="lang active">English</span>
              </div>
            </div>
            <div className="navbar-toggler">
              <img src={`https://www.hello-tech.com/images/index-list-black68893984245e5e751475bfcb75bd2398.png`} alt="black" />
            </div>
          </div> 
        </div>
      </div>
      {
        selectId !== 1 && size?.width > 580 &&  
          <div onMouseLeave={() => setSelectId(1)} className="children-nav">
          {
            menusResult?.pc.topTitleVoList.find((x:any) => x.id === selectId)?.subtitleVoList?.map((k:any, index:any) => {
              return (
                <div onClick={() => jumpToNav(k)} className="children-title" key={index}>{k.title}</div>
              )
            })
          }
        </div>
      }  
    </header>
  )
}
