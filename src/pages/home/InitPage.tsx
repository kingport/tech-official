import React, { useEffect } from 'react';
import { useSize } from '../../hooks/useSize';
// import { Player } from 'video-react';
import gsap from 'gsap';
import videojs from 'video.js';
import VREPlayer from 'videojs-react-enhanced';
import 'video.js/dist/video-js.css';

export default function () {
  const target = React.useRef(null);
  const size = useSize(target);

  const playerOptions: VREPlayer.IPlayerOptions = {
    src: 'https://htoss-online.oss-cn-hangzhou.aliyuncs.com/Jackery36477a56af8da.mp4',
    controls: false, 
    autoplay: "play",
  };

  const videojsOptions = {
    fluid: true,
    muted: true,
    loop: true
  };

  const hideList = [
    "remainingTimeDisplay",
    "playbackRateMenuButton",
    'progressControl',
  ]

  const resources = {    
    poster: 'https://www.hello-tech.com/en/images/banner-a-en1cfb8768761cd0123a08b1334322788d.png'
  }

  return (
    <div
      ref={target}
      className="home-init"
    >
      {size?.width > 580 && (
        <VREPlayer
          playerOptions={playerOptions}
          videojsOptions={videojsOptions}
          resources={resources}
          onReady={(player) => console.log(player)}
          onPlay={(e, _, second) => console.log('Play!')}
          onPause={(e, _, second) => console.log('Pause!')}
          onEnded={(e, _) => console.log('Ended!')}
          hideList={hideList}
        />
      )}
    </div>
  );
}
