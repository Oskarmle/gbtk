import React from "react";

export default function Kontingent() {
  return (
    <div className="kontingent_container">
      <div className="kontingent_header">
        <img src="../../assets/icons/kontingent_white.png" alt="" />
        <h2>Årskontingent 2023/2024</h2>
      </div>
      <div className="kontingent_content_parent">
        <div className="kontingent_content">
          <h3>Ungdom 7-18 år</h3>
          <div className="kontingent_line"></div>
          <div className="k_prices">
            <p>Begynder</p>
            <p>1.250 kr</p>
          </div>
          <div className="k_prices">
            <p>Øvede/Holdspiller</p>
            <p>1.500 kr</p>
          </div>
        </div>
        <div className="kontingent_content">
          <h3>Senior 19-59 år</h3>
          <div className="kontingent_line"></div>
          <div className="k_prices">
            <p>motionist - uden licens</p>
            <p>1.000 kr</p>
          </div>
          <div className="k_prices">
            <p>Holdspiller - med licens</p>
            <p>1.500 kr</p>
          </div>
        </div>
        <div className="kontingent_content">
          <h3>60+</h3>
          <div className="kontingent_line"></div>
          <div className="k_prices">
            <p>motionist - uden licens</p>
            <p>500 kr</p>
          </div>
          <div className="k_prices">
            <p>Holdspiller - med licens</p>
            <p>1.500 kr</p>
          </div>
        </div>
        <div className="kontingent_content">
          <h3>Andet</h3>
          <div className="kontingent_line"></div>
          <div className="k_prices">
            <p>INdmeldelsesgebyr</p>
            <p>100 kr</p>
          </div>
          <div className="k_prices">
            <p>Licens</p>
            <p>250 kr</p>
          </div>
          <div className="k_prices">
            <p>passiv medlem</p>
            <p>100 kr</p>
          </div>
        </div>
      </div>
    </div>
  );
}
