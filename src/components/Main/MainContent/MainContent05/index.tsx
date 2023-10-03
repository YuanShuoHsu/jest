import MainContentTemplate from "../MainContentTemplate";
import MainContent05Button from "./MainContent05Button";

import styles from "./index.module.scss";

export default function MainContent05() {
  const data = {
    titles: ["05", "測什麼", "知識點", "參考/延伸閱讀"],
    lists: [
      {
        item: "screen.debug() | debug(container) | debug(container.firstChild)",
      },
      {
        item: "jest-styled-components",
      },
    ],
    referenceItems: [
      {
        label: "jest-styled-components",
        link: "https://github.com/styled-components/jest-styled-components",
      },
      {
        label: "container",
        link: "https://testing-library.com/docs/react-testing-library/api/#container-1",
      },
    ],
    buttonComponent: <MainContent05Button />,
  };

  return (
    <div className={styles.mainContent05}>
      <MainContentTemplate data={data} />
    </div>
  );
}
