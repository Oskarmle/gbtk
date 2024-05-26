import React from "react";

export default function Information_start() {

  function handleUngdomClick(){
    window.scrollTo({
      top: 1000,
      behavior: "smooth"
    })
  };

  function handleSeniorClick(){
    window.scrollTo({
      top: 1600,
      behavior: "smooth"
  })
}
  function handlePlusClick(){
    window.scrollTo({
      top: 2100,
      behavior: "smooth"
  })
}
  function handleKontingentClick(){
    window.scrollTo({
      top: 2800,
      behavior: "smooth"
  })
}
  function handleTrainingClick(){
    window.scrollTo({
      top: 3200,
      behavior: "smooth"
  })
}
  function handleDropoutClick(){
    window.scrollTo({
      top: 3400,
      behavior: "smooth"
  })
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
        <div className="tider secondary_info" onClick={handleTrainingClick}>
          <img src="../../assets/icons/træningstider.png" alt="" />
          <h4>Træningstider</h4>
        </div>
        <div className="udmeldelse secondary_info" onClick={handleDropoutClick}>
          <img src="../../assets/icons/udmeldelse.png" alt="" />
          <h4>Udmeldelse</h4>
        </div>
      </div>
    </div>
  );
}
