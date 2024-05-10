import React from "react";
import "../../styles/upload.css";
import File_upload from "../../components/file_upload";
import News_updater from "../../components/news_updater";

export default function upload() {
  return (
    <div className="bestyrelse_upload_container">
      <h1>Uploadside</h1>
      <p>Upload vedtægter, generalforsamling og regnskaber, og opdater “vigtig info” tavle på forsiden</p>
      <div className="container_section2">
        <File_upload></File_upload>
        <div className="file_divider"></div>
        <News_updater></News_updater> 
      </div>
    </div>
  );
}
