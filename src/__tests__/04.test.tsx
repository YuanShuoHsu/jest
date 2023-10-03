import { act, render, fireEvent, screen } from "@testing-library/react";
import Button from "../components/Main/MainContent/MainContent04/MainContent04Button";

test("Button onclick", async () => {
  // 準備 (Arrange)
  jest.useFakeTimers();

  // 執行 (Act)
  render(<Button />);
  fireEvent.click(screen.getByText("你好"));

  // 驗證 (Assert)
  expect(screen.getByText("你好")).toHaveAttribute("disabled");
  expect(screen.getByText("你好")).toBeDisabled();
  act(() => {
    // jest.runAllTimers();
    jest.advanceTimersByTime(3000);
  });
  expect(screen.getByText("你好")).not.toHaveAttribute("disabled");
  expect(screen.getByText("你好")).not.toBeDisabled();
});
