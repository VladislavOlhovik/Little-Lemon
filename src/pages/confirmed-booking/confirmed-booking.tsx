import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FocusEvent } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import { Alert, Button, Preloader, SelectInput, TextInput } from '@/components';
import { bookTable, resetAC, useAppDispatch, useAppSelector } from '@/store';

import * as SC from './confirmed-booking.styled';
import { BookSchemaType, bookSchema } from './book-schema';

const prefixOptions = ['Mr', 'Mrs', 'Ms', 'Dr', 'Prof', 'Rev', 'Other'];

export const ConfirmedBooking = () => {
  const dispatch = useAppDispatch();
  const { isLoading, isReserved } = useAppSelector(
    state => state.bookingReducer,
  );
  const { id } = useParams();
  const navigate = useNavigate();
  if (!id) {
    navigate('/book');
  }
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const date = queryParams.get('date');
  const time = queryParams.get('time');
  const numOfPeople = queryParams.get('people');

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm<BookSchemaType>({
    resolver: zodResolver(bookSchema),
    mode: 'onBlur',
  });
  const handleBlur = async (
    event: FocusEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const name = event.target.name as keyof BookSchemaType;
    await trigger(name);
  };

  const onSubmit = (data: BookSchemaType) => {
    if (!date || !time || !numOfPeople || !id) {
      navigate('/book');
      return;
    }
    dispatch(
      bookTable({
        persanalData: data,
        date,
        time,
        tableNumber: +id,
        numOfPeople: +numOfPeople,
      }),
    ).then(() => {
      setTimeout(() => {
        dispatch(resetAC());
        reset();
        navigate('/');
      }, 3000);
    });
  };
  return (
    <SC.ConfirmedBookingContainer>
      {isLoading && (
        <SC.PreloaderContainer>
          <Preloader />
        </SC.PreloaderContainer>
      )}
      {isReserved && <Alert title='Table booked, thank you!!!' />}
      <div className='info'>
        <h2>
          Date and time: {date}, {time}
        </h2>
        <h2>
          Table for {numOfPeople} person(s): <span className='table'>{id}</span>
        </h2>
      </div>
      <h3>
        Reservation form <br />
        fill the form to reserve a table
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SelectInput
          name='prefix'
          options={prefixOptions}
          error={errors.prefix?.message}
          register={register}
          onBlur={handleBlur}
        />
        <TextInput
          name='firstName'
          error={errors.firstName?.message}
          register={register}
          onBlur={handleBlur}
        />
        <TextInput
          name='lastName'
          error={errors.lastName?.message}
          register={register}
          onBlur={handleBlur}
        />
        <TextInput
          name='email'
          type='email'
          error={errors.email?.message}
          register={register}
          onBlur={handleBlur}
        />
        <TextInput
          name='phone'
          error={errors.phone?.message}
          register={register}
          onBlur={handleBlur}
        />
        <Button title='Submit' type='submit' />
      </form>
    </SC.ConfirmedBookingContainer>
  );
};
