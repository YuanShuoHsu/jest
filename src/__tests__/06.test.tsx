import { screen, render } from "@testing-library/react";
import Button, {
  ButtonType,
} from "../components/Main/MainContent/MainContent06/MainContent06Button";

// before
describe("Button with diferrent type", () => {
  test("with type A", async () => {
    render(<Button type={ButtonType.A} />);
    expect(screen.getByText(/hi/i)).toHaveStyle("background-color:#22c55e");
  });
  test("with type B", async () => {
    render(<Button type={ButtonType.B} />);
    expect(screen.getByText(/hi/i)).toHaveStyle("background-color:#3b82f6");
  });
  test("with type C", async () => {
    render(<Button type={ButtonType.C} />);
    expect(screen.getByText(/hi/i)).toHaveStyle("background-color:#ef4444");
  });
  test("with type X", async () => {
    render(<Button type={"X"} />);
    expect(screen.getByText(/hi/i)).toHaveStyle("background-color:#22c55e");
  });
});

// after
// describe("Button with diferrent type", () => {
//   test("with all type", async () => {
//     const { rerender } = render(<Button type={ButtonType.A} />);
//     expect(screen.getByText(/hi/i)).toHaveStyle("background-color:#22c55e");

//     rerender(<Button type={ButtonType.B} />);
//     expect(screen.getByText(/hi/i)).toHaveStyle("background-color:#3b82f6");

//     rerender(<Button type={ButtonType.C} />);
//     expect(screen.getByText(/hi/i)).toHaveStyle("background-color:#ef4444");

//     rerender(<Button type={"X"} />);
//     expect(screen.getByText(/hi/i)).toHaveStyle("background-color:#22c55e");
//   });
// });

// test.each(table)(name, fn, timeout)
// test.each([
//   [ButtonType.A, "#22c55e"],
//   [ButtonType.B, "#3b82f6"],
//   [ButtonType.C, "#ef4444"],
//   ["X", "#22c55e"],
// ])("type %s will has style %s", (type, expected) => {
//   render(<Button type={type} />);
//   expect(screen.getByText(/hi/i)).toHaveStyle(expected);
// });

// test.each([
//   { type: ButtonType.A, expected: "#22c55e" },
//   { type: ButtonType.B, expected: "#3b82f6" },
//   { type: ButtonType.C, expected: "#ef4444" },
//   { type: "X", expected: "#22c55e" },
// ])("type $type will has style $expected", ({ type, expected }) => {
//   render(<Button type={type} />);
//   expect(screen.getByText(/hi/i)).toHaveStyle(expected);
// });

// test.each`
//   type            | expected
//   ${ButtonType.A} | ${"background-color: #22c55e;"}
//   ${ButtonType.B} | ${"background-color: #3b82f6"}
//   ${ButtonType.C} | ${"background-color: #ef4444"}
//   ${"X"}          | ${"background-color: #22c55e"}
// `("type $type will has style $expected", ({ type, expected }) => {
//   render(<Button type={type} />);
//   expect(screen.getByText(/hi/i)).toHaveStyle(expected);
// });
