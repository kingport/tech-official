import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './header.css';
import { useMenusResult } from '../hooks/useMenusResult';
import { useSize } from '../hooks/useSize';
import { getLanguage } from '../utils';
import { Drawer, Menu } from '@arco-design/web-react';
import { Collapse, Divider } from '@arco-design/web-react';
import gsap from 'gsap';
import { useCompanyIdResult } from '../hooks/useCompanyIdResult';
import styled from '@emotion/styled'
import menuIcon from '../assets/menu.png'

const CollapseItem = Collapse.Item;

interface navParams {
  id?: number;
  title?: string;
  path?: string;
  subjectId?: number;
  subtitleVoList?: any;
}

const NavItem = styled.span`
  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 0%;
    height: 3px;
    border-radius: 3px;
    background-color: ${props => (props.color)};
    transition: 0.3s ease;
  }
`

const ChildrenTitle = styled.div`
  &:hover {
    color: ${props => props.color};
  }
`

export default function () {
  const target = React.useRef(null);
  const size = useSize(target);
  let navigate = useNavigate();
  const [selectId, setSelectId] = React.useState<any>(1);
  const [visible, setVisible] = React.useState<any>(false);
  const [isHomePage, setIsHomePage] = React.useState<any>(false);

  const { data: companyIdResult } = useCompanyIdResult({domainName: window.location.hostname === 'localhost' ? "test.wangdingkun.xyz" : window.location.hostname});
  
  const { data: menusResult } = useMenusResult({
    language: getLanguage(),
    companyId: companyIdResult?.id,
  });

  React.useEffect(() => {
    gsap.to('.children-nav', { height: 60, duration: 0.5 });
    if (selectId === 1) {
      gsap.to('.children-nav', { height: 0, duration: 0.5 });
    }
  }, [selectId]);

  const location = useLocation()

  React.useEffect(() => {
    if(location.pathname === '/') { 
      setIsHomePage(true)
    }else {
      setIsHomePage(false)
    }
  }, [location.pathname])  

  const jumpToNav = (item: any) => {
    if(item.subjectId) {
      return navigate(item?.path, {
        state: {
          id: item?.subjectId,
        }
      });
    }

    if(item.id && item.subtitleVoList) {
      return navigate(item?.path, {
        state: {
          id: item?.subtitleVoList[0].subjectId,
        }
      });
    }else {
      return navigate('/', {
        state: {
          id: item?.id,
        }
      });
    }    
  };

  return (
    <header
      ref={target}
      className="header-maim d-none d-md-block d-sm-block index active"
      style={{ position: isHomePage ? 'fixed' : 'relative' }}
    >
      <div className="container-fluid">
        <div className="header-box">
          <div className="header-l">
            <div className="logo">
              <img
                style={{ width: size?.width > 580 ? '200px' : '100px' }}
                className="navbar-logo"
                src={
                  size?.width > 580
                    ? menusResult?.pc?.logoUrl
                    : menusResult?.h5?.logoUrl
                }
              />
            </div>
          </div>
          <div className="header-c">
            <div className="nav-box">
              {menusResult?.pc?.topTitleVoList?.map((nav: navParams) => (
                <div
                  onMouseEnter={() => {
                    setSelectId(nav.id);
                  }}
                  onClick={() => jumpToNav(nav)}
                  className="nav-item nav-item-main"
                  key={nav.id}
                >
                  <NavItem color={companyIdResult?.theme} className="nav-item-a">{nav.title}</NavItem>
                </div>
              ))}
            </div>
          </div>
          <div className="header-r">
            <div className="nav-box">
              <div className="nav-item">
                <span
                  onClick={() => {
                    localStorage.setItem('lang', 'cn');
                    window.location.reload();
                  }}
                  style={{
                    color:
                      localStorage.getItem('lang') === 'cn'
                        ? companyIdResult?.theme
                        : '',
                  }}
                  className="lang"
                >
                  Chinese
                </span>
                <span>&nbsp;/&nbsp;</span>
                <span
                  onClick={() => {
                    localStorage.setItem('lang', 'en');
                    window.location.reload();
                  }}
                  style={{
                    color:
                      localStorage.getItem('lang') === 'en'
                        ? companyIdResult?.theme : ''
                  }}
                  className="lang active"
                >
                  English
                </span>
              </div>
            </div>
            <div onClick={() => setVisible(true)} className="navbar-toggler">
              <img
                src={menuIcon}
                alt="black"
              />
            </div>
          </div>
        </div>
      </div>
      {/* PC 子菜单 */}
      {size?.width > 580 && (
        <div
          onMouseLeave={() => {
            setSelectId(1);
          }}
          className="children-nav"
        >
          {menusResult?.pc.topTitleVoList
            .find((x: any) => x.id === selectId)
            ?.subtitleVoList?.map((k: any, index: any) => {
              return (
                <ChildrenTitle
                  onClick={() => jumpToNav(k)}
                  className="children-title"
                  key={index}
                  color={companyIdResult?.theme}
                >
                  {k.title}
                </ChildrenTitle>
              );
            })}
        </div>
      )}
      {/* H5 子菜单 */}
      <Drawer
        width={'80%'}
        title={<span></span>}
        visible={visible}
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
        footer={null}
      >
        <div className="nav-list">
          <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            style={{ maxWidth: 1180 }}
            onChange={(x) => {
              if (x == '0') {
                setVisible(false);
                jumpToNav({ id: 1 });
              }
            }}
          >
            {menusResult?.pc?.topTitleVoList?.map((x: any, index: any) => {
              return (
                <CollapseItem header={x.title} key={x.id} name={index}>
                  {x?.subtitleVoList?.map((k: any, index: any) => {
                    return (
                      <div key={index}>
                        <div
                          onClick={() => {
                            setVisible(false);
                            jumpToNav(k);
                          }}
                          style={{ minHeight: 40 }}
                        >
                          {k.title}
                        </div>
                        <Divider style={{ margin: '8px 0' }} />
                      </div>
                    );
                  })}
                </CollapseItem>
              );
            })}
          </Collapse>
        </div>
      </Drawer>
    </header>
  );
}
