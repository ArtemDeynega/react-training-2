import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useReducer,
} from 'react';
import { Legend } from 'components/Counter/Legend';
import PropTypes from 'prop-types';

import s from './NewCounter.module.css';
import { useMedia } from 'components/Hooks/useMedia';

const initialValue = {
  value: 0,
  value2: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { value: state.count + 1 };
    case 'decriment':
      return { value2: state.count - 1 };

    default:
      break;
  }
}

export const NewCounter = ({ title, onTitleUpdate }) => {
  const [titleItem, setTitle] = useState(() => title);
  const [valueItem, setValueItem] = useState(0);
  const [valueItem2, setValueItem2] = useState(0);

  const mobile = useMedia('(max-width: 700px )');
  // const [state, dispatch] = useReducer(reducer, initialValue);

  const inputRef = useRef();
  const intervalIdRef = useRef();

  const handleIncrement = useCallback(() => {
    setValueItem(prevValue => prevValue + 1);
  }, []);

  // Возвращает функцию
  const handleDecriment = useCallback(() => {
    setValueItem(prevValue => prevValue - 1);
  }, []);

  // Возвращает значение
  // const newTitle = useMemo(() => {
  //   return title + ' some calculated value';
  // }, [title]);

  useEffect(() => {
    setTitle(title);
    return () => {};
  }, [title]);
  useEffect(() => {
    reset();
  }, [onTitleUpdate]);

  //componentDidMount

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setValueItem(prevValue => prevValue + 1);
      setValueItem2(prevValue => prevValue + 2);
    }, 1000);

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  const handleCliarInterval = () => {
    setValueItem2(0);
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }
  };

  const reset = () => {
    setValueItem(0);
    return;
  };

  console.log('render counter');
  return (
    <div>
      <h1>Mobile : {String(mobile)}</h1>
      <h2>
        {titleItem} : {valueItem}
      </h2>
      <div>
        <input type="text" ref={inputRef} />
      </div>
      <div>
        <button onClick={handleCliarInterval}>Clear Interval</button>
      </div>
      <div className={s.ButtonGroup}>
        <button className={s.Button} onClick={handleIncrement}>
          Добавить
        </button>
        <button className={s.Button} onClick={handleDecriment}>
          Убрать
        </button>
      </div>
      <div>
        <button className={s.Button} onClick={onTitleUpdate}>
          Сбросить
        </button>
      </div>
      <Legend title={title} />
    </div>
  );
};

// export class NewCounter extends Component {
//   static defaultProps = {
//     value: 0,
//     title: 'Default Title',
//   };
//   static propTypes = {
//     value: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//   };

//   state = {
//     title: 'Counter',
//     value: 0,
//   };

//   handleIncrement = () => {
//     this.setState(state => ({ value: state.value + 1 }));
//   };
//   handleDecriment = () => {
//     this.setState(state => ({ value: state.value - 1 }));
//   };
//   resetValueCounter = () => {
//     this.setState({ value: 0 });
//   };
//   render() {
//     console.log('render');
//     const { value } = this.state;
//     const { title } = this.props;

//     return (
//       <div>
//         <h1>
//           {title} : {value}
//         </h1>
//         <div className={s.ButtonGroup}>
//           <button
//             className={s.Button}
//             onClick={this.handleIncrement}
//           >
//             Добавить
//           </button>
//           <button
//             className={s.Button}
//             onClick={this.handleDecriment}
//           >
//             Убрать
//           </button>
//         </div>
//         <div>
//           <button
//             className={s.Button}
//             onClick={this.props.onTitleUpdate}
//           >
//             Сбросить
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
