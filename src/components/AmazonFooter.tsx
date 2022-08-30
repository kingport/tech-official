import { Button, Dropdown, Menu } from '@arco-design/web-react';
import { IconFire, IconSend } from '@arco-design/web-react/icon';
import React, { useState } from 'react';
import { useSize } from '../hooks/useSize';
import './amazon.css';
export default function (props: any) {
  const { brandInfoResult, domain } = props;
  const target = React.useRef(null);
  const size = useSize(target);

  return (
    <div ref={target} className="amazon-footer">
      {/* 亚马逊 */}
      <div className="amazon-item">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img className="amazon-img" src={brandInfoResult?.pc?.productIcon} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="description">
              {brandInfoResult?.pc?.productDesc}
            </span>
            <span style={{ color: domain?.theme }} className="price">
              {brandInfoResult?.pc?.price}
            </span>
          </div>
        </div>
        <Dropdown
          position="top"
          trigger={size?.width > 580 ? 'hover' : 'click'}
          droplist={
            <Menu>
              <Menu.Item
                onClick={() => {
                  window.open(brandInfoResult?.pc?.amazonUrl);
                }}
                className="amazon"
                key="1"
              >
                <IconSend
                  style={{
                    color: domain?.theme,
                    fontSize: 32,
                    paddingRight: 10,
                  }}
                />{' '}
                Amazon
              </Menu.Item>
              <Menu.Item
                className="amazon"
                onClick={() => {
                  window.open(brandInfoResult?.pc?.independentUrl);
                }}
                key="2"
              >
                <IconFire
                  style={{
                    color: domain?.theme,
                    fontSize: 32,
                    paddingRight: 10,
                  }}
                />
                Riwuct
              </Menu.Item>
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
            {'BUY NOW'}
          </Button>
        </Dropdown>
      </div>
    </div>
  );
}
