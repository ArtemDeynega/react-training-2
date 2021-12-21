import style from './Counter.module.css';

export const Controls = ({ onIncrement, onDecrement }) => (
  <div className={style.Counter__controls}>
    <button onClick={onIncrement} type="button">
      Увеличить на 1
    </button>
    <button type="button" onClick={onDecrement}>
      Уменьшить на 1
    </button>
  </div>
);
