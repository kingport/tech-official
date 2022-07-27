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
}


export default function () {
  const target = React.useRef(null)
  const size = useSize(target)
  let navigate = useNavigate();

  const {
    data: menusResult,
    isLoading: menusResultLoading,
    isFetching: menusResultFetching,
    refetch: menusResultRefetch
  } = useMenusResult({language: getLanguage(), companyId: 1})


  const navList = [
    {
      id: 1,
      name: 'Home',
      path: '/'
    },
    {
      id: 2,
      name: 'About Us',
      path: '/about'

    },
    {
      id: 3,
      name: 'Brand',
      path: '/'
    }, 
    {
      id: 4,
      name: 'Contact Us',
      path: '/'
    },
  ]

  const jumpToNav = (item: navParams) => {
    // navigate(item?.path);
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
              menusResult?.pc.topTitleVoList.map((nav: navParams) => 
              <div onClick={() => jumpToNav(nav)} className="nav-item nav-item-main" key={nav.id}>
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
              <img src={listBlackIcon} alt="black" />
            </div>
          </div> 
        </div>
      </div>
    </header>
  )
}
