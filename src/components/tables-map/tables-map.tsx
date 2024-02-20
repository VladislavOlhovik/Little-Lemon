import { Link } from 'react-router-dom';

import { Preloader } from '@/components';
import { useAppSelector } from '@/store';

import * as SC from './tables-map.styled';

export const TablesMap = () => {
  const {
    bookingData: { date, numOfPeople, tables, time },
    isLoading,
  } = useAppSelector(state => state.bookingReducer);

  return (
    <SC.TablesMapContainer>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <img src='map.webp' alt='restaurant scheme' />
          <div className='table-container'>
            {!!tables.length &&
              tables.map(tableNum => {
                return (
                  <Link
                    key={tableNum}
                    className={`table id${tableNum}`}
                    to={`/book/${tableNum}?date=${date}&time=${time}&people=${numOfPeople}`}
                  >
                    {tableNum}
                  </Link>
                );
              })}
          </div>
        </>
      )}
    </SC.TablesMapContainer>
  );
};
