import { Component } from 'react';

import PropTypes from 'prop-types';

import s from './NewCounter.module.css';

export class NewCounter extends Component {
  static defaultProps = {
    value: 0,
    title: 'Default Title',
  };
  static propTypes = {
    value: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  };

  state = {
    title: 'Counter',
    value: 0,
  };

  handleIncrement = () => {
    this.setState(state => ({ value: state.value + 1 }));
  };
  handleDecriment = () => {
    this.setState(state => ({ value: state.value - 1 }));
  };
  resetValueCounter = () => {
    this.setState({ value: 0 });
  };
  render() {
    console.log('render');
    const { value } = this.state;
    const { title } = this.props;

    return (
      <div>
        <h1>
          {title} : {value}
        </h1>
        <div className={s.ButtonGroup}>
          <button
            className={s.Button}
            onClick={this.handleIncrement}
          >
            Добавить
          </button>
          <button
            className={s.Button}
            onClick={this.handleDecriment}
          >
            Убрать
          </button>
        </div>
        <div>
          <button
            className={s.Button}
            onClick={this.props.onTitleUpdate}
          >
            Сбросить
          </button>
        </div>
      </div>
    );
  }
}
