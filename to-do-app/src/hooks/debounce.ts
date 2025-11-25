// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

// import { useEffect, useState } from "react";

// export function useDebounce<T>(value: T, delay = 400) {
//   const [debounce, setDebounce] = useState(value);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebounce(value);
//     }, delay);

//     return () => {
//       clearInterval(timer);
//     };
//   }, [value, delay]);

//   return debounce;
// }

const useDebounce = <T>(value: T, delay: number = 400) => {
  const [debounce, setDebounce] = useState<T>(value);

  useEffect(() => {
    const timer = setInterval(() => {
      setDebounce(value);
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, [value, delay]);

  return debounce;
};

export default useDebounce;
