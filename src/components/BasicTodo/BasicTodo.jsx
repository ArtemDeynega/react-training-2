/* eslint-disable no-lone-blocks */
import { Component } from 'react';
import { TodoList } from './TodoList';
// import initialTodos from './todos.json';
// import { Form } from './Form';
import shortid from 'shortid';
import { TodoEditor } from './TodoEditor/TodoEditor';
import { FilterTodo } from './FilterTodo';
import { IconButton } from './IconButton';
import { ReactComponent as AddIcon } from '../../icons/add.svg';

import { Modal } from './Modal';

// import { Clock } from './Clock';

export class BasicTodo extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    // console.log('App conmponent Did Mount');
    const todos = localStorage.getItem('todos');
    const parsetodos = JSON.parse(todos);
    // console.log(parsetodos);
    // eslint-disable-next-line no-lone-blocks
    {
      parsetodos && this.setState({ todos: parsetodos });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('App component Update');
    const nextTodos = this.state.todos;
    const prevRodos = prevState.todos;

    {
      nextTodos !== prevRodos &&
        localStorage.setItem(
          'todos',
          JSON.stringify(this.state.todos),
        );
    }

    //========= Закрытие модалки лучший способ с проверками
    if (
      nextTodos.length > prevRodos.length &&
      prevRodos.length !== 0
    ) {
      this.toggleModal();
    }

    // if (this.state.todos !== prevState.todos) {
    // }
    // console.log(prevState);
    // console.log(this.state);
  }

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

    //========= Закрытие модалки более логический способ
    // this.toggleModal();
  };

  onToggleCompleted = todoId => {
    // console.log(todoId);
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

  formSubmitHandler = data => {};
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    // console.log('App render');
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodos = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <IconButton
          onClick={this.toggleModal}
          aria-label="Добавить todo"
        >
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>
        {/* <button type="button" onClick={this.toggleModal}>
            Открыть модалку
          </button> */}
        {/* {showModal && <Clock />} */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}

        {/* <Form onSubmit={this.formSubmitHandler} /> */}

        <div>
          <p>Общее количество туду: {totalTodoCount}</p>
          <p>
            Количество выполненных туду: {completedTodos}
          </p>
        </div>

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
