import s from './PageHeading.module.css';

export const PageHeading = ({ text }) => {
  return <h1 className={s.title}>{text}</h1>;
};
