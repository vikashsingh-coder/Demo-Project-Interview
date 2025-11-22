import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: 400) {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, [value, delay]);

  return debounce;
}
