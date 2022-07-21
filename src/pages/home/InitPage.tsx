import React, { useEffect } from "react";
import { useSize } from "../../hooks/useSize";
import homeInitBg from '../../assets/home/banner-init.png'
import homeInitMBg from '../../assets/home/banner-init-m.jpeg'
import { Player,ControlBar,VolumeMenuButton } from 'video-react';
// import VideoJS from './Video'

export default function() {
  const target = React.useRef(null)
  const size = useSize(target)
  const playerRef = React.useRef(null);

  return (
    <div ref={target} style={{backgroundImage: size?.width > 580 ? `url(${homeInitBg})` : `url(${homeInitMBg})`}} className="home-init">               
      {
        size?.width > 580 && 
        //  @ts-ignore 
        <Player
          ref={playerRef}
          playsInline
          poster={homeInitBg}
          autoPlay
          src="https://htoss-online.oss-cn-hangzhou.aliyuncs.com/Jackery36477a56af8da.mp4" 
        >           
        </Player>
      }
      {/* <VideoJS options={videoJsOptions} onReady={handlePlayerReady} /> */}
    </div>
  )
}
