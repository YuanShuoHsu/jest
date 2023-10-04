import { useState } from "react";

import axios from "axios";

import styles from "./index.module.scss";

export function getData() {
  return axios.get("/fake-data");
}

export default function MainContent07Button() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  return (
    <div>
      <button
        className={styles.mainContent07Button}
        onClick={() => {
          setIsLoading(true);
          getData()
            .then((response) => {
              setData(response.data);
            })
            .catch((e) => {
              setError(e.response.data);
            })
            .finally(() => {
              setIsLoading(false);
            });
        }}
      >
        請按
      </button>
      {isLoading ? (
        <div>Loading........</div>
      ) : (
        <ul>
          {data.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      )}
      {error && error}
    </div>
  );
}
