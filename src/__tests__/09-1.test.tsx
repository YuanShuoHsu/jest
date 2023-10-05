import { screen, render } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import Demo from "../components/Main/MainContent/MainContent09/MainContent09Button";

jest.mock(
  "../components/Main/MainContent/MainContent09/MainContent09Trade",
  () => () => "FakeTradeComponent"
);

test("Demo", () => {
  // gogo
});

test("Demo", () => {
  // gogo
});
