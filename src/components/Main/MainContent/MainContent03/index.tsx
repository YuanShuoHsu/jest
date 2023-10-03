import MainContentTemplate from "../MainContentTemplate";
import MainContent03Button from "./MainContent03Button";

import styles from "./index.module.scss";

export default function MainContent03() {
  const onClick = () => {
    alert("HI");
  };

  const data = {
    titles: ["03", "測什麼", "知識點", "參考/延伸閱讀"],
    lists: [
      {
        item: "jest.fn()",
      },
      {
        item: "fireEvent",
      },
      {
        item: "userEvent",
      },
      {
        item: "toHaveBeenCalledTimes",
      },
    ],
    referenceItems: [
      {
        label: "guide-events",
        link: "https://testing-library.com/docs/guide-events/",
      },
      {
        label: "ecosystem-user-event",
        link: "https://testing-library.com/docs/ecosystem-user-event/",
      },
      {
        label: "mock-functions",
        link: "https://jestjs.io/docs/mock-functions",
      },
    ],
    buttonComponent: <MainContent03Button content="ABC" onClick={onClick} />,
  };

  return (
    <div className={styles.mainContent03}>
      <MainContentTemplate data={data} />
    </div>
  );
}
