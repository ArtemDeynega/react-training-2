import React, { Component } from 'react';

export class Counter extends Component {
  static defaultProps = {
    step: 1,
  };

  render() {
    const { step, prob } = this.props;

    return (
      <div>
        <span>0</span>
        <button type="button">
          Increment by {step} {prob}
        </button>
        <button type="button">
          Decrement by {step} {prob}
        </button>
      </div>
    );
  }
}
