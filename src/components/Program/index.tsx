import React, { useEffect } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function Program(): JSX.Element {
  return (
    <div className={clsx(styles.container_main)}>
      <img
        width="240px"
        height="105.66px"
        src="/img/navan/nvidia_inception_No_Code_AI.webp"
        alt=""
        loading="lazy"
      />
      <img
        width="240px"
        height="105.66px"
        src="/img/navan/aws_active_No_Code_AI.webp"
        alt=""
        loading="lazy"
      />
      <img
        width="240px"
        height="105.66px"
        src="/img/navan/Microsoft.webp"
        alt=""
        loading="lazy"
      />
    </div>
  );
}
