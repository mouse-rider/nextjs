import type { NextPage } from "next";
import NavigationAndGreeting from "../components/navigation-and-greeting";
import ServiceAndPackages from "../components/service-and-packages";
import Consultations from "../components/consultations";
import styles from "./home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <section className={styles.homePage}>
        <div className={styles.banner} />
        <div className={styles.banner1} />
        <img
          className={styles.illustrationIcon}
          loading="lazy"
          alt=""
          src="/illustration1.svg"
        />
      </section>
      <NavigationAndGreeting />
      <div className={styles.searchArea}>
        <div className={styles.search}>
          <img
            className={styles.searchNormalIcon}
            alt=""
            src="/search-normal.svg"
          />
          <input
            className={styles.searchChild}
            placeholder="Search"
            type="text"
          />
        </div>
      </div>
      <ServiceAndPackages />
      <section className={styles.consultationPreviews}>
        <Consultations
          consultationPair="/frame-6.svg"
          healthConsultation="Health consultation"
          mrJohn="Mr. John"
        />
        <Consultations
          consultationPair="/frame-6-1@2x.png"
          healthConsultation="Tooth Care"
          mrJohn="Mrs. Yumi"
          propPadding="var(--padding-xs) 11px var(--padding-xs) var(--padding-xs)"
          propMinWidth="72px"
          propMinWidth1="55px"
        />
      </section>
    </div>
  );
};

export default Home;
