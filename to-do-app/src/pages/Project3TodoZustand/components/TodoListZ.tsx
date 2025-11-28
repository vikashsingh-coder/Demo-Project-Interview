import { useAppStore } from "../../../store";
// import { useTodoStore } from "../../../store/todo";

export function TodoListZ() {
  // const { todos, toggleTodo } = useTodoStore();
  const { todos, toggleTodo } = useAppStore();
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
