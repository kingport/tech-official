import { Avatar, Button, Dropdown, Menu } from '@arco-design/web-react';
import { IconFire, IconSend } from '@arco-design/web-react/icon';
import React, { useState } from 'react';
import { useSize } from '../hooks/useSize';
import './amazon.css';
import gsap from 'gsap';
import { getLanguage } from '../utils';

export default function (props: any) {
  const { brandInfoResult, domain } = props;
  const target = React.useRef(null);
  const size = useSize(target);
  const isEn = getLanguage() === 'en';

  React.useEffect(() => {
    gsap.to('.amazon-footer', { bottom: 0, duration: 1 });
  }, []);

  return (
    <div ref={target} className="amazon-footer">
      {/* 亚马逊 */}
      <div className="amazon-item">
        <div style={{ paddingRight: '32px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              className="amazon-img"
              src={brandInfoResult?.pc?.productIcon}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="description">
                {brandInfoResult?.pc?.productDesc}
              </span>
              <span style={{ color: domain?.theme }} className="price">
                {brandInfoResult?.pc?.price}
              </span>
            </div>
          </div>
        </div>
        <Dropdown
          position="top"
          trigger={size?.width > 580 ? 'hover' : 'click'}
          droplist={
            <Menu>
              {brandInfoResult?.pc?.brandButtonVoList.map(
                (x: any, index: any) => {
                  return (
                    <Menu.Item
                      onClick={() => {
                        window.open(x.turnUrl);
                      }}
                      className="amazon"
                      key={index}
                    >
                      <Avatar size={32}>
                        <img
                          style={{ width: '100%', height: '100%' }}
                          alt="avatar"
                          src={x?.buttonUrl}
                        />
                      </Avatar>
                      &nbsp;
                      {x?.buttonDesc}
                    </Menu.Item>
                  );
                }
              )}
            </Menu>
          }
        >
          <Button
            className={'buy-now'}
            shape="round"
            size="large"
            style={{ background: domain?.theme, fontWeight: 'bold' }}
            type="primary"
          >
            {isEn ? 'BUY NOW' : '购买'}
          </Button>
        </Dropdown>
      </div>
    </div>
  );
}
