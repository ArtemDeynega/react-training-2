// import React, { Component } from 'react';

import { Component } from 'react';

//================ СЧЕТЧИК

// export class Counter extends Component {
//   static defaultProps = {
//     step: 1,
//   };
//   render() {
//     const { step } = this.props;
//     return (
//       <div>
//         <span>0</span>
//         <button type="button">Increment by {step}</button>
//         <button type="button">Decrement by {step}</button>
//       </div>
//     );
//   }
// }

// ========== АНОНИМНЫЙ КОЛБЕК
// export class Counter extends Component {
//   // *---* //
//   render() {
//     let { step } = this.props;
//     return (
//       <div>
//         <span>{step}</span>
//         <button
//           type="button"
//           onClick={evt => {
//             console.log('Нажата кнопка увеличения!', evt);
//             console.log('this.props', this.props);
//             step += 1;
//             console.log(step);
//           }}
//         >
//           Increment by {step}
//         </button>
//         <button
//           type="button"
//           onClick={evt => {
//             console.log('Нажата кнопка уменьшения', evt);
//             console.log('this.props', this.props);
//             step -= 1;
//             console.log(step);
//           }}
//         >
//           Decrement by {step}
//         </button>
//       </div>
//     );
//   }
// }

// ================= Кастомные методы
// export class Counter extends Component {
//   static defaultProps = {
//     step: 0,
//   };
//   handleIncrement(evt) {
//     console.log('Нажата кнопка увеличения', evt);
//     // console.log('this.props: ', this.props);
//   }
//   handleDecriment(evt) {
//     console.log('Decrement button was clicked!', evt); // работает
//     console.log('this.props: ', this.props); // Error: cannot read props of undefined
//   }
//   render() {
//     const { step } = this.props;
//     return (
//       <div>
//         <span>{step}</span>
//         <button type="button" onClick={this.handleIncrement}>
//           Increment by {step}
//         </button>
//         <button type="button" onClick={this.handleDecriment}>
//           Decriment by {step}
//         </button>
//       </div>
//     );
//   }
// }

// ==================== ПРИВЯЗКА КОНТЕКСТА
// ======== Привязка при передаче колбека
// ❌ ПЛОХО
// export class Counter extends Component {
//     // --- //
//     handleIncrement(evt) {
//       // --- //
//     }
//     handleDecriment(evt) {
//       // --- //
//     }

//     render() {
//         const { step } = this.props
//         return (
//           <div>
//             <span>0</span>
//             <button type="button" onClick={this.handleIncrement.bind(this)}>
//               Increment by {step}
//             </button>
//             <button type="button" onClick={this.handleDecrement.bind(this)}>
//               Decrement by {step}
//             </button>
//           </div>
//         );
//     }
// }

// =============== Привязка в конструкторе
// ✅ Хорошо
// export class Counter extends Component {
//   //===//
//   constructor() {
//     super();
//     this.handleIncrement = this.handleIncrement.bind(this);
//     this.handleDecrement = this.handleDecrement.bind(this);
//   }
//   handleIncrement(evt) {
//     //   === ///
//   }
//   handleDecriment(evt) {
//     // === //
//   }

//   render() {
//     const { step } = this.props;
//     return (
//       <div>
//         <span>{step}</span>
//         <button type="botton" onClick={this.handleIncrement}>
//           Increment by {step}
//         </button>
//         <button type="botton" onClick={this.handleDecriment}>
//           Decrement by {step}
//         </button>
//       </div>
//     );
//   }
// }

// ===============Публичные свойства класса

// ✅ ОЧЕНЬ Хорошо
// export class Counter extends Component {
//   static defaultProps = {
//     step: 1,
//   };

//   handleIncrement = evt => {
//     console.log(`Нажата кнопка увеличения!`, evt);
//     console.log('this.props', this.props);
//   };
//   handleDecrement = evt => {
//     console.log('Нажата кнопка снижения', evt);
//     console.log('this.props', this.props);
//   };

//   render() {
//     const { step } = this.props;
//     return (
//       <div>
//         <span>{step}</span>
//         <button
//           type="button"
//           onClick={this.handleIncrement}
//         >
//           Increment by {step}
//         </button>
//         <button
//           type="button"
//           onClick={this.handleDecrement}
//         >
//           Decrement by {step}
//         </button>
//       </div>
//     );
//   }

// ============ Внутреннее состояние компонента
// export class Counter extends Component {
//   constructor() {
//     super();

//     this.state = {
//       value: 0,
//     };
//   }

//   render() {
//     return (
//       <div>
//         <span>{this.state.value}</span>
//       </div>
//     );
//   }
// }

// ============ Начальное состояние от props
// ✅ Варант 1
// export class Counter extends Component {
//   static defaultProps = {
//     step: 1,
//     initialValue: 0,
//   };

//   constructor(props) {
//     super(props);
//     this.state = { value: this.props.initialValue };
//     this.value = { step: this.props.step };
//   }

//   render() {
//     const value = this.state.value;
//     const step = this.value.step;
//     return (
//       <div>
//         <span>{value}</span>
//         <span>Step by {step}</span>
//       </div>
//     );
//   }
// }

// ✅ Варант 2 - Упрощенный

// export class Counter extends Component {
//   static defaultProps = {
//     step: 1,
//     initialValue: 0,
//   };

//   state = {
//     value: this.props.initialValue,
//     step: this.props.step,
//   };

//   render() {
//     const value = this.state.value;
//     const step = this.state.step;
//     return (
//       <div>
//         <span>By value {value}</span>
//         <div>
//           <span> By step {step}</span>
//         </div>
//       </div>
//     );
//   }
// }

// ==============3.5. setState с функцией

// export class Counter extends Component {
//   state = {
//     value: this.props.value,
//     step: this.props.step,
//   };
//   handleIncrement = () => {
//     this.setState((state, props) => ({
//       value: state.value + props.step,
//     }));
//   };
//   handleDecrement = () => {
//     this.setState((state, props) => ({
//       value: state.value - props.step,
//     }));
//   };

//   render() {
//     const { value } = this.state.value;
//     const { step } = this.state.step;

//     return (
//       <div>
//         <button onClick={this.handleIncrement}>
//           {value}
//         </button>
//         <button onClick={this.handleDecrement}>
//           {value}
//         </button>
//       </div>
//     );
//   }
// }

// =========== Подъем состояния (state hoisting)
/*
 * Button получает функцию changeMessage (имя пропа),
 * которая вызывается при событии onClick
 */
const Button = ({ changeMessage, label }) => (
  <button type="button" onClick={changeMessage}>
    {label}
  </button>
);

export class Btst extends Component {
  state = {
    message: new Date().toLocaleTimeString(),
  };

  // Метод который будем передавать в Button для вызова при клике
  updateMessage = evt => {
    console.log(evt);
    this.setState({
      message: new Date().toLocaleTimeString(),
    });
  };
  render() {
    return (
      <>
        <span>{this.state.message}</span>
        <Button
          label="Изменить Сообщение"
          changeMessage={this.updateMessage}
        />
      </>
    );
  }
}
