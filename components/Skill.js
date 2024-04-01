import Image from "next/image";
import styles from "../styles/Skills.module.css";

const Skill = ({ name, icon = null }) => {
  return (
    <li className={styles.skill}>
      <span className={styles.skillName}>
        {icon && (
          <Image
            className={styles.skillIcon}
            alt={name}
            src={`/images/skills/${icon}.svg`}
            width={16}
            height={16}
            draggable={false}
          />
        )}
        {name}
      </span>
    </li>
  );
};

export default Skill;
