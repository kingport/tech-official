import React from "react";
import { useNavigate } from "react-router-dom";
import useResizeObserver from '@react-hook/resize-observer'
import logoEn from '../assets/logo-en.png'
import logoMain from '../assets/logo-main.png'
import listBlackIcon from '../assets/index-list.png';
import './header.css'


interface navParams {
  name: string;
  id: number;
  path: string;
}

const useSize = (target: any) => {
  const [size, setSize] = React.useState<any>()

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect())
  }, [target])

  // Where the magic happens
  useResizeObserver(target, (entry:any) => setSize(entry.contentRect))
  return size
}

export default function () {
  const target = React.useRef(null)
  const size = useSize(target)
  let navigate = useNavigate();

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
<<<<<<< HEAD
=======
    {
      id: 5,
      name: 'Welcome to join',
      path: '/'
    }
>>>>>>> 963af57ec4ae067476b819ae3f117ceff15ab7d3
  ]

  const jumpToNav = (item: navParams) => {
    navigate(item.path);
  }

  return (
    <header ref={target} className="header-maim d-none d-md-block d-sm-block index active" style={{position: 'fixed'}}>
      <div className="container-fluid">
        <div className="header-box">
          <div className="header-l">
            <div className="logo">
              <img style={{width: size?.width > 580 ? '200px' : '100px'}} className="navbar-logo" src={size?.width > 580 ? logoEn : logoMain} />
            </div>
          </div>
          <div className="header-c">
            <div className="nav-box">
            {
              navList.map((nav,index) => 
              <div onClick={() => jumpToNav(nav)} className="nav-item nav-item-main" key={nav.id}>
                <span className="nav-item-a">{nav.name}</span>
              </div>)
            }
            </div>
          </div>
          <div className="header-r">
            <div className="nav-box">
              <div className="nav-item">
                <span className="lang">Chinese</span>
                <span>&nbsp;/&nbsp;</span>
                <span className="lang active">English</span>
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
