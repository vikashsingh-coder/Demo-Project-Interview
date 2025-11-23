import type { Todo } from "../types";
import TodoItems from "./todoItems";

type Prop = {
  todos: Todo[];
  onDelete: (id: string) => void;
  ontoggle: (id: string) => void;
};

function TodoList({ todos, onDelete, ontoggle }: Prop) {
  if (todos.length === 0) return <p aria-live="polite"> No Task Found... </p>;

  return (
    <ul>
      {todos.map((t) => (
        <TodoItems
          key={t.id}
          todo={t}
          onDelete={onDelete}
          onToggle={ontoggle}
        />
      ))}
    </ul>
  );
}

export default TodoList;
