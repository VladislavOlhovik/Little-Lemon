import { SVGProps } from 'react';
export const SunSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    id='Layer_1'
    data-name='Layer 1'
    viewBox='0 0 64 64'
    {...props}
  >
    <defs>
      <style>
        {
          '.cls-2{fill:none;stroke:#efcc00;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3px}'
        }
      </style>
    </defs>
    <title />
    <circle
      cx={32}
      cy={32}
      r={17}
      style={{
        fill: '#efcc00',
      }}
    />
    <path
      d='M32 5v6M32 53v6M59 32h-6M11 32H5M51.09 12.91l-4.24 4.24M17.15 46.85l-4.24 4.24M51.09 51.09l-4.24-4.24M17.15 17.15l-4.24-4.24'
      className='cls-2'
    />
  </svg>
);
