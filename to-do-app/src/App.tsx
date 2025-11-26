import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import ErrorBoundary from "./components/errorBoundry";
import SearchBar from "./components/SearchBar";
import { loadTodos, saveToDos } from "./utils/storage";
import type { Todo } from "./types";
import { useDebounce } from "./hooks/useDebounce";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => loadTodos());
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search, 400);

  // when ever some data change in todos hit the save function
  useEffect(() => {
    saveToDos(todos);
  }, [todos]);

  const addTodos = useCallback((text: string) => {
    const newTodos: Todo = {
      id: uuidv4(),
      text: text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos((prev) => [...prev, newTodos]);
  }, []);

  const toggleTodos = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const filtered = useMemo((): Todo[] => {
    const q = debounced.trim().toLowerCase();
    if (!q) return todos;
    return todos.filter((todo) => todo.text.toLowerCase().includes(q));
  }, [todos, debounced]);

  return (
    <ErrorBoundary>
      <div style={{ maxWidth: 600, margin: "40px auto", padding: "20px" }}>
        <h1>React 19 To-Do (Production Ready) </h1>
        <SearchBar value={search} onChange={setSearch} />
        <TodoInput onAdd={addTodos} />
        <TodoList
          todos={filtered}
          onDelete={deleteTodo}
          ontoggle={toggleTodos}
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;
