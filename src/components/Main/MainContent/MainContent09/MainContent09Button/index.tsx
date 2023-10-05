import { useState } from "react";

import Trade from "../MainContent09Trade";
import Decorate from "../MainContent09Decorate";

import styles from "./index.module.scss";

export default function MainContent09Button() {
  const [wood, setWood] = useState(100);

  return (
    <div>
      <div style={{ padding: "10px", border: "1px solid #22c55e" }}>
        <h3>{wood}個木頭可以做什麼？</h3>
        <button
          className={styles.mainContent09Button}
          onClick={() => {
            setWood(200);
          }}
        >
          加點木頭
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ padding: "10px", border: "1px solid #3b82f6", flex: 1 }}>
          <Trade wood={wood / 2} />
        </div>
        <div style={{ padding: "10px", border: "1px solid #ef4444", flex: 1 }}>
          <Decorate wood={wood / 2} />
        </div>
      </div>
    </div>
  );
}
