import { useState } from "react";

import HeaderSidebar from "./HeaderSidebar";

import styles from "./index.module.scss";

export default function Header() {
  const [headerSidebarVisible, setHeaderSidebarVisible] = useState(false);

  const handleHeaderSidebarVisible = () => {
    setHeaderSidebarVisible(true);
  };

  return (
    <div className={styles.header}>
      <span className={styles.header__button} />
      <h2 className={styles.header__title}>
        React / Jest / React Testing Library
      </h2>
      <button
        className={styles.header__button}
        onClick={handleHeaderSidebarVisible}
      >
        <svg
          className={styles.header__buttonIcon}
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
      <HeaderSidebar
        headerSidebarVisible={headerSidebarVisible}
        setHeaderSidebarVisible={setHeaderSidebarVisible}
      />
    </div>
  );
}
