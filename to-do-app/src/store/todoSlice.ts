import { type StateCreator } from "zustand";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

type TodoApi = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

export interface TodoSlice {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: number) => void;
  isloading: boolean;
  fetchTodos: () => Promise<void>;
}

export const createTodoSlice: StateCreator<TodoSlice> = (set) => ({
  todos: [],
  isloading: false,
  addTodo: (title) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), title, completed: false }],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
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
});
