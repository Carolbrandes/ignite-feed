import React from "react";
import styles from "./styles.module.css";

export const Avatar = ({ src, hasBorder = true }) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
};
