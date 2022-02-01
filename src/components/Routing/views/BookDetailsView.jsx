import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PageHeading } from '../PageHeading/';

import * as bookShelAPI from '../services/bookshelfApi';

export const BookDetailsView = () => {
  const { booksId } = useParams();
  const [books, setBooks] = useState(null);

  useEffect(() => {
    bookShelAPI.fetchBookById(booksId).then(setBooks);
  }, [booksId]);

  return (
    <>
      {books && (
        <>
          <PageHeading text={`Книга: ${books.title}`} />

          <img src={books.imgUrl} alt={books.title} />
          <p>Автор: {books.author.name}</p>
          <p>Жанр: {books.genre}</p>
          <p>{books.descr}</p>
        </>
      )}
    </>
  );
};
