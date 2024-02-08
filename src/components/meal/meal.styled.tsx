import styled, { keyframes } from 'styled-components';

import { Image } from '@/components';

export const MealContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 22rem;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  background-color: ${({ theme }) =>
    theme.styles.colors[theme.theme].mealsBackground};
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.styles.colors.light.text};

  .meal-info {
    padding: 2rem;
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .meal-info > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .meal-info > div > h2 {
    margin: 0;
  }
  .meal-info > div > p {
    font-weight: ${({ theme }) => theme.styles.typography.fontWeightMedium};
    font-size: ${({ theme }) => theme.styles.typography.fontSizeSmall};
    color: ${({ theme }) => theme.styles.colors[theme.theme].highlighted};
    margin: 0;
  }
  .meal-info > p {
    flex: 1;
    overflow: auto;
  }
`;

export const MealImg = styled(Image)`
  width: 22rem;
  height: 20rem;
  border-radius: 16px 16px 0 0;
`;

const willy = keyframes`
  0%,100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-30deg);
  }
`;

export const LinkContainer = styled.a`
  display: flex;
  position: relative;
  align-items: baseline;
  justify-content: space-between;
  color: inherit;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.styles.typography.fontWeightBold};
  font-size: ${({ theme }) => theme.styles.typography.fontSizeLink};
  &:hover > svg {
    animation: ${willy} 2s ease-in-out infinite;
  }
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    right: 0;
    background-color: black;
    transition: width 3s ease;
  }
  &:hover::after,
  a:focus::after {
    width: 100%;
  }
`;
