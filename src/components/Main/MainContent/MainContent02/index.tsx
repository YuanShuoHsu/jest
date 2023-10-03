import MainContentTemplate from "../MainContentTemplate";
import MainContent02Button from "./MainContent02Button";

import styles from "./index.module.scss";

export default function MainContent02() {
  const data = {
    titles: ["02", "測什麼", "知識點", "參考/延伸閱讀"],
    lists: [
      {
        title: "測試範本",
        subItems: ["準備環境/執行/驗證", "AAA (Arrange-Act-Assert) pattern"],
      },
    ],
    referenceItems: [
      {
        label: "ARRANGE-ACT-ASSERT: A PATTERN FOR WRITING GOOD TESTS",
        link: "https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/",
      },
    ],
    buttonComponent: <MainContent02Button content={"ABC"} />,
  };

  return (
    <div className={styles.mainContent02}>
      <MainContentTemplate data={data} />;
    </div>
  );
}
