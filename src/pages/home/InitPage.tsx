import React, { useEffect } from 'react';
import { useSize } from '../../hooks/useSize';
import { Player } from 'video-react';

export default function () {
  const target = React.useRef(null);
  const size = useSize(target);
  const playerRef = React.useRef(null);

  return (
    <div
      ref={target}
      style={{
        backgroundImage:
          size?.width > 580
            ? `url(${'https://www.hello-tech.com/en/images/banner-a-en1cfb8768761cd0123a08b1334322788d.png'})`
            : `url(${'https://www.hello-tech.com/en/images/banner-a-en1cfb8768761cd0123a08b1334322788d.png'})`,
      }}
      className="home-init"
    >
      {size?.width > 580 && (
        //  @ts-ignore
        <Player
          ref={playerRef}
          muted
          playsInline
          poster={
            'https://www.hello-tech.com/en/images/banner-a-en1cfb8768761cd0123a08b1334322788d.png'
          }
          autoPlay
          src="https://htoss-online.oss-cn-hangzhou.aliyuncs.com/Jackery36477a56af8da.mp4"
        ></Player>
      )}
    </div>
  );
}
