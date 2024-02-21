import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { APIService } from '@/API';

import {
  AvailableDatesType,
  AvailableTablesType,
  BookTableType,
  BookingState,
  ReservationDetails,
} from '../types';

export const initialState: BookingState = {
  initData: {
    selectedTime: '',
    selectedDate: '',
    selectedNumOfPeople: 0,
    timeOptions: [],
  },
  bookingData: {
    tables: [],
    time: '',
    date: '',
    numOfPeople: null,
  },
  isLoading: false,
  isReserved: false,
};

export const fetchAvailableTimeOptions = createAsyncThunk(
  'get/fetchAvailableTimeOptions',
  async (date: string) => {
    const response = APIService.getAvailableTimeOptions(date);
    return response;
  },
);
export const fetchAvailableTables = createAsyncThunk(
  'get/fetchAvailableTables',
  async ({
    selectedDate,
    selectedTime,
    selectedNumOfPeople,
  }: ReservationDetails) => {
    const response = APIService.getAvailableTables(
      selectedDate,
      selectedTime,
      selectedNumOfPeople,
    );
    return response;
  },
);
export const bookTable = createAsyncThunk(
  'post/bookTable',
  async (data: BookTableType) => {
    const response = APIService.bootTable(data);
    return response;
  },
);

export const bookingReducer = createSlice({
  name: 'booking-reducer',
  initialState,
  reducers: {
    updateDateAC: (state, action: PayloadAction<string>) => {
      state.initData.selectedDate = action.payload;
      if (state.bookingData.numOfPeople !== null) {
        state.bookingData = initialState.bookingData;
      }
    },
    updateTimeAC: (state, action: PayloadAction<string>) => {
      state.initData.selectedTime = action.payload;
      if (state.bookingData.numOfPeople !== null) {
        state.bookingData = initialState.bookingData;
      }
    },
    updatePeopleAC: (state, action: PayloadAction<number>) => {
      state.initData.selectedNumOfPeople = action.payload;
      if (state.bookingData.numOfPeople !== null) {
        state.bookingData = initialState.bookingData;
      }
    },
    resetAC: state => {
      state.initData = initialState.initData;
      state.bookingData = initialState.bookingData;
      state.isReserved = initialState.isReserved;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAvailableTimeOptions.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        fetchAvailableTimeOptions.fulfilled,
        (state, action: PayloadAction<AvailableDatesType>) => {
          state.isLoading = false;
          state.initData.timeOptions = action.payload.timeOptions;
          state.bookingData.date = action.payload.selectedDate;
          state.initData.selectedDate = action.payload.selectedDate;
        },
      )
      .addCase(fetchAvailableTables.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        fetchAvailableTables.fulfilled,
        (state, action: PayloadAction<AvailableTablesType>) => {
          state.isLoading = false;
          state.bookingData = { ...state.bookingData, ...action.payload };
        },
      )
      .addCase(bookTable.pending, state => {
        state.isLoading = true;
      })
      .addCase(bookTable.fulfilled, state => {
        state.isLoading = false;
        state.isReserved = true;
      });
  },
});
