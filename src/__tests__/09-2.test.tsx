import { screen, render } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import Trade from "../components/Main/MainContent/MainContent09/MainContent09Trade";

test("<Trade />", () => {
  // gogo
  jest.spyOn(global.Math, "random").mockReturnValue(0.1);

  render(<Trade wood={50} />);

  expect(screen.getByTestId("sell").textContent).toBe("賣完，得到 $7000");
});
