import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../index";

export default function News_updater({ fetchNewsData }) {
  const [description, setDescription] = useState("");
  const { supabaseClient } = useContext(UserContext);


  function handleTextChange(event) {
    setDescription(event.target.value);
    // console.log(event.target.value)
  }

  function handleInfoChange(event) {
    event.preventDefault();
    newsImportantInfo();
    setDescription("");
  }

  // inserting data into table "important_news"
  async function newsImportantInfo() {
    const { data, error } = await supabaseClient
      .from("important_news")
      .insert([{ description }]);
    if (error) {
      console.log(error);
    } else {
      console.log("inserted data succesfully", data);
      fetchNewsData();
    }
  }

  return (
    <div className="news_updater_container">
      <div className="news_update_header">
        <img src="../../assets/icons/importent.png" alt="" />
        <h4>Opdater vigtig information</h4>
      </div>
      <form className="news_form" onSubmit={handleInfoChange}>
        <label>Tekst</label>
        <textarea type="text" onChange={handleTextChange} value={description}/>
        <button type="submit">Opdater</button>
      </form>
    </div>
  );
}
