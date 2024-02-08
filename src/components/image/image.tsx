import { useState } from 'react';

import { Preloader } from '@/components';

import * as SC from './image.styled';

interface IImage {
  src: string;
  alt: string;
}

export const Image = ({ src, alt, ...props }: IImage) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <SC.ImgContainer {...props}>
      {isLoading && <Preloader />}
      <img
        src={src}
        alt={alt}
        style={{ display: isLoading ? 'none' : 'block' }}
        onLoad={() => setIsLoading(false)}
      />
    </SC.ImgContainer>
  );
};
