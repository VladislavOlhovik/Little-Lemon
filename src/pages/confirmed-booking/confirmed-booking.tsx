import { redirect, useLocation, useParams } from 'react-router-dom';

export const ConfirmedBooking = () => {
  const { id } = useParams();
  if (id) {
    redirect('/book');
  }
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let date = queryParams.get('date');
  let time = queryParams.get('time');
  let numOfPeople = queryParams.get('people');

  return (
    <>
      Confirmed Booking at date:{date} time: {time} people {numOfPeople} table
      number {id}
    </>
  );
};
