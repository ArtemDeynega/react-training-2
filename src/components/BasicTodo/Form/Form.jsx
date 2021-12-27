import { Component } from 'react';

import shortid from 'shortid';

export class Form extends Component {
  state = {
    name: '',
    phone: '+380',
    expirience: '',
    licence: false,
  };

  loginInputId = shortid.generate();
  phoneInputId = shortid.generate();

  handleCange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };
  handleLicenceChange = evt => {
    console.log(evt.target.checked);
    this.setState({ licence: evt.target.checked });
  };

  reset = () => {
    this.setState({ name: '', phone: '+380' });
  };

  render() {
    const { phone, name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.loginInputId}>
          Имя
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleCange}
            id={this.loginInputId}
          />
        </label>
        <label htmlFor={this.phoneInputId}>
          Телефон
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={this.handleCange}
            id={this.phoneInputId}
          />
        </label>
        <p>Ваш уровень: </p>
        <label>
          <input
            type="radio"
            name="expirience"
            value="junior"
            onChange={this.handleCange}
            checked={this.state.expirience === 'junior'}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="expirience"
            value="middle"
            onChange={this.handleCange}
            checked={this.state.expirience === 'middle'}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="expirience"
            value="senior"
            onChange={this.handleCange}
            checked={this.state.expirience === 'senior'}
          />
          Senior
        </label>
        <br />
        <label htmlFor="">
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />{' '}
          Согласен с условием
        </label>
        <button
          type="submit"
          disabled={!this.state.licence}
        >
          Отправить
        </button>
      </form>
    );
  }
}
