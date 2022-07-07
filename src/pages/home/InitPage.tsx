import React from "react";
import { useSize } from "../../hooks/useSize";
import homeInitBg from '../../assets/home/banner-init.png'
import homeInitMBg from '../../assets/home/banner-init-m.jpeg'
export default function() {
  const target = React.useRef(null)
  const size = useSize(target)

  return (
    <div ref={target} style={{backgroundImage: size?.width > 580 ? `url(${homeInitBg})` : `url(${homeInitMBg})`}} className="home-init">      
    </div>
  )
}
