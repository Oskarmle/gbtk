import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("tilmelding")
  }

  return (
    <div className="hero">
      <div className="overlay"></div>
      <img src="../../assets/background_hero_frontpage.jpg" alt="" />
      <div className="training">
        <h2>Overvejer du at begynde til bordtennis?</h2>
        <p className="hero_text">
          Vi tilbyder 2-3 træningsaftener, som er gratis, inden du indmelder
          dig.
        </p>
        <p>
          Medbring t-shirt, træningsbukser og indendørssko. Vi har lånebat til
          de første gange.
        </p>
        <div className="training_tryout">
          <p>Prøvetræning senior</p>
          <p>Mandage 19-21</p>
        </div>
        <div className="line_white"></div>
        <div className="training_tryout">
          <p>Prøvetræning ungdom</p>
          <p>Mandage 16.30-17.45</p>
        </div>
        <div className="line_white"></div>
        <div className="training_tryout">
          <p>Prøvetræning 60+</p>
          <p>Mandage 09-12</p>
        </div>
        <div className="line_white"></div>
        <button onClick={handleClick}>Tilmeld</button>
      </div>
    </div>
  );
}
