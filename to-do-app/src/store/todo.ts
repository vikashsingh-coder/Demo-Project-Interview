import { create } from "zustand";

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

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (title: string) => {
    return set((state) => ({
      todos: [...state.todos, { id: Date.now(), title, completed: false }],
    }));
  },
  toggleTodo: (id: number) => {
    return set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },
}));
