import { Button, Meal } from '@/components';

import * as SC from './highlights.styled';

const meals = [
  {
    title: 'Greek salad',
    description:
      'The famouse greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    price: '12.99',
    img: 'greek salad.webp',
  },
  {
    title: 'Bruchetta',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil',
    price: '5.99',
    img: 'bruschetta.webp',
  },
  {
    title: 'Lemmon Dessert',
    description: `This comes strait from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined`,
    price: '5.00',
    img: 'lemon dessert.webp',
  },
];

export const Highlights = () => {
  return (
    <SC.HighlightsContainer>
      <div className='highlights-title'>
        <h2>This weeks specials!</h2>
        <Button title='Online Menu' />
      </div>
      <div className='meals-container'>
        {meals.map(el => {
          return <Meal key={el.title} {...el} />;
        })}
      </div>
    </SC.HighlightsContainer>
  );
};
