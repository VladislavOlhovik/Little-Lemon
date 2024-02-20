export interface BookingState {
  initData: InitData;
  bookingData: {
    tables: number[];
    time: string;
    date: string;
    numOfPeople: number | null;
  };
  isLoading: boolean;
}

type InitData = {
  selectedDate: string;
  selectedTime: string;
  selectedNumOfPeople: number;
  timeOptions: string[];
};

export type AvailableDatesType = {
  selectedDate: string;
  timeOptions: string[];
};
export type AvailableTablesType = {
  selectedDate: string;
  selectedTime: string;
  availableTables: number[];
};

export type ReservationDetails = {
  selectedDate: string;
  selectedTime: string;
  selectedNumOfPeople: number;
};
