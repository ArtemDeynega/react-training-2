import { Component } from 'react';
import { TodoList } from '../TodoList';

export class BasicTodo extends Component {
  state = {
    todos: [
      {
        id: 'id-1',
        text: 'Выучить основы React',
        completed: false,
      },
      {
        id: 'id-2',
        text: 'Выучить основы JS',
        completed: false,
      },
      {
        id: 'id-3',
        text: 'Разобраться с React Router',
        completed: false,
      },
      {
        id: 'id-4',
        text: 'Пережить Redux',
        completed: false,
      },
    ],
  };
  render() {
    const { todos } = this.state;
    return (
      <>
        <TodoList todos={todos} />
      </>
    );
  }
}
