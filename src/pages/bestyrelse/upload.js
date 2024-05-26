import React, { useContext, useEffect, useState } from "react";
import "../../styles/upload.css";
import Footer from "../../components/footer";
import File_upload from "../../components/file_upload";
import News_updater from "../../components/news_updater";
import B_news_section from "../../components/b_news_section";
import { News } from "../../entities/news";
import { UserContext } from "../../index"
import Header from "../../components/header";
// import { createClient } from "@supabase/supabase-js";
// import { useNavigate } from "react-router-dom";

export default function Upload() {
  const [bnews, setBnews] = useState([]);
  const supabase = useContext(UserContext)


  useEffect(() => {
    getUserData()
  }, []);
  
  async function getUserData(){
    const { data: { user } } = await supabase.auth.getUser()
    console.log(user)
  }

  // fetching data from table in database
  async function fetchNewsData() {
    const { data, error } = await supabase.from("important_news").select();
    if (error) {
      console.error("Error fetching data:", error);
    } else {
      console.log("Fetched data:", data);
      // Map data to News instances
      const newsData = data.map(
        (item) => new News(item.id, item.description, item.created_at)
      );
      setBnews(newsData);
    }
  }
  return (
    <div>
      <Header></Header>
      <div className="bestyrelse_upload_container">
        <h1>Uploadside</h1>
        <p>
          Upload vedtægter, generalforsamling og regnskaber, og opdater “vigtig
          info” tavle på forsiden
        </p>
        <div className="container_section2">
          <File_upload></File_upload>
          <div className="file_divider"></div>
          <News_updater fetchNewsData={fetchNewsData}></News_updater>
          <B_news_section
            fetchNewsData={fetchNewsData}
            bnews={bnews}
          ></B_news_section>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
