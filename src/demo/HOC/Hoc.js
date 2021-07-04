import React from "react";
import styles from "./styles.module.css";

export default function Hoc(props) {
  console.log('props', props)
  return (
    <div>
      <p className={styles.text}>1</p>
      <span>{props.children}</span>
    </div>
  );
}
