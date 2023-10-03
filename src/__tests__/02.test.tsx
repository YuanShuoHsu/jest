import { render, screen } from "@testing-library/react";
import Button from "../components/Main/MainContent/MainContent02/MainContent02Button";

test("Button displays correct content", async () => {
  // 準備
  const content = "ABC";

  // 執行
  render(<Button content={content} />);

  // 驗證
  expect(screen.getByRole("button")).toHaveTextContent(content);
});
