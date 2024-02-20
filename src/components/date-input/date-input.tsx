import { ChangeEvent } from 'react';

import { todayDate } from '@/utils';

import * as SC from './date-input.styled';

interface IDateInput {
  date: string;
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const DateInput = ({ date, disabled = false, onChange }: IDateInput) => {
  return (
    <SC.DateInputContainer>
      <label htmlFor='dateInput'>Date:</label>
      <input
        type='date'
        id='dateInput'
        value={date}
        disabled={disabled}
        onChange={onChange}
        min={todayDate}
      />
    </SC.DateInputContainer>
  );
};
