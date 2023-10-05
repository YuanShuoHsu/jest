import MainContentTemplate from "../MainContentTemplate";
import MainContent08Button from "./MainContent08Button";

import styles from "./index.module.scss";

export default function MainContent08() {
  const data = {
    titles: ["08", "測什麼", "知識點", "參考/延伸閱讀"],
    lists: [
      {
        item: "@testing-library/react-hooks",
      },
    ],
    referenceItems: [
      {
        label: "@testing-library/react-hooks",
        link: "https://react-hooks-testing-library.com/usage/basic-hooks",
      },
    ],
    buttonComponent: <MainContent08Button />,
  };

  return (
    <div className={styles.mainContent08}>
      <MainContentTemplate data={data} />
    </div>
  );
}
