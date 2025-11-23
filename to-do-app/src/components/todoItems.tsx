import type { Todo } from "./../types.ts";

type Props = {
  todo: Todo;
  onToggle?: (id: string) => void;
  onDelete?: (id: string) => void;
};

function TodoItems({ todo, onToggle, onDelete }: Props) {
  return (
    <li role="listitem">
      <div>
        <input
          type="checkbox"
          checked={!!todo.completed}
          onChange={() => onToggle?.(todo.id)}
        />
        <span>{todo.text}</span>
      </div>
      <div>
        <button
          onClick={() => onDelete?.(todo.id)}
          aria-label={`Delete ${todo.text}`}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItems;
