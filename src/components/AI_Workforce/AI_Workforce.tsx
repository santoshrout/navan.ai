import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.css";

const AI_Workforce = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <section className={styles.features}>
        <h1 data-aos="fade-up" className={styles.feature_header_black}>
          An AI Workforce to build{" "}
          <span className={styles.feature_header}>10X Growth</span>
        </h1>

        <p data-aos="fade-up" className={styles.feature_subtitle2}>
          Navan AI helps you to use the right AI Agents and build your AI
          Workforce effortlessly, simplifying Cataloging, Marketing, and Sales
          operations for any e-Commerce company.
        </p>
        <p data-aos="fade-up" className={styles.feature_subtitle2}>
          Whether you are a beginner or an experienced professional, Navan AI
          provides the tools and support you need to scale your e-Commerce
          business using AI.
        </p>
        {/* <div
          data-aos="fade-up"
          className={clsx("hero", styles.common_layer_bg, styles.layer_bg)}
        > */}
        {/* <div
            className={clsx(
              "hero",
              styles.common_layer_bg,
              styles.layer_bg_vid
            )}
          ></div> */}
        {/* </div> */}
      </section>
    </>
  );
};

export default AI_Workforce;
