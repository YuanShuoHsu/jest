import { useCallback, useState } from "react";

export default function MainContent08UseCounter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((x) => x + 1);
  }, []);

  return { count, increment };
}
