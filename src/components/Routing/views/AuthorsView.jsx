import { useState, useEffect, lazy, Suspense } from 'react';
import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import { PageHeading } from '../PageHeading/PageHeading.jsx';
import * as bookShelAPI from '../services/bookshelfApi.jsx';
// import AuthorsSubView from './AuthorsSubView.jsx';

const AuthorsSubView = lazy(() =>
  import('./AuthorsSubView.jsx' /* webpackChunkName: "authors-sub-view" */),
);

const AuthorsView = () => {
  const { url, path } = useRouteMatch();
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    bookShelAPI.fetchAuthors().then(setAuthors);
  }, []);
  console.log(path);

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
      <Suspense fallback={<h2>Минуточку Загружаем ....</h2>}>
        <Route path={`${path}/:authorId`}>
          {authors && <AuthorsSubView authors={authors} />}
        </Route>
      </Suspense>
    </>
  );
};
export default AuthorsView;
