import type { NextPage } from "next";
import styles from "./navigation-and-greeting.module.css";

const NavigationAndGreeting: NextPage = () => {
  return (
    <section className={styles.navigationAndGreeting}>
      <div className={styles.hamburgerMenu}>
        <div className={styles.hamMenu}>
          <img
            className={styles.burgerIconLines}
            loading="lazy"
            alt=""
            src="/burger-icon-lines.svg"
          />
        </div>
        <img
          className={styles.avtIcon}
          loading="lazy"
          alt=""
          src="/avt@2x.png"
        />
      </div>
      <div className={styles.greeting}>
        <h2 className={styles.helloAelita}>Hello Aelita !</h2>
        <div className={styles.howAreYou}>How are you feeling today ?</div>
      </div>
      <div className={styles.base}>
        <div className={styles.baseChild} />
        <button className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <img className={styles.frameItem} alt="" src="/vector-1.svg" />
          <div className={styles.frameInner} />
          <div className={styles.ellipseDiv} />
          <div className={styles.frameChild1} />
        </button>
        <h2 className={styles.periodicGeneralHealth}>
          Periodic general health check
        </h2>
        <button className={styles.registrationWrapper}>
          <b className={styles.registration}>Registration</b>
        </button>
      </div>
    </section>
  );
};

export default NavigationAndGreeting;
