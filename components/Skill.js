import styles from "../styles/Skills.module.css";

const Skill = ({ name }) => {
  return (
    <li className={styles.skill}>
      <span className={styles.skillName}>{name}</span>
    </li>
  );
};

export default Skill;
