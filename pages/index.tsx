import type { NextPage } from "next";
import CallToAction from "../components/call-to-action";
import styles from "./index.module.css";

const Onboard: NextPage = () => {
  return (
    <div className={styles.onboard}>
      <div className={styles.hero}>
        <b className={styles.ryzaq}>RYZAQ</b>
        <div className={styles.skipWrapper}>
          <b className={styles.skip}>Skip</b>
        </div>
      </div>
      <main className={styles.doctorsIntroParent}>
        <section className={styles.doctorsIntro}>
          <img
            className={styles.illustrationIcon}
            loading="lazy"
            alt=""
            src="/illustration.svg"
          />
        </section>
        <section className={styles.doctorsDescription}>
          <h2 className={styles.discoverTopDoctors}>Discover Top Doctors</h2>
          <div className={styles.aTeamOf}>
            A team of professional doctors from many hospitals help you have the
            best healthcare experience wherever you are.
          </div>
        </section>
        <CallToAction />
      </main>
      <div className={styles.onboardChild} />
    </div>
  );
};

export default Onboard;
