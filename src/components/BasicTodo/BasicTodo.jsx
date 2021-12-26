import { Component } from 'react';
import { TodoList } from './TodoList';
import initialTodos from './todos.json';

export class BasicTodo extends Component {
  state = {
    todos: initialTodos,
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(
        todo => todo.id !== todoId,
      ),
    }));
  };
  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodos = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
    console.log(completedTodos);
    return (
      <>
        <div>
          <p>Общее количество туду: {totalTodoCount}</p>
          <p>
            Количество выполненных туду: {completedTodos}
          </p>
        </div>
        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
        />
      </>
    );
  }
}
