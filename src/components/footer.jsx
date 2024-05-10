import React from "react";
import "../styles/index.css";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <a target="_blank" href="https://www.google.com/maps/place/Gladsaxe+Bordtennisklub/@55.7320326,12.4956897,17z/data=!4m15!1m8!3m7!1s0x465251f052f51fa7:0xdf8e83281d6520ec!2sGladsaxevej+200,+2860+S%C3%B8borg!3b1!8m2!3d55.7320326!4d12.4982646!16s%2Fg%2F11c3q3fnhq!3m5!1s0x46524e3c95462bab:0x7c228d86cbb8bf68!8m2!3d55.7320326!4d12.4982646!16s%2Fg%2F11xq_w2jf?entry=ttu" className="footer_section1 footer_section">
          <p>Gladsaxe Stadion</p>
          <p>Gladsaxevej 200</p>
          <p>2860 Søborg</p>
        </a>
        <div className="vertical_line_white"></div>

        <a target="_blank" href="mailto:Gladsaxebordtennisklub@gmail.com" className="footer_section2 footer_section">
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

        <a className="footer_logo_container footer_section4" href="/">
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
