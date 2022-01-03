import { IconButton } from '../../IconButton';
import { ReactComponent as DeleteIcon } from '../../../../icons/delete.svg';

export const Todo = ({
  completed,
  text,
  onToggleCompleted,
  onDeleteTodo,
}) => {
  return (
    <div>
      <input
        className="TodoListCheckbox"
        type="checkbox"
        checked={completed}
        onChange={onToggleCompleted}
      />
      <p className="ToodoListText">{text}</p>
      <button
        className="TodoListBtn"
        onClick={onDeleteTodo}
      >
        Удалить
      </button>
      {/* <IconButton>
        <DeleteIcon width="32" height="32" fill="#fff" />
      </IconButton> */}
    </div>
  );
};
