import { Button } from '@/components';

import * as SC from './hero.styled';

export const Hero = () => {
  return (
    <SC.HeroContainer>
      <div className='restaurant-info'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Button title='Reserve a Table' />
      </div>
      <SC.HeroImg
        src='restauranfood.webp'
        alt='Photo of food serving in Little Lemon'
      />
    </SC.HeroContainer>
  );
};
