import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

import styles from "./index.module.scss";

const componentMap: {
  [key: string]: React.LazyExoticComponent<() => JSX.Element>;
} = {
  "01": lazy(() => import("./MainContent01")),
  "01-1": lazy(() => import("./MainContent01_1")),
  "02": lazy(() => import("./MainContent02")),
  "03": lazy(() => import("./MainContent03")),
  "04": lazy(() => import("./MainContent04")),
  "05": lazy(() => import("./MainContent05")),
  "06": lazy(() => import("./MainContent06")),
  "07": lazy(() => import("./MainContent07")),
};

export default function MainContent() {
  const sidebar = useSelector((state: RootState) => state.sidebar.value);
  const LazyComponent = componentMap[sidebar];

  return (
    <div className={styles.mainContent}>
      <Suspense fallback={<div>Loading...</div>}>
        {LazyComponent && <LazyComponent />}
      </Suspense>
    </div>
  );
}
