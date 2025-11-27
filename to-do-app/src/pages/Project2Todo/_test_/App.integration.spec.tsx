import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../../../App";

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

  // search debounce
  const search = screen.getByRole("search") as HTMLInputElement;
  fireEvent.change(search, { target: { value: "write" } });

  // wait for some time to take action of debounce
  // await waitFor(
  //   () => expect(screen.queryByText("Fix Bug")).not.toBeInTheDocument(),
  //   { timeout: 1000 }
  // );

  await waitFor(
    () => expect(screen.queryByText("fix bug")).not.toBeInTheDocument,
    { timeout: 1000 }
  );

  // toggle
  const checkbox = screen.getByLabelText(
    "/Mark Write tests as/i"
  ) as HTMLInputElement;
  fireEvent.click(checkbox);
  expect(checkbox.checked).toBe(true);

  // delete
  const deleteBtn = screen.getByRole("button", {
    name: "/delete write test/i",
  });
  fireEvent.click(deleteBtn);
  await waitFor(
    () => expect(screen.getByText("/Write tests")).not.toBeInTheDocument
  );
});
