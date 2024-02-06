import { Button } from '@/components';
import { HeroContainer } from './hero.styled';

export const Hero = () => {
  return (
    <HeroContainer>
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Button title='Reserve a Table' />
      </div>
      <img
        src='restauranfood.webp'
        alt='Photo of food serving in Little Lemon'
      />
    </HeroContainer>
  );
};
