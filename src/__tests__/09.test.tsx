import { screen, render } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import Demo from "../components/Main/MainContent/MainContent09/MainContent09Button";

jest.mock(
  "../components/Main/MainContent/MainContent09/MainContent09Trade",
  () => () => "FakeTradeComponent"
);

test("Demo", () => {
  // gogo
  const { container } = render(<Demo />);
  expect(container).toMatchInlineSnapshot(`
<div>
  <div>
    <div
      style="padding: 10px; border: 1px solid #22c55e;"
    >
      <h3>
        100
        個木頭可以做什麼？
      </h3>
      <button
        class="mainContent09Button"
      >
        加點木頭
      </button>
    </div>
    <div
      style="display: flex;"
    >
      <div
        style="padding: 10px; border: 1px solid #3b82f6; flex: 1;"
      >
        FakeTradeComponent
      </div>
      <div
        style="padding: 10px; border: 1px solid #ef4444; flex: 1;"
      >
        <div>
          <h3>
            50
            個木頭拿去裝飾
          </h3>
          <div>
            拿去裝飾小花園的圍籬
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`);

  // expect(
  //   screen.getByRole("heading", {
  //     name: /100個木頭可以做什麼？/i,
  //   })
  // ).toBeInTheDocument();

  // // screen.debug();
  // expect(screen.getByText(/FakeTradeComponent/i)).toBeInTheDocument();

  // // expect(
  // //   screen.getByRole("heading", {
  // //     name: /50個木頭拿去交易？/i,
  // //   })
  // // ).toBeInTheDocument();

  // // expect(screen.getByText(/賣完，得到 \$ 20055/i)).toBeInTheDocument();

  // expect(
  //   screen.getByRole("heading", {
  //     name: /50個木頭拿去裝飾/i,
  //   })
  // ).toBeInTheDocument();

  // expect(screen.getByText(/拿去裝飾小花園的圍籬/i)).toBeInTheDocument();
});
