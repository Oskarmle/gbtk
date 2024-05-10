import React from "react";
import "../../styles/section3.css";
import { useNavigate } from "react-router-dom";

export default function Section3_60plus() {
  const navigate = useNavigate();

  function plusClick(event) {
    event.preventDefault();
    navigate("information");
    setTimeout(() => {
      window.scrollTo({
        top: "2100",
        behavior: "smooth",
      });
    }, 100);
  }

  return (
    <div className="fp_section3_container">
      <img src="../../assets/60plus.jpg" alt="" />
      <div className="text_section3">
        <h4 className="section3_header">60+</h4>
        <p className="section3_text">
          Der hygges og spilles på livet løs ved samtlige 12 borde. Alle kan
          være med og heldigvis er der mange både damer og herrer, med meget
          forskelligt niveau og teknikker
        </p>
        <p className="section3_CTA" onClick={plusClick}>
          Læs mere her
        </p>
      </div>
    </div>
  );
}
