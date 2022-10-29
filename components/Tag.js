import styles from "../styles/Projects.module.css";

export default function Tag({ name }) {
  return (
    <li className={styles.tag}>
      <span className={styles.tagName}>{name}</span>
    </li>
  );
}
