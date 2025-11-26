import { useDebounce } from "./../useDebounce";
import { act, renderHook } from "@testing-library/react";

jest.useFakeTimers();

describe("useDebounce", () => {
  it("should debounce value", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "a", delay: 200 },
      }
    );

    expect(result.current).toBe("a");

    // change value
    rerender({ value: "ab", delay: 200 });
    expect(result.current).toBe("a");

    act(() => {
      jest.advanceTimersByTime(200);
    });

    expect(result.current).toBe("ab");
  });
});
