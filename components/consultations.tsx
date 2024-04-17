import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./consultations.module.css";

export type ConsultationsType = {
  consultationPair?: string;
  healthConsultation?: string;
  mrJohn?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const Consultations: NextPage<ConsultationsType> = ({
  consultationPair,
  healthConsultation,
  mrJohn,
  propPadding,
  propMinWidth,
  propMinWidth1,
}) => {
  const consultationsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const healthConsultationStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const mrJohnStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={styles.consultations} style={consultationsStyle}>
      <img
        className={styles.consultationPairIcon}
        loading="lazy"
        alt=""
        src={consultationPair}
      />
      <div
        className={styles.healthConsultation}
        style={healthConsultationStyle}
      >
        {healthConsultation}
      </div>
      <div className={styles.mrJohn} style={mrJohnStyle}>
        {mrJohn}
      </div>
    </div>
  );
};

export default Consultations;
