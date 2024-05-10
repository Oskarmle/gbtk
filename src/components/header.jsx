import React from "react";
import "../styles/index.css";
import "../styles/header.css";

export default function Header() {
  return (
    <div className="header_container">
      <div className="header">
        <a className="logo_img_container" href="/">
          <img src="../../assets/gbtk_dark_logo.png" alt="" className="logo" />
        </a>
        <a className="header_link" href="information">
          <h3>Information</h3>
        </a>
        <a className="header_link" href="kalender">
          <h3>Kalender</h3>
        </a>
        <a className="header_link" href="bestyrelse">
          <h3>Bestyrelse</h3>
        </a>
        <a className="header_link" href="shop">
          <h3>Butik</h3>
        </a>
      </div>
    </div>
  );
}
