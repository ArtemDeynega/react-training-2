import { Component } from 'react';
import s from './TodoList.module.css';

export const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className={s.TodoList}>
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={s.TodoListItem}>
        <p className={s.ToodoListText}>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>
          Удалить
        </button>
      </li>
    ))}
  </ul>
);
