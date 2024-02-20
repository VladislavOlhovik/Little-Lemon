import {bookingReducer, initialState} from '../../src/store/reducers/booking-reducer'
import  {
  updateDateAC,
  updateTimeAC,
  updatePeopleAC,
  fetchAvailableTimeOptions,
  fetchAvailableTables
} from '@/store';

describe('bookingReducer', () => {
  it('should return the initial state when no action is provided', () => {
    const nextState = bookingReducer.reducer(initialState, {});
    expect(nextState).toEqual(initialState);
  });

  it('should handle updateDateAC', () => {
    const testDate = '2023-01-01';
    const nextState = bookingReducer.reducer(initialState, updateDateAC(testDate));
    expect(nextState.initData.selectedDate).toBe(testDate);
    expect(nextState.bookingData).toEqual(initialState.bookingData);
  });

  it('should handle updateTimeAC', () => {
    const testTime = '12:00';
    const nextState = bookingReducer.reducer(initialState, updateTimeAC(testTime));
    expect(nextState.initData.selectedTime).toBe(testTime);
    expect(nextState.bookingData).toEqual(initialState.bookingData);
  });

  it('should handle updatePeopleAC', () => {
    const testNumOfPeople = 4;
    const nextState = bookingReducer.reducer(
      initialState,
      updatePeopleAC(testNumOfPeople),
    );
    expect(nextState.initData.selectedNumOfPeople).toBe(testNumOfPeople);
    expect(nextState.bookingData).toEqual(initialState.bookingData);
  });

  describe('async actions', () => {
    it('should handle fetchAvailableTimeOptions fulfillment', async () => {
      const mockTimeOptions = ['10:00', '11:00'];
      const mockDate = '2023-01-01';
      const action = {
        type: fetchAvailableTimeOptions.fulfilled.type,
        payload: { timeOptions: mockTimeOptions, selectedDate:  mockDate},
      };
      const nextState = bookingReducer.reducer(initialState, action);

      expect(nextState.initData.timeOptions).toEqual(mockTimeOptions);
      expect(nextState.initData.selectedDate).toEqual(mockDate);
      expect(nextState.bookingData.date).toEqual(mockDate);
      expect(nextState.isLoading).toBe(false);
    });
    it('should handle fetchAvailableTables fulfillment', async () => {
      const mockTime = '10:00';
      const mockDate = '2023-01-01';
      const mockAvailableTables = [8];
      const mockNumOfPeople = 8;
      const action = {
        type: fetchAvailableTables.fulfilled.type,
        payload: { 
          date: mockDate,
          time: mockTime,
          tables: mockAvailableTables,
          numOfPeople: mockNumOfPeople,
        },
      };
      const nextState = bookingReducer.reducer(initialState, action);

      expect(nextState.bookingData).toEqual({ 
        date: mockDate,
        time: mockTime,
        tables: mockAvailableTables,
        numOfPeople: mockNumOfPeople
      });
      expect(nextState.isLoading).toBe(false);
    });
  });
});
