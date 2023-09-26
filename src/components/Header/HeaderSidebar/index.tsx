import React from "react";

import { sidebarItems } from "../../../datasets/sidebar";

import styles from "./index.module.scss";

interface HeaderSidebarProps {
  headerSidebarVisible: boolean;
  setHeaderSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HeaderSidebar({
  headerSidebarVisible,
  setHeaderSidebarVisible,
}: HeaderSidebarProps) {
  const handleHeaderSidebarVisible = () => {
    setHeaderSidebarVisible(false);
  };

  const handleHeaderSidebarList = (
    event: React.MouseEvent<HTMLUListElement>
  ) => {
    event.stopPropagation();
  };

  return (
    <div
      className={`${styles.headerSidebar} ${
        headerSidebarVisible ? styles["headerSidebar--active"] : ""
      }`}
      onClick={handleHeaderSidebarVisible}
    >
      <ul
        className={styles.headerSidebar__list}
        onClick={handleHeaderSidebarList}
      >
        {sidebarItems.map((item, index) => (
          <li key={index} className={styles.headerSidebar__listItem}>
            <span className={styles.headerSidebar__listItemLabel}>
              {item.label}
            </span>
            <span className={styles.headerSidebar__listItemContent}>
              {item.content}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
