import { type Todo } from "../types";

export const loadTodos = (): Todo[] => {
  try {
    const raw = localStorage.getItem("TODOS_KEY");
    if (!raw) return [];
    const parsed = JSON.parse(raw);

    if (Array.isArray(parsed)) return [];
    return parsed;
  } catch (error) {
    if (error instanceof Error)
      console.log("err from loadTodos: ", error.message);
    return [];
  }
};

export const saveToDos = (todos: Todo[]): void => {
  try {
    localStorage.setItem("TODOS_KEY", JSON.stringify(todos));
  } catch (error) {
    if (error instanceof Error)
      console.log("error from saveToDos ", error.message);
  }
};
