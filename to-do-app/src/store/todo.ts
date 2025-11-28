import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoApi = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

type TodoStore = {
  todos: Todo[];
  isloading: boolean;
  addTodo: (title: string) => void;
  toggleTodo: (id: number) => void;
  fetchTodos: () => Promise<void>;
};

export const useTodoStore = create<TodoStore>()(
  devtools(
    persist(
      (set) => ({
        todos: [],
        isloading: false,
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
        fetchTodos: async () => {
          set({ isloading: true });

          const res = await fetch("https://dummyjson.com/todos");
          const data = await res.json();

          set({
            todos: data.todos.map((todo: TodoApi) => ({
              id: todo.id,
              title: todo.todo,
              completed: todo.completed,
            })),
            isloading: false,
          });
        },
      }),
      { name: "todo-storage" }
    )
  )
);
