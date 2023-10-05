import MainContentTemplate from "../MainContentTemplate";
import MainContent09Button from "./MainContent09Button";

import intergration from "../../../../images/intergration-test.png";

import styles from "./index.module.scss";

export default function MainContent09() {
  const data = {
    titles: ["09", "測什麼", "知識點", "參考/延伸閱讀"],
    lists: [
      {
        item: "整合測試",
      },
      {
        item: "mock React component",
      },
      {
        item: "jest.spy",
      },
      {
        item: "getByTestId",
      },
    ],
    referenceItems: [
      {
        label: "jest mock component",
        link: "https://jestjs.io/docs/tutorial-react#snapshot-testing-with-mocks-enzyme-and-react-16",
      },
      {
        label: "mocking-an-event-handler",
        link: "https://nsblog.hashnode.dev/mocking-an-event-handler",
      },
    ],
    buttonComponent: (
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <MainContent09Button />
        <img
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          src={intergration}
          alt="intergration"
        />
      </div>
    ),
  };

  return (
    <div className={styles.mainContent09}>
      <MainContentTemplate data={data} />
    </div>
  );
}
