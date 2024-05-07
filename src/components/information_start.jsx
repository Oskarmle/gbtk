import React from "react";

export default function Information_start() {
  return (
    <div>
      <div className="section1_info">
        <div className="ungdom info_picker">
          <img src="../../assets/information/ungdom_info.jpg" alt="" />
          <div className="info_content">
            <h4>Ungdom</h4>
            <a href="">Læs mere her</a>
          </div>
        </div>
        <div className="senior info_picker">
          <img src="../../assets/information/senior_info.jpg" alt="" />
          <div className="info_content">
            <h4>Senior</h4>
            <a href="">Læs mere her</a>
          </div>
        </div>
        <div className="60plus info_picker">
          <img src="../../assets/information/60plus_info.jpg" alt="" />
          <div className="info_content">
            <h4>60+</h4>
            <a href="">Læs mere her</a>
          </div>
        </div>
      </div>
      <div className="section2_info">
        <div className="kontingent secondary_info">
          <img src="../../assets/icons/kontingent.png" alt="" />
          <h4>Kontingent</h4>
        </div>
        <div className="tider secondary_info">
          <img src="../../assets/icons/træningstider.png" alt="" />
          <h4>Træningstider</h4>
        </div>
        <div className="udmeldelse secondary_info">
          <img src="../../assets/icons/udmeldelse.png" alt="" />
          <h4>Udmeldelse</h4>
        </div>
      </div>
    </div>
  );
}
