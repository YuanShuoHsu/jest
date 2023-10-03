import MainContentTemplate from "../MainContentTemplate";
import MainContent01Button from "./MainContent01_1Button";

import styles from "./index.module.scss";

export default function MainContent01_1() {
  const data = {
    titles: ["01-1", "測什麼", "知識點", "參考/延伸閱讀"],
    lists: [
      {
        title: "jest",
        subItems: ["toMatchSnapshot", "toMatchInlineSnapshot"],
      },
    ],
    referenceItems: [
      {
        label: "snapshot-testing",
        link: "https://jestjs.io/docs/snapshot-testing",
      },
    ],
    buttonComponent: <MainContent01Button />,
  };

  return (
    <div className={styles.mainContent01_1}>
      <MainContentTemplate data={data} />;
    </div>
  );
}
