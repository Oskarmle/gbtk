import React from "react";

export default function Information_start({JoinClick, KontingentClick, PlusClick, UngdomClick, SeniorClick, GeneralClick}) {
  
  function handleUngdomClick(){
    UngdomClick()
  }
  function handleJoinClick(){
    JoinClick()
  }
  function handleKontingentClick(){
    KontingentClick()
  }
  function handlePlusClick(){
    PlusClick()
  }
  function handleSeniorClick(){
    SeniorClick()
  }
  function handleGeneralClick(){
    GeneralClick()
  }

  return (
    <div>
      <div className="section1_info">
        <div className="ungdom info_picker">
          <img src="../../assets/information/ungdom_info.jpg" alt="" />
          <div className="info_content">
            <h4>Ungdom</h4>
            <p onClick={handleUngdomClick}>Læs mere her</p>
          </div>
        </div>
        <div className="senior info_picker">
          <img src="../../assets/information/senior_info.jpg" alt="" />
          <div className="info_content">
            <h4>Senior</h4>
            <p onClick={handleSeniorClick}>Læs mere her</p>
          </div>
        </div>
        <div className="60plus info_picker">
          <img src="../../assets/information/60plus_info.jpg" alt="" />
          <div className="info_content">
            <h4>60+</h4>
            <p onClick={handlePlusClick}>Læs mere her</p>
          </div>
        </div>
      </div>
      <div className="section2_info">
        <div className="kontingent secondary_info" onClick={handleKontingentClick}>
          <img src="../../assets/icons/kontingent.png" alt="" />
          <h4>Kontingent</h4>
        </div>
        <div className="tider secondary_info" onClick={handleGeneralClick}>
          <img src="../../assets/icons/general.png" alt="" />
          <h4>Generelt</h4>
        </div>
        <div className="udmeldelse secondary_info" onClick={handleJoinClick}>
          <img src="../../assets/icons/join.png" alt="" />
          <h4>Indmeldelse</h4>
        </div>
      </div>
    </div>
  );
}
