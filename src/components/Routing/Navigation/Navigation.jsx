import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Главная
      </NavLink>
      <NavLink to="/author" className={s.link} activeClassName={s.activeLink}>
        Авторы
      </NavLink>
      <NavLink to="/books" className={s.link} activeClassName={s.activeLink}>
        Книги
      </NavLink>
    </nav>
  );
};
