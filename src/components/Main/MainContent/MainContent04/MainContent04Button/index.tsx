import { useState } from "react";

import styles from "./index.module.scss";

export default function MainContent04Button() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div>
      {isLoading && <p>loading...</p>}
      <button
        className={styles.mainContent04Button}
        onClick={() => {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 3000);
        }}
        disabled={isLoading}
      >
        你好
      </button>
    </div>
  );
}
