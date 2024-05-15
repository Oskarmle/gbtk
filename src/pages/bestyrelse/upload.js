import React, { useState } from "react";
import "../../styles/upload.css";
import Footer from "../../components/footer";
import File_upload from "../../components/file_upload";
import News_updater from "../../components/news_updater";
import B_news_section from "../../components/b_news_section";
import { News } from "../../entities/news";
import { createClient } from "@supabase/supabase-js";

export default function Upload() {
  const [bnews, setBnews] = useState([]);

  const supabase = createClient(
    "https://ofghfzhdqyybxseootsl.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mZ2hmemhkcXl5YnhzZW9vdHNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzMzYwNTQsImV4cCI6MjAzMDkxMjA1NH0.nLMHhcrf3ykrxuwAbZUilGtrc-cNLxnwMnC6YrqdQ0s"
  );

  // fetching data from table in database
  async function fetchNewsData() {
    const { data, error } = await supabase
      .from("important_news")
      .select();
    if (error) {
      console.error("Error fetching data:", error);
    } else {
      console.log("Fetched data:", data);
      // Map data to News instances
      const newsData = data.map(
        item => new News(item.id, item.description, item.created_at)
      );
      setBnews(newsData);
    }
  }
  return (
    <div>
      <div className="bestyrelse_upload_container">
        <h1>Uploadside</h1>
        <p>
          Upload vedtægter, generalforsamling og regnskaber, og opdater “vigtig
          info” tavle på forsiden
        </p>
        <div className="container_section2">
          <File_upload></File_upload>
          <div className="file_divider"></div>
          <News_updater fetchNewsData={fetchNewsData} ></News_updater>
          <B_news_section fetchNewsData={fetchNewsData} bnews={bnews}></B_news_section>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
