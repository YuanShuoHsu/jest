import { render, screen } from "@testing-library/react";

import Button from "../components/Main/MainContent/MainContent01_1/MainContent01_1Button";

test("Button displays hi", async () => {
  //gogo
  const { container, debug } = render(<Button />);

  expect(container).toMatchInlineSnapshot(`
<div>
  <button
    class="mainContent01_1Button"
  >
    Hi
  </button>
</div>
`);
  expect(container).toMatchSnapshot(``);
});
