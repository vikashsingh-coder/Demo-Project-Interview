// import { useTodoStore } from "../../../store/todo";
import { useAppStore } from "../../../store";
import { useState, useEffect } from "react";

export function TodoZ() {
  //   const { addTodo } = useTodoStore();
  // Second way

  const [todo, setTodo] = useState("");
  // const addTodo = useTodoStore((s) => s.addTodo);
  const addTodo = useAppStore((s) => s.addTodo);
  // const fetchTodos = useTodoStore((s) => s.fetchTodos);
  const fetchTodos = useAppStore((s) => s.fetchTodos);
  // const isLoading = useTodoStore((s) => s.isloading);
  const isLoading = useAppStore((s) => s.isloading);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  if (isLoading) return <h2>Loading...</h2>;

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
