import { sidebarItems } from "../../../datasets/sidebar";

import { useDispatch } from "react-redux";
import { selectedSidebar } from "../../../store/slice/sidebar";

import styles from "./index.module.scss";

export default function MainSidebar() {
  const dispatch = useDispatch();

  const handleSelectedSidebar = (label: string) => {
    dispatch(selectedSidebar(label));
  };

  return (
    <ul className={styles.mainSidebar}>
      {sidebarItems.map((item, index) => (
        <li
          key={index}
          className={styles.mainSidebar__item}
          onClick={() => handleSelectedSidebar(item.label)}
        >
          <span className={styles.mainSidebar__itemLabel}>{item.label}</span>
          <span className={styles.mainSidebar__itemContent}>
            {item.content}
          </span>
        </li>
      ))}
    </ul>
  );
}
