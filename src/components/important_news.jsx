import React, { useEffect, useState } from "react";
import Frontpage_newsItem from "./frontpage_newsItem";
import { News } from "../entities/news";
import { useContext } from "react";
import { UserContext } from "../index";

export default function Important_news() {
  const [fnews, setFnews] = useState([])
  const { supabaseClient } = useContext(UserContext);

  useEffect(() => {
    fetchFrontPageData()
  }, []);

  async function fetchFrontPageData() {
    const { data, error } = await supabaseClient
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
