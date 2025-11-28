import { create } from "zustand";
import { createTodoSlice, type TodoSlice } from "./todoSlice";
import { persist, devtools } from "zustand/middleware";

type AppSlice = TodoSlice;

export const useAppStore = create<AppSlice>()(
  devtools(
    persist(
      (...a) => ({
        ...createTodoSlice(...a),
      }),
      { name: "todo-storage" }
    )
  )
);
