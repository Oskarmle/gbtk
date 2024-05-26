import React from "react";
import "../styles/information.css";
import Information_start from "../components/informationStart";
import Footer from "../components/footer";
import Accordion from "../components/Accordion";
import Header from "../components/header";

import Udmeldelse from "../components/udmeldelse";
import "../styles/accordion.css";

export default function Information() {
  return (
    <div>
      <Header></Header>
      <div className="information_container">
        <h1>Information</h1>
        <Information_start></Information_start>
        <div className="information_section3">
          <Accordion></Accordion>
          <Udmeldelse></Udmeldelse>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
