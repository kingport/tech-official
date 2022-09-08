import React from 'react';
import videojs from 'video.js';
import VREPlayer from 'videojs-react-enhanced';
import 'video.js/dist/video-js.css';
import videoPoster from './video.jpg';
export default function (props: any) {
  const { video, poster } = props;
  const target = React.useRef(null);
  const [options, setOptions] = React.useState<VREPlayer.IPlayerOptions>({
    src: video,
    controls: false,
    // autoplay: 'play',
  });

  // const playerOptions: VREPlayer.IPlayerOptions = options

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
    poster: videoPoster,
  };

  return (
    <div ref={target} className="home-init">
      <VREPlayer
        playerOptions={options}
        videojsOptions={videojsOptions}
        resources={resources}
        onReady={(player) => {
          console.log('onReady');
          setTimeout(() => {
            player.play();
          }, 500);
        }}
        onPlay={(e, _, second) => {
          console.log('onPlay');
        }}
        onPause={(e, _, second) => {}}
        onEnded={(e, _) => {}}
        hideList={hideList}
      />
    </div>
  );
}
