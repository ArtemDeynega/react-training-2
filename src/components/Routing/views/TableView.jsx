import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { PageHeading } from '../PageHeading/';
import { Table } from '../Table/Table';
import { SortSelector } from '../SortSelector/';

const initialState = [
  { id: 1, value: 100 },
  { id: 2, value: 200 },
  { id: 3, value: 300 },
  { id: 4, value: 400 },
  { id: 5, value: 500 },
];

const sortOptions = [
  { value: 'ascending', label: 'По возрастанию' },
  { value: 'descending', label: 'По убыванию' },
];
const TableView = () => {
  const location = useLocation();
  const history = useHistory();
  const [expenses, setExpenses] = useState(initialState);

  const sortByOrder =
    new URLSearchParams(location.search).get('sortBy') ?? 'ascending';
  console.log(sortByOrder);
  const onSortOrderChange = order => {
    history.push({
      ...location,
      search: `sortBy=${order}`,
    });
    // console.log(order);
    // console.log('history: ', history);
    // console.log('location: ', location);
  };
  useEffect(() => {
    console.log('location.search: ', location.search);
    if (location.search !== '') {
      return;
    }
    history.push({
      ...location,
      search: `sortBy=ascending`,
    });
  }, [history, location]);
  useEffect(() => {
    setExpenses(prevExpensis =>
      [...prevExpensis].sort((a, b) => {
        return sortByOrder === 'ascending'
          ? a.value - b.value
          : b.value - a.value;
      }),
    );
  }, [sortByOrder]);
  return (
    <>
      {expenses && (
        <>
          <PageHeading text="Таблица" />
          <SortSelector
            options={sortOptions}
            onChange={onSortOrderChange}
            value={sortByOrder}
          />
          <Table items={expenses} />
        </>
      )}
    </>
  );
};

export default TableView;
