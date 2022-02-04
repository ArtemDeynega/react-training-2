import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Container from 'components/Container/Container';
import AppBar from './AppBar/AppBar';

// import HomeViews from './views/HomeViews';
// import AuthorsView from './views/AuthorsView';
// import BooksViews from './views/BooksViews';
// import NotFoundView from './views/NotFoundView';
// import BookDetailsView from './views/BookDetailsView';
// import TableView from './views/TableView';

const HomeViews = lazy(() => import('./views/HomeViews.jsx'));
const AuthorsView = lazy(() => import('./views/AuthorsView.jsx'));
const BooksViews = lazy(() =>
  import('./views/BooksViews.jsx' /* webpackChunkName: "books-views" */),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView.jsx' /* webpackChunkName: "not-found-view" */),
);
const BookDetailsView = lazy(() =>
  import(
    './views/BookDetailsView.jsx' /* webpackChunkName: "book-details-view" */
  ),
);
const TableView = lazy(() => import('./views/TableView.jsx'));

///что бы добавить имя файлу chunk  - import('путь' /* webpackChunkName: "book-details-view" */)

export const AppRouting = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Загружаем</div>}>
        <Switch>
          <Route exact path="/">
            <HomeViews />
          </Route>
          <Route path="/author">
            <AuthorsView />
          </Route>
          <Route exact path="/books">
            <BooksViews />
          </Route>
          <Route path="/books/:booksId">
            <BookDetailsView />
          </Route>
          <Route path="/table">
            <TableView />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
};
