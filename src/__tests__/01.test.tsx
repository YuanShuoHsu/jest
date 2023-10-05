import { render, screen } from "@testing-library/react";

import Button from "../components/Main/MainContent/MainContent01/MainContent01Button";

test("Button displays hi", async () => {
  // gogo
 render(<Button />);
  // screen.debug();
  expect(screen.getByRole("button")).toHaveTextContent(/^hi$/i);
  expect(
    screen.getByRole("button", {
      name: /^hi$/i,
    })
  ).toBeInTheDocument();
});
