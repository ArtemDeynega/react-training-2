import React, { Component } from 'react';

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
export class Counter extends Component {
  static defaultProps = {
    step: 1,
  };

  handleIncrement = evt => {
    console.log(`Нажата кнопка увеличения!`, evt);
    console.log('this.props', this.props);
  };
  handleDecrement = evt => {
    console.log('Нажата кнопка снижения', evt);
    console.log('this.props', this.props);
  };

  render() {
    const { step } = this.props;
    return (
      <div>
        <span>{step}</span>
        <button
          type="button"
          onClick={this.handleIncrement}
        >
          Increment by {step}
        </button>
        <button
          type="button"
          onClick={this.handleDecrement}
        >
          Decrement by {step}
        </button>
      </div>
    );
  }
}
