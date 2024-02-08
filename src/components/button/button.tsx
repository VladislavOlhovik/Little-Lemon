import * as SC from './button.styled';

interface IButton {
  title: string;
}

export const Button = ({ title }: IButton) => {
  return <SC.ButtonContainer>{title}</SC.ButtonContainer>;
};
