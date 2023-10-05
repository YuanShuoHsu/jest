import { renderHook, act } from "@testing-library/react";
import useCounter from "../components/Main/MainContent/MainContent08/MainContent08UseCounter";

test("should increment counter", () => {
  // gogo
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(1);
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(2);
});
