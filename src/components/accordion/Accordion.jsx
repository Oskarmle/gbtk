import React from "react";
import "../../styles/accordion.css";
import { useState } from "react";

export default function Accordion() {

    const [selected, setSelected] = useState(null)

  function toggle(i) {
    if (selected === i){
        return setSelected(null)
    }
    setSelected(i)
  }

  // Accordion temporary data
  const data = [
    {
      question:"Holdsammensætning",
      answer: "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
    },
    {
      question:"Pointstævner?",
      answer: "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
    },
    {
      question: "Holdturnering",
      answer: "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
    },
    {
      question:"Stævner",
      answer: "Yes of course, it is very possible to create an accordion component with another framework.",
    },
    {
      question:"Forældreside",
      answer: "Yes of course, it is very possible to create an accordion component with another framework.",
    },
  ];

  return (
    <div className="accordion_container">
      <div className="accordion">
        {data.slice().map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <p className={selected === i ? "accordion_content show" : "accordion_content"}>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
