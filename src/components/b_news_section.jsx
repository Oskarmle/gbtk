import { createClient } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import B_newsItem from "./b_newsItem";
import { useContext } from "react";
import { UserContext } from "../index";
// import { News } from "../entities/news";

export default function B_news_section({ fetchNewsData, bnews }) {
  const { supabaseClient } = useContext(UserContext);


  useEffect(() => {
    fetchNewsData();
  }, []);

  async function handleDelete(id) {
    const { data, error } = await supabaseClient
      .from("important_news")
      .delete()
      .eq("id", id);
    if (error) {
      console.log("error deleting news", error);
    } else {
      fetchNewsData();
    }
  }

  return (
    <div className="B_news_section">
      <div className="news_section_header">
        <img src="../../assets/icons/importent_white.png" alt="Important" />
        <h4>Vigtig info</h4>
      </div>
      <div className="news_display">
        {bnews.slice().reverse().map((newsItem, index) => (
          <B_newsItem
            key={index}
            news={newsItem}
            onDelete={() => handleDelete(newsItem.id)}
          />
        ))}
      </div>
    </div>
  );
}
