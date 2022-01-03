import './TodoList.scss';
import classNames from 'classnames';
import { Todo } from './Todo';

export const TodoList = ({
  todos,
  onDeleteTodo,
  onToggleCompleted,
}) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoListItem', {
          TodoListItemCompleted: completed,
        })}
      >
        <Todo
          onDeleteTodo={() => onDeleteTodo(id)}
          onToggleCompleted={() => onToggleCompleted(id)}
          text={text}
          completed={completed}
        />
      </li>
    ))}
  </ul>
);
