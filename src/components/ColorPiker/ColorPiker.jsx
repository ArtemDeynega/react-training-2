import s from './ColorPiker.module.css';
console.log(s);

export default function ColorPiker({ options }) {
  return (
    <div className={s.container}>
      <h2 className={s.title}> Color Piker</h2>
      <div>
        {options.map(option => (
          <span
            className={s.option}
            style={{
              color: 'white',
              backgroundColor: `${option.color}`,
              fontSize: 17,
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}
