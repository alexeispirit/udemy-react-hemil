import { useEffect, useRef, useDebugValue } from "react";

const usePrevious = value => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = value;
  });

  useDebugValue(ref.current > 18 ? "too much" : "too small");

  return ref.current;
};

export default usePrevious;
