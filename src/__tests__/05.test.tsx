import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Button from "../components/Main/MainContent/MainContent05/MainContent05Button";

test("StyledButton", async () => {
  // gogo
  const { container, debug } = render(<Button />);
  
  screen.debug();
  debug(container);
  debug(container.firstChild);

  expect(container).toMatchInlineSnapshot(`
.c0 {
  padding: 0 10px;
  min-width: 50px;
  height: 50px;
  background-color: #fff;
  color: #ffac27;
  font-weight: bold;
  border-radius: 4px;
  border: 2px solid #ffac27;
  cursor: pointer;
  transition: 0.2s opacity;
}

.c0:hover {
  opacity: 0.8;
}

<div>
  <button
    class="c0"
  >
    Hi
  </button>
</div>
`);
});
