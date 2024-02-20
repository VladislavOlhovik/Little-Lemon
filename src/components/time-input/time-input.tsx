import { ChangeEvent } from 'react';

import * as SC from './time-input.styled';

interface ITimeInput {
  time: string[];
  selectedTime: string;
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const TimeInput = ({
  time,
  selectedTime,
  disabled = false,
  onChange,
}: ITimeInput) => {
  return (
    <SC.TimeInputContainer>
      <label htmlFor='time'>Time:</label>
      <select
        id='time'
        disabled={disabled}
        value={selectedTime}
        onChange={onChange}
      >
        <option value=''>Select Time</option>
        {time.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>
    </SC.TimeInputContainer>
  );
};
