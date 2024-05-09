import React from "react";
import "../styles/kalender.css";
import Footer from "../components/footer";

export default function Kalender() {
  return (
    <div>
      <div className="calender">
        <h1>Kalender</h1>
        <iframe
          title="kalender"
          src="https://www.holdsport.net/klub/gladsaxe-bordtennisklub/kalender"
          width="1440"
          height="1400"
          // scrolling="no"
          // style="border:none;"
        ></iframe>
      </div>
      <Footer></Footer>
    </div>
  );
}
