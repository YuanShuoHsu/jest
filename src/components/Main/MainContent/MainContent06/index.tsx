import MainContentTemplate from "../MainContentTemplate";
import MainContent06Button from "./MainContent06Button";

import styles from "./index.module.scss";

export default function MainContent06() {
  const data = {
    titles: ["06", "測什麼", "知識點", "參考/延伸閱讀"],
    lists: [
      {
        item: "jest",
        subItems: ["describe.each", "test.each"],
      },
      {
        item: "@testing-library/react",
        subItems: ["rerender"],
      },
    ],
    referenceItems: [
      {
        label: "testeachtablename",
        link: "https://jestjs.io/docs/api#testeachtablename-fn-timeout",
      },
      {
        label: "describeeachtablename",
        link: "https://jestjs.io/docs/api#describeeachtablename-fn-timeout",
      },
      {
        label: "describename",
        link: "https://jestjs.io/docs/api#describename-fn",
      },
      {
        label: "testname",
        link: "https://jestjs.io/docs/api#testname-fn-timeout",
      },
      {
        label: "scripts-test-cases-test-suites",
        link: "https://www.ibm.com/docs/en/engineering-lifecycle-management-suite/lifecycle-management/7.0.0?topic=scripts-test-cases-test-suites",
      },
    ],
    buttonComponent: <MainContent06Button />,
  };

  return (
    <div className={styles.mainContent06}>
      <MainContentTemplate data={data} />
    </div>
  );
}
