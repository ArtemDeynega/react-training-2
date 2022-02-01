import { useParams, Link } from 'react-router-dom';
import { NotFoundView } from './NotFoundView';

export const AuthorsSubView = ({ authors }) => {
  const { authorId } = useParams();
  const author = authors.find(author => author.id === Number(authorId));
  const { books } = author;

  return (
    <>
      <ul>
        {books.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/books/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
