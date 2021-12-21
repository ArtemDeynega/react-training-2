import { Component } from 'react';
import style from './Counter.module.css';
import PropTypes from 'prop-types';
import { Controls } from './Controls';
import { OnValue } from './OnValue';

export class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    initialValue: PropTypes.number.isRequired,
  };
  state = {
    value: this.props.initialValue,
  };
  handleIncrement = evt => {
    console.log(`Кликнули увеличить на 1`);
    this.setState(stat => ({ value: stat.value + 1 }));

    // const { target } = evt;

    // setTimeout(() => {
    //   console.log(target);
    // }, 1000);

    // console.log(evt.target);
  };
  handleDecriment = evt => {
    // const { type } = evt;
    console.log(`Кликнули уменьшить на 1`);

    this.setState(state => ({ value: state.value - 1 }));
    // setTimeout(() => {
    //   console.log(type);
    // }, 1000);
  };

  render() {
    const { value } = this.state;
    return (
      <div className={style.Counter}>
        <OnValue onValue={value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecriment}
        />
      </div>
    );
  }
}
