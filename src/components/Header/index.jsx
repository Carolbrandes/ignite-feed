import React from "react";
import style from "./style.module.css";
import igniteLogo from "../../assets/ignite-logo.svg";

export const Header = () => {
  return (
    <header className={style.header}>
      <img src={igniteLogo} alt="Ignite feed" />
    </header>
  );
};
