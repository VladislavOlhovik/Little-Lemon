import { SVGProps } from 'react';
export const LemonSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    width={32}
    height={32}
    style={{
      overflow: 'visible',
    }}
    {...props}
  >
    <path
      d='M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.9 0 16 0zm0 29.9C8.3 29.9 2.1 23.7 2.1 16S8.3 2.1 16 2.1 29.9 8.3 29.9 16 23.7 29.9 16 29.9z'
      style={{
        fill: '#fec327',
      }}
    />
    <path
      d='m16.7 16.7 4.4 10.6c2.9-1.3 5-3.5 6.2-6.2l-10.6-4.4zM27.6 11.6 17 16l10.6 4.4c1.1-2.9 1-6 0-8.8zM16.7 15.3l10.6-4.4c-1.3-2.9-3.5-5-6.2-6.2l-4.4 10.6zM16 15l4.4-10.6c-2.9-1.1-6-1-8.8 0L16 15zM15.3 15.3 10.9 4.7c-2.8 1.3-5 3.5-6.2 6.2l10.6 4.4zM16 17l-4.4 10.6c2.9 1.1 6 1 8.8 0L16 17zM4.4 11.6c-1.1 2.9-1 6 0 8.7L15 16 4.4 11.6zM4.7 21.1c1.3 2.8 3.5 5 6.2 6.2l4.4-10.5-10.6 4.3z'
      style={{
        fill: '#fed049',
      }}
    />
  </svg>
);
