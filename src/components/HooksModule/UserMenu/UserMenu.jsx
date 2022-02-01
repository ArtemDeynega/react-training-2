import s from './UserMenu.module.css';

export const UserMenu = ({ onLogOut, user }) => {
  return (
    <div className={s.container}>
      <img
        src={user.avatar}
        alt=""
        width={32}
        height={32}
        className={s.avatar}
      />
      <p className={s.name}>Добро пожаловать, {user.name}</p>
      <button type="button" onClick={onLogOut}>
        Выйти
      </button>
    </div>
  );
};
