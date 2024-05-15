import { createClient } from "@supabase/supabase-js";
import React, { useState } from "react";

export default function News_updater() {
  const [description, setDescription] = useState("");

  const supabase = createClient(
    "https://ofghfzhdqyybxseootsl.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mZ2hmemhkcXl5YnhzZW9vdHNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzMzYwNTQsImV4cCI6MjAzMDkxMjA1NH0.nLMHhcrf3ykrxuwAbZUilGtrc-cNLxnwMnC6YrqdQ0s"
  );

  function handleTextChange(event) {
    setDescription(event.target.value);
    // console.log(event.target.value)
  }

  function handleInfoChange(event) {
    event.preventDefault();
    newsImportantInfo()
  }

  async function newsImportantInfo() {
    const { data, error } = await supabase
    .from("important_news")
    .insert([{description}])
    if (error){
      console.log(error)
    } else {
      console.log("inserted data succesfully", data)
    }
  }

  function refresh_page(){
    
  }

  return (
    <div className="news_updater_container">
      <div className="news_update_header">
        <img src="../../assets/icons/importent.png" alt="" />
        <h4>Opdater vigtig information</h4>
      </div>
      <form className="news_form" onSubmit={handleInfoChange}>
        <label>Tekst</label>
        <textarea type="text" onChange={handleTextChange} />
        <button type="submit">Opdater</button>
      </form>
    </div>
  );
}
