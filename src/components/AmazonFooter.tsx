import { Button, Dropdown, Card,Drawer, Divider } from "@arco-design/web-react";
import React, { useState } from "react";
import './amazon.css'
export default function(props:any) {
  const {brandInfoResult,domain} = props
  const [visible, setVisible] = useState(false);
  const [hasClose, setClose] = useState(true);
  return (
    <div className="amazon-footer">
      {/* 亚马逊 */}
      <Button onClick={() => setVisible(true)} style={{background: domain?.theme}} type='primary'>{'BUY NOW'}</Button>     
      <Drawer
        title={null}
        footer={null}
        closable={hasClose}
        visible={visible}
        placement="bottom"
        height={"auto"}
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
      >
        <Card 
          bordered={false}
          className='card-custom-hover-style'
          onClick={() => {
            window.open(brandInfoResult?.pc?.amazonUrl)
          }}
          hoverable>
          <div className="amazon-item">
            <div>
              <img className="amazon-img" src={brandInfoResult?.pc?.productIcon} />
              <span className="description">{brandInfoResult?.pc?.productDesc}</span>
            </div>
            <span style={{color: domain?.theme}} className="price">{brandInfoResult?.pc?.price}{'(Amazon)'}</span>
          </div>
        </Card>
        <Divider style={{color: domain?.theme}} />
        <Card 
          onClick={() => {
            window.open(brandInfoResult?.pc?.independentUrl)
          }}
          bordered={false}
          className='card-custom-hover-style'
          hoverable>
          <div className="amazon-item">
            <div>
              <img className="amazon-img" src={brandInfoResult?.pc?.productIcon} />
              <span className="description">{brandInfoResult?.pc?.productDesc}</span>
            </div>
            <span style={{color: domain?.theme}} className="price">{brandInfoResult?.pc?.price}{'(Independent)'}</span>
          </div>
        </Card>
      </Drawer>
    </div>
  )
}
