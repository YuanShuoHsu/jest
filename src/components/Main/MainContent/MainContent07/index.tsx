import MainContentTemplate from "../MainContentTemplate";
import MainContent07Button from "./MainContent07Button";

import styles from "./index.module.scss";

export default function MainContent07() {
  const data = {
    titles: ["07", "測什麼", "知識點", "參考/延伸閱讀"],
    lists: [
      {
        item: "msw",
      },
      {
        item: "@testing-library/react",
        subItems: ["waitFor", "findby = getBy + waitFor", "within"],
      },
    ],
    referenceItems: [
      {
        label: "msw",
        link: "https://mswjs.io/docs/getting-started/integrate/node#setup",
      },
      {
        label: "waitFor",
        link: "https://testing-library.com/docs/dom-testing-library/api-async/#waitfor",
      },
    ],
    buttonComponent: <MainContent07Button />,
  };

  return (
    <div className={styles.mainContent07}>
      <MainContentTemplate data={data} />
    </div>
  );
}
