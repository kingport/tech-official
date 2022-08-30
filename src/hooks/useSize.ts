import useResizeObserver from '@react-hook/resize-observer';
import React from 'react';

// 获取设备宽度
export const useSize = (target: any) => {
  const [size, setSize] = React.useState<any>();

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect());
  }, [target]);

  // Where the magic happens
  useResizeObserver(target, (entry: any) => setSize(entry.contentRect));
  return size;
};
