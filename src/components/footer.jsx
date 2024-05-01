import React from "react";
import "../styles/index.css";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <a target="_blank" href="" className="footer_section1 footer_section">
          <p>Gladsaxe Stadion</p>
          <p>Gladsaxevej 200</p>
          <p>2860 Søborg</p>
        </a>
        <div className="vertical_line_white"></div>

        <a target="_blank" href="" className="footer_section2 footer_section">
          <p>Spørgsmål?</p>
          <p>Skriv en mail til</p>
          <p>Gladsaxebordtennisklub@gmail.com</p>
        </a>
        <div className="vertical_line_white"></div>

        <div className="footer_section3 footer_section">
          <a target="_blank" href="https://www.bordtennisportalen.dk/">Bordtennisportalen.dk</a>
          <a target="_blank" href="https://bordtennisdanmark.dk/">Bordtennisdanmark.dk</a>
          <a target="_blank" href="https://bat60.dk/">bat60.dk</a>
        </div>
        <div className="vertical_line_white"></div>

        <a className="footer_logo_container footer_section4">
          <img
            src="../../assets/gbtk_dark_logo.png"
            alt=""
            className="footer_logo"
          />
        </a>
      </div>
    </div>
  );
}
