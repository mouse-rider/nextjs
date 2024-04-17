import type { NextPage } from "next";
import styles from "./call-to-action.module.css";

const CallToAction: NextPage = () => {
  return (
    <section className={styles.callToAction}>
      <div className={styles.nextButtonArea}>
        <div className={styles.nextButtonAreaInner}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-1.svg"
          />
        </div>
        <button className={styles.button}>
          <b className={styles.next}>Next</b>
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
