import { render, screen } from '@testing-library/react';
import {Hero} from "../../src/components";
import {withContext} from '../utils'

const HeroWithContext = withContext(Hero)

describe('Hero component', () => {
  it('renders headline', () => {
    render(<HeroWithContext/> );
    expect(screen.getByText(/Little Lemo/)).toBeInTheDocument();
    expect(screen.getByText(/Chicago/)).toBeInTheDocument();
    expect(screen.getByText(/We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist./)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Reserve a Table/ })).toBeInTheDocument();
  });

  it('displays the hero image with correct src and alt attributes', () => {
    render(<HeroWithContext/>);
    const heroImage = screen.getByAltText('Photo of food serving in Little Lemon');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', 'restauranfood.webp');
  });
});