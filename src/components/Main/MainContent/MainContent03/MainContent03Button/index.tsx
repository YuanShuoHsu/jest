import styles from "./index.module.scss";

interface MainContent03ButtonProps {
  content: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function MainContent03Button({
  content,
  onClick,
}: MainContent03ButtonProps) {
  return (
    <button className={styles.mainContent03Button} onClick={onClick}>
      {content}
    </button>
  );
}
