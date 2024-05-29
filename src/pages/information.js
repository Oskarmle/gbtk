import React from "react";
import "../styles/information.css";
import Information_start from "../components/informationStart";
import Footer from "../components/footer";
import Accordion from "../components/Accordion";
import Header from "../components/header";
import Indmeldelse from "../components/indmeldelse";
import "../styles/accordion.css";

export default function Information() {
  function UngdomClick() {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  }

  function SeniorClick() {
    window.scrollTo({
      top: 2100,
      behavior: "smooth",
    });
  }
  function PlusClick() {
    window.scrollTo({
      top: 1550,
      behavior: "smooth",
    });
  }
  function KontingentClick() {
    window.scrollTo({
      top: 2600,
      behavior: "smooth",
    });
  }
  function GeneralClick() {
    window.scrollTo({
      top: 3100,
      behavior: "smooth",
    });
  }
  function JoinClick() {
    window.scrollTo({
      top: 3400,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <Header></Header>
      <div className="information_container">
        <h1>Information</h1>
        <Information_start
          JoinClick={JoinClick}
          KontingentClick={KontingentClick}
          PlusClick={PlusClick}
          SeniorClick={SeniorClick}
          GeneralClick={GeneralClick}
          UngdomClick={UngdomClick}
        ></Information_start>
        <div className="information_section3">
          <Accordion
            KontingentClick={KontingentClick}
            PlusClick={PlusClick}
            SeniorClick={SeniorClick}
            GeneralClick={GeneralClick}
            UngdomClick={UngdomClick}
          ></Accordion>
          <Indmeldelse></Indmeldelse>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
