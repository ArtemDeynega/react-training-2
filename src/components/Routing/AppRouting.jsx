import { Route, Switch } from 'react-router-dom';

import { Container } from 'components/Container/';
import { AppBar } from './AppBar/';
import { Navigation } from './Navigation';
import { HomeViews } from './views/HomeViews';
import { AuthorsView } from './views/AuthorsView';
import { BooksViews } from './views/BooksViews';
import { NotFoundView } from './views/NotFoundView';
import { BookDetailsView } from './views/BookDetailsView';

export const AppRouting = () => {
  return (
    <Container>
      <AppBar />
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
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
};
