import style from './OnValue.module.css';
export const OnValue = ({ value }) => (
  <span className={style.Counter__value}>{value}</span>
);
