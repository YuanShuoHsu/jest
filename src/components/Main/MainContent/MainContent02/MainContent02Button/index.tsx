import styles from "./index.module.scss";

interface MainContent02ButtonProps {
  content: string;
}

export default function MainContent02Button({
  content,
}: MainContent02ButtonProps) {
  return <button className={styles.mainContent02Button}>{content}</button>;
}
