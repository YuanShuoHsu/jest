import styles from "./index.module.scss";

type ButtonType = "A" | "B" | "C";

interface MainContent06ButtonProps {
  type: ButtonType | string;
}

export default function MainContent06Button({
  type,
}: MainContent06ButtonProps) {
  const getCls = (type: ButtonType | string) => {
    const typeACls = "#22c55e";

    switch (type) {
      case "A":
        return typeACls;
      case "B":
        return "#3b82f6";
      case "C":
        return "#ef4444";
      default:
        return "#22c55e";
    }
  };

  return (
    <button
      style={{ backgroundColor: getCls(type) }}
      className={styles.mainContent06Button}
    >
      Hi
    </button>
  );
}
