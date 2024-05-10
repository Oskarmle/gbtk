import React, { useState } from "react";
import "../../styles/bestyrelse.css";
import Footer from "../../components/footer";
import { Member } from "../../entities/Member";
import Bestyrelse_cardItem from "../../components/bestyrelse_cardItem";
import LoginBox from "../../components/loginBox";

export default function Bestyrelse() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleOpenLogin(){
    setIsOpen(!isOpen);
  }

  // Bestyrelsesmedlemmer - Ændre i denne for at opdatere siden med bestyrelsesmedlemmer
  const b_memberinfo =  [
    new Member("../../assets/bestyrelse/pernille_bestyrelse.jpg", "Formand", "Pernille Eksebo", "28388992", "Pernille@eskebo.dk"),
    new Member("../../assets/bestyrelse/torben_bestyrelse.jpg", "Næstformand", "Torben Lang", "26436465", "Torben@guldagerlang.dk"),
    new Member("../../assets/bestyrelse/ib_bestyrelse.jpg", "Kasserer", "Ib Olsen", "23292498", "Ibo@post6.tele.dk"),
    new Member("../../assets/bestyrelse/jette_bestyrelse.jpg", "Bestyrelsesmedlem", "Jette Høier", "29703315", "Jette.h.hoier@gmail.com"),
    new Member("../../assets/bestyrelse/oskar_bestyrelse.jpg", "Bestyrelsesmedlem", "Oskar Eriksen", "42762949", "Omle.eriksen@gmail.com"),
    new Member("../../assets/bestyrelse/gerd_bestyrelse.jpg", "Bestyrelsesmedlem", "Gerd Lundqvist", "42831143", "Gerd@lundqvist.biz"),
    new Member("../../assets/bestyrelse/daniel_bestyrelse.jpg", "Bestyrelsesmedlem", "Daniels Strauss", "29455865", "Danielstrauss@live.dk"),
    new Member("../../assets/bestyrelse/torri_bestyrelse.jpg", "Suppleant", "Torri Danekilde", "40462686", "Torridanekilde@gmail.com"),
  ]


  return (
    <div>
      <div className="bestyrelse_container">
        <div className="b_section1">
          <h1 className="b_intro">Bestyrelsen</h1>
          <div className="login_button" onClick={toggleOpenLogin}>
            <img src="../../assets/icons/profile.png" ></img>
            <p>Login</p>
          </div>
        </div>
        {isOpen && <LoginBox onClose={toggleOpenLogin} />}
        <div className="b_members">
          {b_memberinfo.slice().map((x)=>{
            return <Bestyrelse_cardItem member={x} />
          })}
        </div>
        <div className="b_fileshow">
          <div className="b_aoa b_files">
            <img src="../../../assets/icons/file.png" alt=""></img>
            <h2>Vedtægter</h2>
          </div>
          <div className="b_gm b_files">
            <img src="../../../assets/icons/file.png" alt=""></img>
            <h2>Generalforsamling</h2>
          </div>
          <div className="b_fa b_files">
            <img src="../../../assets/icons/file.png" alt=""></img>
            <h2>Regnskab</h2>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
