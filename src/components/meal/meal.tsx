import { ScooterSvg } from '@/icons';

import * as SC from './meal.styled';

interface IMeal {
  img: string;
  title: string;
  price: string;
  description: string;
}

export const Meal = ({ img, title, price, description }: IMeal) => {
  return (
    <SC.MealContainer>
      <SC.MealImg src={img} alt={title} />
      <div className='meal-info'>
        <div>
          <h2>{title}</h2>
          <p>${price}</p>
        </div>
        <p>{description}</p>
        <SC.LinkContainer href={''}>
          Oreder a Delivery
          <ScooterSvg />
        </SC.LinkContainer>
      </div>
    </SC.MealContainer>
  );
};
