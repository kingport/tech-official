import React from "react";
import { useSize } from "../hooks/useSize";
import './shopFooter.css'

export default function () {
  const target = React.useRef(null)
  const size = useSize(target)
  
  return (
   <div ref={target} className="footer-main">
    {
      size?.width  > 580 &&  
      <div className="d-none d-md-block d-sm-block">
          <div className="mall-wrapper">
              <div className="container">
                  <div className="mall-box">
                      <div className="mall-l">
                          <div className="make-box">
                              <div className="make-item">
                                  <div className="make-a-box">
                                      <a
                                          className="make-a d-none d-md-block d-sm-block"
                                          href="http://www.dx2.cn"
                                          target="_blank">
                                          <div className="logo-item"><img src="https://www.hello-tech.com/images/dxe-logo861a0c79b129250e485699e58e6ea87a.png" alt=""/></div>
                                      </a>
                                      <a
                                          className="make-a"
                                          href="https://dxpower.tmall.com/shop/view_shop.htm?spm=a1z0k.6846577.1130980037.d4919817.751237de2SHZi7&amp;shop_id=65667358"
                                          target="_blank">
                                          <div className="img tmall-img"></div>
                                          <span>天猫旗舰店</span>
                                      </a>
                                      <a
                                          className="make-a"
                                          href="https://mall.jd.com/index-962137.html"
                                          target="_blank">
                                          <div className="img jd-img"></div>
                                          <span>京东旗舰店</span>
                                      </a>
                                      <div className="make-a d-block d-sm-none">
                                          <div className="qrcode-box"><img src="" alt=""/></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="mall-r">
                          <div className="footer-logo">
                              <div className="logo-item d-block d-sm-none">
                                  <a href="http://www.dx2.cn" target="_blank"><img src="https://www.hello-tech.com/images/jackery-logo0bf0f38cddab4b996df749e7ecdf3792.png" alt=""/></a>
                              </div>
                              <div className="logo-item">
                                  <a href="https://www.jackery.com" target="_blank"><img src="/images/jackery-logo0bf0f38cddab4b996df749e7ecdf3792.png" alt=""/></a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="make-box">
                      <div className="make-item d-none d-md-block d-sm-block">
                          <div className="qrcode-box"><img src="https://www.hello-tech.com/images/qrcode5f31645ac121c20b294150c7ba68228f.png" alt=""/></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    }
    {
      size?.width <= 580 && 
      <div className="d-block d-sm-none">
        <div className="mall-wrapper-sm">
          <div className="mall-box-sm">
            <div className="make-item-sm">
              <div className="make-a-box">
                <a className="make-a-sm" href="http://www.dx2.cn" target="_blank">
                    <div className="logo-item-sm"><img src="https://www.hello-tech.com/images/dxe-logo861a0c79b129250e485699e58e6ea87a.png" alt=""/></div>
                </a>
                <a
                  className="make-a-sm"
                  href="https://dxpower.tmall.com/shop/view_shop.htm?spm=a1z0k.6846577.1130980037.d4919817.751237de2SHZi7&amp;shop_id=65667358"
                  target="_blank">
                  <img src="https://www.hello-tech.com/images/tmall0285dc995f14995d93cc212518e28f43.png" alt="" />
                    <span>天猫旗舰店</span>
                </a>
                    <a
                        className="make-a-sm"
                        href="https://mall.jd.com/index-962137.html"
                        target="_blank">
                        <img src="https://www.hello-tech.com/images/jd7e537e8d003ae3a5fd195050f4d58526.png" alt="" />
                            <span>京东旗舰店</span>
                        </a>
                    </div>
                  </div>
                    <div className="footer-logo-sm">
                        <div className="logo-item">
                            <a href="" target="_blank"><img src="https://www.hello-tech.com/images/qrcode5f31645ac121c20b294150c7ba68228f.png" alt=""/></a>
                        </div>
                        <div className="logo-item">
                            <a href="https://www.jackery.com" target="_blank"><img src="https://www.hello-tech.com/images/jackery-logo0bf0f38cddab4b996df749e7ecdf3792.png" alt=""/></a>
                        </div>
                    </div>
          </div>
        </div>
      </div>
    }
  </div>
  )
}
