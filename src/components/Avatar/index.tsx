import React, { ComponentProps } from "react";
import styles from "./styles.module.css";

interface AvatarProps extends ComponentProps<'img'>{
  hasBorder?: boolean
}

export const Avatar = ({  hasBorder = true, ...props }: AvatarProps) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
};
