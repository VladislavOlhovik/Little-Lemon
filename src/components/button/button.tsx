import * as SC from './button.styled';

interface IButton {
  title: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  title = 'clickMe',
  disabled = false,
  onClick,
}: IButton) => {
  return (
    <SC.ButtonContainer disabled={disabled} onClick={onClick}>
      {title}
    </SC.ButtonContainer>
  );
};
