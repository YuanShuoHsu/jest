import { sidebarItems } from "../../../datasets/sidebar";

import { useSelector } from "react-redux";
import { RootState } from "../../../store";
// import { selectedSidebar } from "../../../store/slice/sidebar";

import styles from "./index.module.scss";

export default function MainSidebar() {
  const selectedSidebar = useSelector(
    (state: RootState) => state.sidebar.value
  );
  console.log(selectedSidebar)

  return (
    <ul className={styles.mainSidebar}>
      {sidebarItems.map((item, index) => (
        <li key={index} className={styles.mainSidebar__item}>
          <span className={styles.mainSidebar__itemLabel}>{item.label}</span>
          <span className={styles.mainSidebar__itemContent}>
            {item.content}
          </span>
        </li>
      ))}
    </ul>
  );
}
