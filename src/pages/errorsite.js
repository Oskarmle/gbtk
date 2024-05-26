import React from "react";
import "../styles/errorsite.css";
import Footer from "../components/footer";
import Header from "../components/header";

export default function errorsite() {
  return (
    <div>
      <Header></Header>
      <div className="error_container">
        <img src="../../assets/icons/error.png" alt=""></img>
        <h1>Siden eksisterer ikke</h1>
        <p>Siden du prøver at tilgå findes ikke eller har fået sit navn ændret</p>
        <button className="errorbutton">Gå tilbage til forsiden</button>
      </div>
      <Footer></Footer>
    </div>
  );
}
