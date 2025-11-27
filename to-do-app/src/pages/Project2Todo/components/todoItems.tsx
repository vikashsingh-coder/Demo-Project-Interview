import type { Todo } from "../types.ts";

type Props = {
  todo: Todo;
  onToggle?: (id: string) => void;
  onDelete?: (id: string) => void;
};

function TodoItems({ todo, onToggle, onDelete }: Props) {
  return (
    <li
      role="listitem"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 8,
        border: "1px solid #eee",
        borderRadius: 6,
        marginBottom: 8,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <input
          type="checkbox"
          checked={!!todo.completed}
          onChange={() => onToggle?.(todo.id)}
          aria-label={`Mark ${todo.text} as ${
            todo.completed ? "incomplete" : "complete"
          }`}
        />
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : undefined,
          }}
        >
          {todo.text}
        </span>
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
