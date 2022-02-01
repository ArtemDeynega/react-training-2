import { useState, useReducer } from 'react';
import s from './Counter.module.css';
// import PropTypes from 'prop-types';
// import { Controls } from './Controls';
// import { OnValue } from './OnValue';

const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };

    case 'decriment':
      return { ...state, count: state.count - action.payload };

    default:
      return state;
  }
};

const init = initialState => {
  return { ...initialState, count: initialState.count + 100 };
};

export const Counter = () => {
  // const [counterA, counterAState] = useState(0);
  // const [counterB, counterBState] = useState(0);

  const [state, dispatch] = useReducer(
    countReducer,
    {
      count: 0,
    },
    init,
  );

  // const handleCounterAIncrement = () => {
  //   counterAState(prevState => prevState + 1);
  // };
  // const handleCounterBIncrement = () => {
  //   counterBState(prevState => prevState - 1);
  // };

  // useEffect(() => {
  //   // console.log('запускается useEffect ');
  //   const totalClick = counterA + counterB;

  //   // document.title = `Всего кликнули ${totalClick} раз`;
  // }, [counterA, counterB]);
  return (
    <div className={s.container}>
      <p className={s.value}>{state.count}</p>
      <button
        type="button"
        className={s.btn}
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
      >
        Увеличить
      </button>

      <button
        type="button"
        className={s.btn}
        onClick={() => dispatch({ type: 'decriment', payload: 1 })}
      >
        Уменьшить
      </button>
    </div>
  );
};

//////Старый Коунтер без хуков
// export class Counter extends PureComponent {
//   constructor(props) {
//     super(props);
//     console.log('Counter constructor');
//   }
//   static defaultProps = {
//     initialValue: 0,
//   };

//   static propTypes = {
//     initialValue: PropTypes.number.isRequired,
//     title: PropTypes.string,
//   };
//   state = {
//     value: 0,
//     // this.props.initialValue,
//   };
//   intevalID = null;

//   componentDidMount() {
//     // console.log('Counter был монтирован');
//     this.intevalID = setInterval(() => {
//       this.setState(prevState => ({
//         value: prevState.value + 1,
//       }));
//     }, 1000);
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     // console.log('Next props', nextProps.title);
//     if (nextProps.title.includes('test')) {
//       return false;
//     }
//     return true;
//   }
//   // componentDidUpdate(prevProps, prevState) {
//   //   console.log('Component Did Update');
//   //   if (this.state.value > 9) {
//   //     alert('Максимальное значение 10');
//   //   }
//   //   if (this.state.value < -9) {
//   //     alert('Минимальное значение меньше -10');
//   //   }
//   // }
//   componentWillUnmount() {
//     console.log('Component Umount');
//     // eslint-disable-next-line no-lone-blocks
//     {
//       this.intevalID && clearInterval(this.intevalID);
//     }
//   }

//   handleIncrement = evt => {
//     console.log(`Кликнули увеличить на 1`);
//     this.setState(state => ({ value: state.value + 1 }));

//     // const { target } = evt;

//     // setTimeout(() => {
//     //   console.log(target);
//     // }, 1000);

//     // console.log(evt.target);
//   };
//   handleDecriment = evt => {
//     // const { type } = evt;
//     console.log(`Кликнули уменьшить на 1`);

//     this.setState(state => ({ value: state.value - 1 }));
//     // setTimeout(() => {
//     //   console.log(type);
//     // }, 1000);
//   };

//   render() {
//     console.log('Render Counter');
//     const { value } = this.state;
//     const { arrProp, title } = this.props;

//     return (
//       <div className={style.Counter}>
//         <h1>
//           {title} : {value}
//         </h1>
//         {/* <OnValue value={value} /> */}
//         <Controls
//           onIncrement={this.handleIncrement}
//           onDecrement={this.handleDecriment}
//         />
//         {arrProp.map(number => (
//           <li key={number}>{number}</li>
//         ))}
//       </div>
//     );
//   }
// }
