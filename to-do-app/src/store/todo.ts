import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoStore = {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: number) => void;
};

export const useTodoStore = create<TodoStore>()(
  devtools(
    persist(
      (set) => ({
        todos: [],
        addTodo: (title: string) => {
          return set((state) => ({
            todos: [
              ...state.todos,
              { id: Date.now(), title, completed: false },
            ],
          }));
        },
        toggleTodo: (id: number) => {
          return set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
          }));
        },
      }),
      { name: "todo-storage" }
    )
  )
);
