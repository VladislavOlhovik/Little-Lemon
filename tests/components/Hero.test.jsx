import { render, screen } from '@testing-library/react';
import {Hero} from "../../src/components";
import * as SC from 'styled-components';
import { styles } from '@/theme';


const HeroWithTheme = () =>{
    return(
    <SC.ThemeProvider theme={{ styles, theme:'light' }}>
        <Hero />
    </SC.ThemeProvider> 
    )
}

describe('Hero component', () => {
  it('renders headline', () => {
    render(<HeroWithTheme/> );
    expect(screen.getByText(/Little Lemo/)).toBeInTheDocument();
    expect(screen.getByText(/Chicago/)).toBeInTheDocument();
    expect(screen.getByText(/We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist./)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Reserve a Table/ })).toBeInTheDocument();
  });

  it('displays the hero image with correct src and alt attributes', () => {
    render(<HeroWithTheme/>);
    const heroImage = screen.getByAltText('Photo of food serving in Little Lemon');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', 'restauranfood.webp');
  });
});