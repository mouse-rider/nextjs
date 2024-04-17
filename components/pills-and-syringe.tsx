import type { NextPage } from "next";
import styles from "./pills-and-syringe.module.css";

export type PillsAndSyringeType = {
  pill?: string;
  medicine?: string;
};

const PillsAndSyringe: NextPage<PillsAndSyringeType> = ({ pill, medicine }) => {
  return (
    <div className={styles.pillsAndSyringe}>
      <div className={styles.iconPair}>
        <img className={styles.pillIcon} loading="lazy" alt="" src={pill} />
      </div>
      <div className={styles.medicine}>{medicine}</div>
    </div>
  );
};

export default PillsAndSyringe;
