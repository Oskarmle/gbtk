import React from "react";
import "../../styles/section3.css";

export default function Section3_senior() {
  return (
    <div className="fp_section3_container">
      <img src="../../assets/senior.jpg" alt="" />
      <div className="text_section3">
        <h4 className="section3_header">Senior</h4>
        <p className="section3_text">
          Til seniortræning er der plads til alle uanset niveau.
        </p>
        <p className="section3_text">
          Vi spiller mandag og onsdag fra 19-21, og mandage fra 19-20 har vi
          træning med en af vores gode trænere.
        </p>
        <a href="" className="section3_CTA">
          Læs mere her
        </a>
      </div>
    </div>
  );
}
