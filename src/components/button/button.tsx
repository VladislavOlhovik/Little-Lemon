import { ButtonContainer } from './button.styled';

interface IButton {
  title: string;
}

export const Button = ({ title }: IButton) => {
  return <ButtonContainer>{title}</ButtonContainer>;
};
