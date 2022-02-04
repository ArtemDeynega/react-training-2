import { useParams, Link } from 'react-router-dom';
const AuthorsSubView = ({ authors }) => {
  const { authorId } = useParams();
  const author = authors.find(author => author.id === Number(authorId));
  const { books } = author;
  console.log(books);

  return (
    <>
      <h2>{author.name}</h2>
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

export default AuthorsSubView;
