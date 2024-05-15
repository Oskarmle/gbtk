import React from "react";

export default function B_newsItem({ news, onDelete }) {
  return (
    <>
      <div className="news_display_item">
        <div>
          <p>{news.description}</p>
          <p>{news.created_at}</p>
        </div>
        <div className="delete_button" onClick={onDelete}>
          <img src="../../assets/icons/delete.png" alt="" />
        </div>
      </div>
      <div className="horizontal_line"></div>
    </>
  );
}
