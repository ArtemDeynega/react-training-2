import { useState, useEffect } from 'react';
import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import { PageHeading } from '../PageHeading/PageHeading.jsx';
import * as bookShelAPI from '../services/bookshelfApi.jsx';
import { AuthorsSubView } from './AuthorsSubView.jsx';

export const AuthorsView = () => {
  const { url, path } = useRouteMatch();
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    bookShelAPI.fetchAuthors().then(setAuthors);
  }, []);

  return (
    <>
      <PageHeading text="Авторы" />
      {authors && (
        <ul>
          {authors.map(({ id, name }) => (
            <li key={id}>
              <NavLink to={`${url}/${id}`}>{name}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <Route path={`${path}/:authorId}`}>
        {authors && <AuthorsSubView authors={authors} />}
      </Route>
    </>
  );
};
