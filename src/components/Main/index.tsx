import MainSidebar from "./MainSidebar";
import MainContent from "./MainContent";

import styles from "./index.module.scss";

export default function Main() {
  return (
    <div className={styles.main}>
      <MainSidebar />
      <MainContent />
    </div>
  );
}
