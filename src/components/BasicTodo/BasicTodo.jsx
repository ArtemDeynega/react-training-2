import { Component } from 'react';
import { TodoList } from './TodoList';
import initialTodos from './todos.json';
import { Form } from './Form';
import shortid from 'shortid';
import { TodoEditor } from './TodoEditor/TodoEditor';
import { FilterTodo } from './FilterTodo';

export class BasicTodo extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(
        todo => todo.id !== todoId,
      ),
    }));
  };
  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  onToggleCompleted = todoId => {
    console.log(todoId);
    // ======== КАК ДЕЛАТЬ ПО СТАРОМУ
    // this.setState(prevState => ({
    //   // todos: prevState.todos.map(todo => {
    //   //   if (todo.id === todoId) {
    //   //     console.log('Мы нашли туду который нужен!');
    //   //     return {
    //   //       ...todo,
    //   //       completed: !todo.completed,
    //   //     };
    //   //   }
    //   //   return todo;
    //   // }),

    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo,
      ),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };
  changeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return todos.filter(({ text }) =>
      text.toLowerCase().includes(normalizeFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodos = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        {/* <Form onSubmit={this.formSubmitHandler} /> */}

        <div>
          <p>Общее количество туду: {totalTodoCount}</p>
          <p>
            Количество выполненных туду: {completedTodos}
          </p>
        </div>
        <TodoEditor onSubmit={this.addTodo} />
        <FilterTodo
          value={filter}
          onChange={this.changeFilter}
        />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.onToggleCompleted}
        />
      </>
    );
  }
}
