import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../components/Main/MainContent/MainContent03/MainContent03Button";

test("Button onclick", async () => {
  // 準備 (Arrange)
  const content = "Click";
  const handleClick = jest.fn();

  // 執行 (Act)
  render(<Button content={content} onClick={handleClick} />);
  fireEvent.click(screen.getByText(/click/i));
  // userEvent.click(screen.getByText(/click/i));

  // 驗證 (Assert)
  expect(handleClick).toHaveBeenCalledTimes(1);
});
