import React from "react";
import "../styles/index.css";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function handleContactClick(event) {
    event.preventDefault()
    navigate("/")
    setTimeout(() => {
      window.scrollTo({
        top:"2570",
        behavior: "smooth",
      })
    }, 100)
  }

  return (
    <div className="header_container">
      <div className="header">
        <a className="logo_img_container" href="/">
          <img src="../../assets/gbtk_dark_logo.png" alt="" className="logo" />
        </a>
        <a className="header_link" href="/">
          <h3>Forside</h3>
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
        <a className="header_link" href="shop" onClick={handleContactClick}>
          <h3>Kontakt</h3>
        </a>
      </div>
    </div>
  );
}
