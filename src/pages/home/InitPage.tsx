import React, { useEffect } from 'react';
import { useSize } from '../../hooks/useSize';
import VREPlayer from 'videojs-react-enhanced';
import 'video.js/dist/video-js.css';

export default function (props:any) {
  const { video } = props
  const target = React.useRef(null);
  const size = useSize(target);

  const playerOptions: VREPlayer.IPlayerOptions = {
    src: video,
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
      {size?.width > 580 && video &&  (
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
