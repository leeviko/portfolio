import styles from "../styles/Skills.module.css";

const Skill = ({ name, progress }) => {
  return (
    <div className={styles.skill}>
      <span className={styles.skillName}>{name}</span>
      <div className={styles.progressBar}>
        <div
          className={`${styles.progress} ${styles.green}`}
          style={{ width: progress }}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
