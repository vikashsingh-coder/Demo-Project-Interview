import { useTodoStore } from "../../../store/todo";
import { useState } from "react";

export function TodoZ() {
  //   const { addTodo } = useTodoStore();
  // Second way
  const addTodo = useTodoStore((s) => s.addTodo);
  const [todo, setTodo] = useState("");
  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={({ target }) => setTodo(target.value)}
        placeholder="add todo..."
      />
      <button
        type="button"
        onClick={() => {
          addTodo(todo);
          setTodo("");
        }}
      ></button>
    </div>
  );
}
