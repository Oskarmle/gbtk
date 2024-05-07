import React from "react";
import { useState } from "react";
import Information_path from "./information_path";
import { dataUngdom } from "../data/AccordionData";
import { data60plus } from "../data/AccordionData";
import { dataSenior } from "../data/AccordionData";
import { dataKontingent } from "../data/AccordionData";
import { dataTrainingtimes } from "../data/AccordionData";

export default function Accordion() {

    const [selectedUngdom, setSelectedUngdom] = useState(null)
    const [selected60plus, setSelected60plus] = useState(null)
    const [selectedSenior, setSelectedSenior] = useState(null)
    const [selectedKontingent, setSelectedKontingent] = useState(null)
    const [selectedTraining, setSelectedTraining] = useState(null)

  function toggleUngdom(i) {
    if (selectedUngdom === i){
        return setSelectedUngdom(null)
    }
    setSelectedUngdom(i)
  }

  function toggle60plus(i) {
    if (selected60plus === i){
        return setSelected60plus(null)
    }
    setSelected60plus(i)
  }

  function toggleSenior(i) {
    if (selectedSenior === i){
        return setSelectedSenior(null)
    }
    setSelectedSenior(i)
  }

  function toggleKontingent(i) {
    if (selectedKontingent === i){
        return setSelectedKontingent(null)
    }
    setSelectedKontingent(i)
  }

  function toggleTraining(i) {
    if (selectedTraining === i){
        return setSelectedTraining(null)
    }
    setSelectedTraining(i)
  }

  return (
    <div>
      <div className="section3_content">
        {/* ungdom */}
        <div className="accordion_wrapper">
          <Information_path></Information_path>
          <div className="path_line"></div>
          <div className="accordion_container">
            <div className="accordion">
              {dataUngdom.slice().map((item, i) => (
                <div className="item">
                  <div className="title" onClick={() => toggleUngdom(i)}>
                    <h2>{item.question}</h2>
                    <span>{selectedUngdom === i ? "-" : "+"}</span>
                  </div>
                  <p className={selectedUngdom === i ? "accordion_content show" : "accordion_content"}>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* 60plus */}
        <div className="accordion_wrapper">
          <Information_path></Information_path>
          <div className="path_line"></div>
          <div className="accordion_container">
            <div className="accordion">
              {data60plus.slice().map((item, i) => (
                <div className="item">
                  <div className="title" onClick={() => toggle60plus(i)}>
                    <h2>{item.question}</h2>
                    <span>{selected60plus === i ? "-" : "+"}</span>
                  </div>
                  <p className={selected60plus === i ? "accordion_content show" : "accordion_content"}>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Senior */}
        <div className="accordion_wrapper">
          <Information_path></Information_path>
          <div className="path_line"></div>
          <div className="accordion_container">
            <div className="accordion">
              {dataSenior.slice().map((item, i) => (
                <div className="item">
                  <div className="title" onClick={() => toggleSenior(i)}>
                    <h2>{item.question}</h2>
                    <span>{selectedSenior === i ? "-" : "+"}</span>
                  </div>
                  <p className={selectedSenior === i ? "accordion_content show" : "accordion_content"}>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* kontingent */}
        <div className="accordion_wrapper">
          <Information_path></Information_path>
          <div className="path_line"></div>
          <div className="accordion_container">
            <div className="accordion">
              {dataKontingent.slice().map((item, i) => (
                <div className="item">
                  <div className="title" onClick={() => toggleKontingent(i)}>
                    <h2>{item.question}</h2>
                    <span>{selectedKontingent === i ? "-" : "+"}</span>
                  </div>
                  <p className={selectedKontingent === i ? "accordion_content show" : "accordion_content"}>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* træningstider */}
        <div className="accordion_wrapper">
          <Information_path></Information_path>
          <div className="path_line"></div>
          <div className="accordion_container">
            <div className="accordion">
              {dataTrainingtimes.slice().map((item, i) => (
                <div className="item">
                  <div className="title" onClick={() => toggleTraining(i)}>
                    <h2>{item.question}</h2>
                    <span>{selectedTraining === i ? "-" : "+"}</span>
                  </div>
                  <p className={selectedTraining === i ? "accordion_content show" : "accordion_content"}>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  </div>
  );
}
