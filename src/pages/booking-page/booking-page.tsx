import { ChangeEvent, useEffect } from 'react';

import {
  Button,
  DateInput,
  PeopleInput,
  TablesMap,
  TimeInput,
} from '@/components';
import {
  fetchAvailableTimeOptions,
  updateDateAC,
  updatePeopleAC,
  updateTimeAC,
  useAppDispatch,
  useAppSelector,
  fetchAvailableTables,
} from '@/store';
import { todayDate } from '@/utils';

import * as SC from './booking-page.styled';

export const BookingPage = () => {
  const {
    bookingData: { date, numOfPeople, tables, time },
    initData: { selectedDate, selectedNumOfPeople, selectedTime, timeOptions },
    isLoading,
  } = useAppSelector(state => state.bookingReducer);

  const getTablesHandler = () => {
    dispatch(
      fetchAvailableTables({ selectedDate, selectedTime, selectedNumOfPeople }),
    );
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      fetchAvailableTimeOptions(selectedDate === '' ? todayDate : selectedDate),
    );
  }, [selectedDate]);

  return (
    <SC.BookingPageContainer>
      <h2>SELECT DATE AND TIME FOR YOUR RESERVATION</h2>
      <div className='inputBlock'>
        <DateInput
          date={selectedDate === '' ? date : selectedDate}
          disabled={isLoading}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            dispatch(updateDateAC(event.target.value));
          }}
        />
        <TimeInput
          time={timeOptions}
          selectedTime={selectedTime}
          disabled={isLoading}
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            dispatch(updateTimeAC(event.target.value));
          }}
        />
        <PeopleInput
          peopleCount={selectedNumOfPeople}
          disabled={isLoading}
          onChange={(count: number) => {
            dispatch(updatePeopleAC(count));
          }}
        />
        <Button
          disabled={
            isLoading || selectedNumOfPeople === 0 || selectedTime === ''
          }
          title='Check Availability'
          onClick={getTablesHandler}
        />
      </div>
      <article>
        <div className='details-container'>
          {!!tables.length ? (
            <>
              <h3>
                Available tables for {numOfPeople} person(s) on {date} at {time}
                .
              </h3>
              <h3>click on an available table to book it</h3>
            </>
          ) : (
            <h3>Click Check Availability</h3>
          )}
        </div>
        <TablesMap />
      </article>
    </SC.BookingPageContainer>
  );
};
