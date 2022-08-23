import { useMemo } from 'react';

export interface SvgIconProps {
  name: string;
  prefix?: string;
  color?: string;
  [props: string]: string | object | undefined;
}

export default function SvgIcon({
  name,
  prefix = 'icon',
  color = '#333',
  ...props
}: SvgIconProps) {
  const symbolId = useMemo(() => `#${prefix}-${name}`, [name]);

  return (
    <svg {...props} aria-hidden="true">
      <use href={symbolId} fill={color} />
    </svg>
  );
}
