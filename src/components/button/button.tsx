import * as SC from './button.styled';

interface IButton {
  title?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  title = 'clickMe',
  disabled = false,
  type = 'button',
  onClick,
}: IButton) => {
  return (
    <SC.ButtonContainer disabled={disabled} type={type} onClick={onClick}>
      {title}
    </SC.ButtonContainer>
  );
};
