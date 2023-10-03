import MainContentTemplate from "../MainContentTemplate";
import MainContent01Button from "./MainContent01Button";

import styles from "./index.module.scss";

export default function MainContent01() {
  const data = {
    titles: ["01", "測什麼", "知識點", "參考/延伸閱讀"],
    lists: [
      {
        item: "@testing-library/react",
        subItems: ["render", "screen", "screen.debug", "screen.getByRole"],
      },
      {
        item: "@testing-library/jest-dom",
        subItems: ["toHaveTextContent", "regex", "toBeInTheDocument"],
      },
    ],
    referenceItems: [
      {
        label: "toHaveTextContent",
        link: "https://github.com/testing-library/jest-dom#tohavetextcontent",
      },
      {
        label: "getByRole",
        link: "https://testing-library.com/docs/queries/byrole/",
      },
      {
        label: "aria",
        link: "https://www.w3.org/TR/html-aria/#docconformance",
      },
      {
        label: "render-result",
        link: "https://testing-library.com/docs/react-testing-library/api/#render-result",
      },
    ],
    buttonComponent: <MainContent01Button />,
  };

  return (
    <div className={styles.mainContent01}>
      <MainContentTemplate data={data} />;
    </div>
  );
}
