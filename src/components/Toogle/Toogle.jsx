import { Component } from 'react';

// =============== Изменение состояния компонента
// export class Toogle extends Component {
//   state = { isOpen: false };
//   show = () => this.setState({ isOpen: true });
//   hide = () => this.setState({ isOpen: false });

//   render() {
//     const { isOpen } = this.state;
//     const { children } = this.props;
//     return (
//       <>
//         <button type="button" onClick={this.show}>
//           Show
//         </button>
//         <button type="button" onClick={this.hide}>
//           Hide
//         </button>
//         {isOpen && children}
//       </>
//     );
//   }
// }

// ==============3.5. setState с функцией

export class Toogle extends Component {
  state = { isOpen: false };

  toogle = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;
    return (
      <div>
        <button onClick={this.toogle}>
          {isOpen ? 'Hide' : 'Show'}
          {isOpen && children}
        </button>
      </div>
    );
  }
}
