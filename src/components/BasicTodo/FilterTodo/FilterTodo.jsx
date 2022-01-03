import { Component } from 'react';

export const FilterTodo = ({ value, onChange }) => {
  return (
    <label>
      Фильтр тудушек
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
