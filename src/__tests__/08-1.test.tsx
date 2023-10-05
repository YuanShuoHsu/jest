import { render, act } from "@testing-library/react";
import useCounter from "../components/Main/MainContent/MainContent08/MainContent08UseCounter";

test("should increment counter", () => {
  // gogo
  let result;
  function TestCounter() {
    result = useCounter();
    return null;
  }
  render(<TestCounter />);
  expect(result.count).toBe(0);
  act(() => {
    result.increment();
  });
  expect(result.count).toBe(1);
});
