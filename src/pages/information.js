import React from "react";
import "../styles/information.css";
import Information_start from "../components/information_start";
import Footer from "../components/footer";
import Accordion from "../components/Accordion";
import Information_path from "../components/information_path";
import Udmeldelse from "../components/udmeldelse";

export default function Information() {
  return (
    <div className="information_container">
      <h1>Information</h1>
      <Information_start></Information_start>
      <div className="information_section3">
        <div className="section3_content">
          <Information_path></Information_path>
          <div className="path_line"></div>
          <Accordion></Accordion>
        </div>
        <div className="section3_content">
          <Information_path></Information_path>
          <div className="path_line"></div>
          <Accordion></Accordion>
        </div>
        <div className="section3_content">
          <Information_path></Information_path>
          <div className="path_line"></div>
          <Accordion></Accordion>
        </div>
        <div className="section3_content">
          <Information_path></Information_path>
          <div className="path_line"></div>
          <Accordion></Accordion>
        </div>
        <div className="section3_content">
          <Information_path></Information_path>
          <div className="path_line"></div>
          <Accordion></Accordion>
        </div>
      </div>
      <Udmeldelse></Udmeldelse>
      <Footer></Footer>
    </div>
  );
}