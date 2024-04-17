import type { NextPage } from "next";
import PillsAndSyringe from "./pills-and-syringe";
import styles from "./service-and-packages.module.css";

const ServiceAndPackages: NextPage = () => {
  return (
    <section className={styles.serviceAndPackages}>
      <div className={styles.serviceHeader}>
        <div className={styles.serviceTitleContainer}>
          <b className={styles.ourService}>Our Service</b>
        </div>
        <div className={styles.viewAll}>View all</div>
      </div>
      <div className={styles.packageOptions}>
        <div className={styles.medicalPackage}>
          <div className={styles.medicationIcons}>
            <PillsAndSyringe pill="/pill.svg" medicine="Medicine" />
            <PillsAndSyringe pill="/syringe.svg" medicine="Vaccine" />
          </div>
          <b className={styles.ourPackage}>Our Package</b>
        </div>
        <div className={styles.dentalAndHeartPackage}>
          <div className={styles.dentalHeartIcons}>
            <div className={styles.iconPairContainer}>
              <div className={styles.toothHeartbeatPair}>
                <img
                  className={styles.toothIcon}
                  loading="lazy"
                  alt=""
                  src="/tooth.svg"
                />
              </div>
              <div className={styles.toothHeartbeatPair1}>
                <img
                  className={styles.heartbeatIcon}
                  loading="lazy"
                  alt=""
                  src="/heartbeat.svg"
                />
              </div>
            </div>
            <div className={styles.dentalHeartLabels}>
              <div className={styles.toothCare}>Tooth Care</div>
              <div className={styles.heart}>Heart</div>
            </div>
          </div>
          <div className={styles.viewAllPackages}>
            <div className={styles.viewAll1}>View all</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAndPackages;
