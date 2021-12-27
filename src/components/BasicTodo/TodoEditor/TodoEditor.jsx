import { Component } from 'react';
import './TodoEditor.scss';

export class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = evt => {
    this.setState({ message: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    console.log(this.state);

    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };
  render() {
    const { message } = this.state;

    return (
      <form
        className="TodoEditor"
        onSubmit={this.handleSubmit}
      >
        <textarea
          value={message}
          onChange={this.handleChange}
          className="TodoEditorTextarea"
        ></textarea>
        <button type="submit" className="TodoEditorButton">
          Сохранить
        </button>
      </form>
    );
  }
}
