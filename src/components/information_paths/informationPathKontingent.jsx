import React from "react";

export default function InformationPathKontingent({
  KontingentClick,
  PlusClick,
  UngdomClick,
  SeniorClick,
  GeneralClick,
}) {
  function handleUngdomClick() {
    UngdomClick();
  }

  function handleKontingentClick() {
    KontingentClick();
  }
  function handlePlusClick() {
    PlusClick();
  }
  function handleSeniorClick() {
    SeniorClick();
  }
  function handleGeneralClick() {
    GeneralClick();
  }
  return (
    <div className="path_container">
      <div className="path" onClick={handleUngdomClick}>
        <div className="dot"></div>
        <p>Ungdom</p>
      </div>
      <div className="path" onClick={handlePlusClick}>
        <div className="dot"></div>
        <p>60+</p>
      </div>
      <div className="path" onClick={handleSeniorClick}>
        <div className="dot"></div>
        <p>Senior</p>
      </div>
      <div className="path_current" onClick={handleKontingentClick}>
        <div className="dot current_dot"></div>
        <p>Kontingent</p>
      </div>
      <div className="path" onClick={handleGeneralClick}>
        <div className="dot"></div>
        <p>Generalt</p>
      </div>
    </div>
  );
}
