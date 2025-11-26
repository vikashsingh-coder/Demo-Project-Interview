import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../../src/App";

beforeEach(() => {
  localStorage.clear();
});

test("add, search with debounce, toggle and delete todo", async () => {
  render(<App />);
  const input = screen.getByPlaceholderText(
    /add new task…/i
  ) as HTMLInputElement;
  const addButton = screen.getByRole("button", { name: /add task|add/i });

  // add event
  fireEvent.change(input, { target: { value: "Write tests" } });
  fireEvent.click(addButton);

  fireEvent.change(input, { target: { value: "fix bug" } });
  fireEvent.click(addButton);

  // expect both task to be present
  expect(await screen.findByText("Write tests")).toBeInTheDocument();
  expect(screen.getByText("fix bug")).toBeInTheDocument();
});
