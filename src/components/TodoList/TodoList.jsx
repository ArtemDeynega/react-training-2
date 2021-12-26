import { Component } from 'react';

export const TodoList = ({ todos }) => {
  <ul>
    {todos.map(({ id, text, completed }) => (
      <li key={id}>
        <p>{text}</p>
      </li>
    ))}
  </ul>;
};
