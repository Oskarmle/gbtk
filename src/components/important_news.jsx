import React, { useEffect, useState } from "react";
import Frontpage_newsItem from "./frontpage_newsItem";
import { createClient } from "@supabase/supabase-js";
import { News } from "../entities/news";

export default function Important_news() {
  const [fnews, setFnews] = useState([])

  const supabase = createClient(
    "https://ofghfzhdqyybxseootsl.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mZ2hmemhkcXl5YnhzZW9vdHNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzMzYwNTQsImV4cCI6MjAzMDkxMjA1NH0.nLMHhcrf3ykrxuwAbZUilGtrc-cNLxnwMnC6YrqdQ0s"
  );

  useEffect(() => {
    fetchFrontPageData()
  }, []);

  async function fetchFrontPageData() {
    const { data, error } = await supabase
    .from("important_news")
    .select()
    if (error) {
      console.log("error fetching data", error)
    } else {
      console.log("data fetched succesfully", data)
            // Map data to News instances
            const newsData = data.map(
              item => new News(item.id, item.description, item.created_at)
            );
            setFnews(newsData);
    }
  }

  return (
    <>
      <div className="news_container">
        <div className="news_container_header">
          <img src="../../assets/icons/importent_white.png" alt="Important" />
          <h4>Vigtig info</h4>
        </div>
        {fnews.slice().reverse().map((newsItem, index) => (
          <Frontpage_newsItem key={index} news={newsItem} />
        ))}
      </div>
    </>
  );
}
