import {
  screen,
  render,
  fireEvent,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { server } from "../mocks/server";
import Button from "../components/Main/MainContent/MainContent07/MainContent07Button";

test("test api success", async () => {
  // gogo

  render(<Button />);

  const btn = screen.getByRole("button", {
    name: /請按/i,
  });
  userEvent.click(btn);

  // 驗證
  // expect(screen.getByText(/loading\.\.\.\.\.\.\.\./i)).toBeInTheDocument();
  await waitFor(() => {
    const loadingText = screen.queryByText(/loading\.\.\.\.\.\.\.\./i);
    expect(loadingText).toBeInTheDocument();
  });

  await waitFor(() => {
    // screen.debug();
    screen.getByRole("list");
  });

  const listItem = within(screen.getByRole("list")).getAllByRole("listitem");
  expect(listItem).toHaveLength(3);
  expect(listItem).toMatchInlineSnapshot(`
Array [
  <li>
    1
  </li>,
  <li>
    2
  </li>,
  <li>
    3
  </li>,
]
`);
});

// test("test api fail", async () => {
//   // gogo

//   // 準備
//   server.use(rest.get("/fake-data"), (req, res, ctx) => {
//     return res(ctx.status(400), ctx.json("SOMETHING_WRONG"));
//   });

//   // 執行
//   render(<Button />);

//   const btn = screen.getByRole("button", {
//     name: /請按/i,
//   });

//   userEvent.click(btn);

//   // 驗證
//   // expect(screen.getByText(/loading\.\.\.\.\.\.\.\./i)).toBeInTheDocument();
//   await waitFor(() => {
//     const loadingText = screen.queryByText(/loading\.\.\.\.\.\.\.\./i);
//     expect(loadingText).toBeInTheDocument();
//   });

//   // 1
//   // await waitFor(() => {
//   //   expect(screen.getByText(/SOMETHING_WRONG/i)).toBeInTheDocument();
//   // });

//   expect(await screen.findByText(/SOMETHING_WRONG/i)).toBeInTheDocument();
// });
