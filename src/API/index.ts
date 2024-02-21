import { BookTableType } from '@/store/types';
import { fetchFakeData, availableTables, timeOptions } from '@/utils';

class API {
  _baseURL = 'https://future/api';
  async getAvailableTimeOptions(selectedDate: string) {
    try {
      const response = await fetchFakeData({ selectedDate, timeOptions });
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  async getAvailableTables(
    selectedDate: string,
    selectedTime: string,
    peopleCount: number,
  ) {
    try {
      const response = await fetchFakeData({
        date: selectedDate,
        time: selectedTime,
        tables: availableTables,
        numOfPeople: peopleCount,
      });
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  async bootTable({
    persanalData,
    date,
    time,
    tableNumber,
    numOfPeople,
  }: BookTableType) {
    try {
      const response = await fetchFakeData({
        persanalData,
        date,
        time,
        tableNumber,
        numOfPeople,
      });
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}

export const APIService = new API();
