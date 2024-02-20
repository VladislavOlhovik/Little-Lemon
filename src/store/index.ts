import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { bookingReducer } from './reducers/booking-reducer.ts';

export const store = configureStore({
  reducer: {
    bookingReducer: bookingReducer.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {
  fetchAvailableTimeOptions,
  fetchAvailableTables,
} from './reducers/booking-reducer.ts';
export const { updateDateAC, updateTimeAC, updatePeopleAC } =
  bookingReducer.actions;
