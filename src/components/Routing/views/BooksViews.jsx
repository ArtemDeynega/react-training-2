import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as bookShelAPI from '../services/bookshelfApi';

import { PageHeading } from '../PageHeading/';

export const BooksViews = () => {
  const { url } = useRouteMatch();

  const [books, setBooks] = useState(null);
  useEffect(() => {
    bookShelAPI.fetchBooks().then(setBooks);
  }, []);
  console.log(books);
  return (
    <>
      <PageHeading text="Книги" />

      {books && (
        <ul>
          {books.map(({ id, title, genre, descr, imgUrl }) => (
            <li key={id}>
              <Link to={`${url}/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
