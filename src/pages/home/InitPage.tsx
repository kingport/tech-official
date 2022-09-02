import React from 'react';
import { useSize } from '../../hooks/useSize';
import VREPlayer from 'videojs-react-enhanced';
import 'video.js/dist/video-js.css';

export default function (props: any) {
  const { video, poster } = props;
  const target = React.useRef(null);
  const size = useSize(target);

  const playerOptions: VREPlayer.IPlayerOptions = {
    src: video,
    controls: false,
    autoplay: 'play',
  };

  const videojsOptions = {
    fluid: true,
    muted: true,
    loop: true,
  };

  const hideList = [
    'remainingTimeDisplay',
    'playbackRateMenuButton',
    'progressControl',
  ];

  const resources = {
    poster: poster,
  };

  return (
    <div ref={target} className="home-init">
      {size?.width > 580 && video && (
        <VREPlayer
          playerOptions={playerOptions}
          videojsOptions={videojsOptions}
          resources={resources}
          onReady={(player) => {}}
          onPlay={(e, _, second) => {}}
          onPause={(e, _, second) => {}}
          onEnded={(e, _) => {}}
          hideList={hideList}
        />
      )}
    </div>
  );
}
