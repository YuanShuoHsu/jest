import { Link } from "react-router-dom";
import styles from "./index.module.scss";

interface MainContentData {
  titles: string[];
  lists: { title: string; subItems?: string[] }[];
  referenceItems: { label: string; link: string }[];
  buttonComponent: React.ReactNode;
}

interface MainContentProps {
  data: MainContentData;
}

export default function MainContentTemplate({ data }: MainContentProps) {
  return (
    <div className={styles.mainContentTemplate}>
      <h2 className={styles.mainContentTemplate__title}>{data.titles[0]}</h2>
      <h2 className={styles.mainContentTemplate__title}>{data.titles[1]}</h2>
      {data.buttonComponent}
      <h2 className={styles.mainContentTemplate__title}>{data.titles[2]}</h2>
      <ul className={styles.mainContentTemplate__list}>
        {data.lists.map((list, index) => (
          <li key={index} className={styles.mainContentTemplate__listItem}>
            {list.title}
            <ul className={styles.mainContentTemplate__subList}>
              {list.subItems?.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className={styles.mainContentTemplate__subListItem}
                >
                  {subItem}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <h2 className={styles.mainContentTemplate__title}>{data.titles[3]}</h2>
      <ul className={styles.mainContentTemplate__list}>
        {data.referenceItems.map((item, index) => (
          <li key={index} className={styles.mainContentTemplate__listItem}>
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
