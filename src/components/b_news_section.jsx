import { createClient } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import B_newsItem from "./b_newsItem";
// import { News } from "../entities/news";

export default function B_news_section({ fetchNewsData, bnews }) {

  const supabase = createClient(
    "https://ofghfzhdqyybxseootsl.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mZ2hmemhkcXl5YnhzZW9vdHNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzMzYwNTQsImV4cCI6MjAzMDkxMjA1NH0.nLMHhcrf3ykrxuwAbZUilGtrc-cNLxnwMnC6YrqdQ0s"
  );

  useEffect(() => {
    fetchNewsData();
  }, []);

  async function handleDelete(id) {
    const { data, error } = await supabase
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
