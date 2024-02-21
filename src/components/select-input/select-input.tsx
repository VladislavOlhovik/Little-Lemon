import { FocusEvent } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { BookSchemaType } from '@/pages/confirmed-booking/book-schema';

import * as SC from './select-input.styled';

interface ISelectInput {
  name: 'prefix';
  options: string[];
  error?: string;
  disabled?: boolean;
  register: UseFormRegister<BookSchemaType>;
  onBlur: (event: FocusEvent<HTMLSelectElement>) => void;
}

export const SelectInput = ({
  name,
  options,
  register,
  error,
  disabled = false,
  onBlur,
}: ISelectInput) => {
  return (
    <SC.SelectInputContainer>
      <label htmlFor={name}>{name}:</label>
      <select id={name} {...register(name)} onBlur={onBlur} disabled={disabled}>
        <option value=''>Select {name}</option>
        {options.map((el, index) => (
          <option key={index} value={el}>
            {el}
          </option>
        ))}
      </select>
      <div>{<span className='error'>{error}</span>}</div>
    </SC.SelectInputContainer>
  );
};
