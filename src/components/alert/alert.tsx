import * as SC from './alert.styled';

interface IAlert {
  title: string;
}

export const Alert = ({ title }: IAlert) => {
  return (
    <SC.AlertContainer>
      <div>
        <h2>{title}</h2>
      </div>
    </SC.AlertContainer>
  );
};
