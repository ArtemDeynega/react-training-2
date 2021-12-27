import './TodoList.scss';
import classNames from 'classnames';

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
        <input
          className="TodoListCheckbox"
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className="ToodoListText">{text}</p>
        <button
          className="TodoListBtn"
          onClick={() => onDeleteTodo(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);
