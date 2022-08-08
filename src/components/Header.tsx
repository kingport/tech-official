import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';
import { useMenusResult } from '../hooks/useMenusResult';
import { useSize } from '../hooks/useSize';
import { getLanguage } from '../utils';
import { Drawer, Menu } from '@arco-design/web-react';
import { Collapse, Divider } from '@arco-design/web-react';
import gsap from 'gsap';
const CollapseItem = Collapse.Item;

interface navParams {
  id?: number;
  title?: string;
  path?: string;
  subjectId?: number;
  subtitleVoList?: any;
}

export default function () {
  const target = React.useRef(null);
  const size = useSize(target);
  let navigate = useNavigate();
  const [selectId, setSelectId] = React.useState<any>(1);
  const [visible, setVisible] = React.useState<any>(false);

  const { data: menusResult } = useMenusResult({
    language: getLanguage(),
    companyId: 1,
  });

  React.useEffect(() => {
    gsap.to('.children-nav', { height: 60, duration: 0.5 });
    if (selectId === 1) {
      gsap.to('.children-nav', { height: 0, duration: 0.5 });
    }
  }, [selectId]);

  const jumpToNav = (item: navParams) => {
    // navigate(item?.path);

    // 一级菜单
    if (item.id === 1) {
      navigate('/', {
        state: {
          id: item.id,
        },
      });
    }
    if (item.id === 2) {
      navigate('/about', {
        state: {
          id: item.subtitleVoList[0].subjectId,
        },
      });
    }
    if (item.id === 3) {
      navigate('/brand/storage', {
        state: {
          id: item.subtitleVoList[0].subjectId,
        },
      });
    }
    if (item.id === 4) {
      navigate('/contact', {
        state: {
          id: item.subtitleVoList[0].subjectId,
        },
      });
    }

    // 二级菜单
    if (item.subjectId === 11) {
      navigate('/about', {
        state: {
          id: item.subjectId,
        },
      });
    }
    if (item.subjectId === 12) {
      navigate('/about/honor', {
        state: {
          id: item.subjectId,
        },
      });
    }
    if (item.subjectId === 13) {
      navigate('/about/quality', {
        state: {
          id: item.subjectId,
        },
      });
    }
    if (item.subjectId === 14) {
      navigate('/about/responsibility', {
        state: {
          id: item.subjectId,
        },
      });
    }
    if (item.subjectId === 15) {
      navigate('/about/news', {
        state: {
          id: item.subjectId,
        },
      });
    }
    if (item.subjectId === 16) {
      navigate('/brand/storage', {
        state: {
          id: item.subjectId,
        },
      });
    }
    if (item.subjectId === 17) {
      navigate('/brand/solar', {
        state: {
          id: item.subjectId,
        },
      });
    }
    if (item.subjectId === 18) {
      navigate('/brand/part', {
        state: {
          id: item.subjectId,
        },
      });
    }
    if (item.subjectId === 19) {
      navigate('/contact/dealers', {
        state: {
          id: item.subjectId,
        },
      });
    }
    if (item.subjectId === 20) {
      navigate('/contact/join', {
        state: {
          id: item.subjectId,
        },
      });
    }
  };

  return (
    <header
      ref={target}
      className="header-maim d-none d-md-block d-sm-block index active"
      style={{ position: 'fixed' }}
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
                  <span className="nav-item-a">{nav.title}</span>
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
                        ? '#ff5b00'
                        : '#000',
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
                        ? '#ff5b00'
                        : '#000',
                  }}
                  className="lang active"
                >
                  English
                </span>
              </div>
            </div>
            <div onClick={() => setVisible(true)} className="navbar-toggler">
              <img
                src={`https://www.hello-tech.com/images/index-list-black68893984245e5e751475bfcb75bd2398.png`}
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
                <div
                  onClick={() => jumpToNav(k)}
                  className="children-title"
                  key={index}
                >
                  {k.title}
                </div>
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
