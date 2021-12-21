import { Component } from 'react';

export class Input extends Component {
  state = {
    value: '',
  };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;

    return (
      <input
        type="text"
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}
