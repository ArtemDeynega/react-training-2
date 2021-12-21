import style from './Counter.module.css';
export const OnValue = ({ onValue }) => (
  <span className={style.Counter__value}>{onValue}</span>
);
