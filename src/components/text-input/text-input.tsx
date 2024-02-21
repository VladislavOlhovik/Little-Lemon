import { FocusEvent } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { BookSchemaType } from '@/pages/confirmed-booking/book-schema';

import * as SC from './text-input.styled';

interface ITextInput {
  name: keyof BookSchemaType;
  error?: string;
  type?: string;
  disabled?: boolean;
  register: UseFormRegister<BookSchemaType>;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
}

export const TextInput = ({
  name,
  register,
  error,
  type = 'text',
  disabled = false,
  onBlur,
}: ITextInput) => {
  return (
    <SC.TextInputContainer>
      <label htmlFor={name}>{name}:</label>
      <input
        id={name}
        type={type}
        {...register(name)}
        onBlur={onBlur}
        disabled={disabled}
      />
      <div>{error && <span className='error'>{error}</span>}</div>
    </SC.TextInputContainer>
  );
};
