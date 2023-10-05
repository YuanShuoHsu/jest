import useCounter from "../MainContent08UseCounter";

import styles from "./index.module.scss";

export default function MainContent08Button() {
  const { count, increment } = useCounter();

  return (
    <div>
      <p style={{ color: "#a855f7", fontSize: "18px", fontWeight: "bold" }}>
        {count}
      </p>
      <button className={styles.mainContent08Button} onClick={increment}>
        increment
      </button>
    </div>
  );
}
