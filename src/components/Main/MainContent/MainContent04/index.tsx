import MainContentTemplate from "../MainContentTemplate";
import MainContent04Button from "./MainContent04Button";

import styles from "./index.module.scss";

export default function MainContent04() {
  const data = {
    titles: ["04", "測什麼", "知識點", "參考/延伸閱讀"],
    lists: [
      {
        item: "jest.useFakeTimers()",
        subItems: ["runAllTimers", "advanceTimersByTime"],
      },
      {
        item: "act()",
      },
      {
        item: "fireEvent",
      },
      {
        item: "@testing-library/jest-dom",
        subItems: ["toHaveAttribute", "toBeDisabled"],
      },
    ],
    referenceItems: [
      {
        label: "act",
        link: "https://legacy.reactjs.org/docs/test-utils.html#act",
      },
      {
        label: "timer-mocks",
        link: "https://jestjs.io/docs/timer-mocks",
      },
    ],
    buttonComponent: <MainContent04Button />,
  };

  return (
    <div className={styles.mainContent04}>
      <MainContentTemplate data={data} />
    </div>
  );
}
