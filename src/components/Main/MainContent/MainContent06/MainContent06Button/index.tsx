import styles from "./index.module.scss";

export enum ButtonType {
  A = "A",
  B = "B",
  C = "C",
}

interface MainContent06ButtonProps {
  type: ButtonType | string;
}

export default function MainContent06Button({
  type,
}: MainContent06ButtonProps) {
  const getCls = (type: ButtonType | string) => {
    const typeACls = "#22c55e";

    switch (type) {
      case ButtonType.A:
        return typeACls;
      case ButtonType.B:
        return "#3b82f6";
      case ButtonType.C:
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
