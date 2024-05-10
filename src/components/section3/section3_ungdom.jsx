import React from "react";
import "../../styles/section3.css";
import { useNavigate } from "react-router-dom";

export default function Section3_ungdom() {
  const navigate = useNavigate();

  function ungdomClick(event) {
    event.preventDefault();
    navigate("information");
    setTimeout(() => {
      window.scrollTo({
        top: "1000",
        behavior: "smooth",
      });
    }, 100);
  }

  return (
    <div className="fp_section3_container">
      <img src="../../assets/ungdom.jpg" alt="" />
      <div className="text_section3">
        <h4 className="section3_header">Ungdom</h4>
        <p className="section3_text">
          Ungdomstræning er inddelt i 3 hold, Begynder, Øvede og Inviterede. Vi
          stræber efter at det skal være sjovt at lære, men samtidig prøve at
          blive bedre
        </p>
        <p className="section3_CTA" onClick={ungdomClick}>
          Læs mere her
        </p>
      </div>
    </div>
  );
}
