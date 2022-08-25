import { Button, Dropdown, Menu,Drawer, Divider } from "@arco-design/web-react";
import React, { useState } from "react";
import './amazon.css'
export default function(props:any) {
  const {brandInfoResult,domain} = props
  const [visible, setVisible] = useState(false);
  const [hasClose, setClose] = useState(true);
  return (
    <div className="amazon-footer">
      {/* 亚马逊 */}
      <div className="amazon-item">
        <div style={{display: 'flex', alignItems: 'center'}}>
          <img className="amazon-img" src={brandInfoResult?.pc?.productIcon} />
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <span className="description">{brandInfoResult?.pc?.productDesc}</span>
            <span style={{color: domain?.theme}} className="price">{brandInfoResult?.pc?.price}</span>
          </div>            
        </div>
        <Dropdown
            droplist={
              <Menu>
                <Menu.Item
                  onClick={() => {
                    window.open(brandInfoResult?.pc?.amazonUrl)
                  }}
                 key='1'>Amazon</Menu.Item>
                <Menu.Item
                  onClick={() => {
                    window.open(brandInfoResult?.pc?.independentUrl)
                  }}
                 key='2'>Riwuct</Menu.Item>
              </Menu>
            }
          >
          <Button shape="round" size="large" style={{background: domain?.theme,marginRight: '100px',fontSize: 20, fontWeight: 'bold'}} type='primary'>{'BUY NOW'}</Button>
        </Dropdown>
      </div>
    </div>
  )
}
