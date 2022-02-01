import useLocalStorage from 'components/Hooks/useLocalStorage';

import s from './SignupForm.module.css';
//////////Кастомный ХУК useLocalStorage

//
export const SignupForm = () => {
  const [email, setEmail] = useLocalStorage('email', '');
  // console.log(email);
  const [password, setPassword] = useLocalStorage('password', '');
  // console.log(password);

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  return (
    <form className={s.form} autoComplete="off">
      <label className={s.label}>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>
      <label className={s.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>
      <button type="submit"> Зарегестрироватся </button>
    </form>
  );
};
