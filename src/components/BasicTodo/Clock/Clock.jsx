import { useState, useEffect, useRef } from 'react';

import s from './Clock.module.css';

export const Clock = () => {
  const [time, setTime] = useState(() => new Date());
  const [time2, setTime2] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
      setTime2(new Date());
    }, 1000);

    return () => {
      console.log('Это функция очистки перед следующим вызовом useEffect');
      stop();
    };
  }, []);
  const stop = () => {
    clearInterval(intervalId.current);
  };
  return (
    <div className={s.container}>
      <p className={s.clockface}>Текущее время: {time.toLocaleTimeString()}</p>
      <p className={s.clockface}>
        Текущее время2: {time2.toLocaleTimeString()}
      </p>
      <button type="button" onClick={stop}>
        Остановить
      </button>
    </div>
  );
};

// export default function Clock() {
//   const [time, setTime] = useState(() => new Date());
//   const intervalId = useRef(null);

//   useEffect(() => {
//     intervalId.current = setInterval(() => {
//       console.log(
//         'Это интервал каждые 2000ms ' + Date.now(),
//       );
//       setTime(new Date());
//     }, 2000);

//     return () => {
//       console.log(
//         'Это функция очистки перед следующим вызовом useEffect',
//       );
//       stop();
//     };
//   }, []);

//   const stop = () => {
//     clearInterval(intervalId.current);
//   };

//   return (
//     <div className={styles.container}>
//       <p className={styles.clockface}>
//         Текущее время: {time.toLocaleTimeString()}
//       </p>
//       <button type="button" onClick={stop}>
//         Остановить
//       </button>
//     </div>
//   );
// }
// export class Clock extends Component {
//   state = {
//     time: new Date().toLocaleTimeString(),
//   };
//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(
//       () =>
//         this.setState({
//           time: new Date().toLocaleTimeString(),
//         }),
//       1000,
//     );
//   }
//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//   }

//   render() {
//     return <div>{this.state.time}</div>;
//   }
// }
