import React from "react";
import "../../styles/bestyrelse.css";
import Bestyrelse_card from "../../components/bestyrelse_card";
import Footer from "../../components/footer";

export default function Bestyrelse() {
  return (
    <div>
      <h1 className="b_intro">Bestyrelsen</h1>
      <div className="b_members">
        <Bestyrelse_card></Bestyrelse_card>
        <Bestyrelse_card></Bestyrelse_card>
        <Bestyrelse_card></Bestyrelse_card>
        <Bestyrelse_card></Bestyrelse_card>
        <Bestyrelse_card></Bestyrelse_card>
        <Bestyrelse_card></Bestyrelse_card>
        <Bestyrelse_card></Bestyrelse_card>
        <Bestyrelse_card></Bestyrelse_card>
      </div>
      <div className="b_fileshow">
        <div className="b_aoa b_files">
          <img src="../../../assets/icons/file.png"></img>
          <h2>Vedtægter</h2>
        </div>
        <div className="b_gm b_files">
          <img src="../../../assets/icons/file.png"></img>
          <h2>Generalforsamling</h2>
        </div>
        <div className="b_fa b_files">
          <img src="../../../assets/icons/file.png"></img>
          <h2>Regnskab</h2>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
