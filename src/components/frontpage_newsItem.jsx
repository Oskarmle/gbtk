import React from "react";

export default function Frontpage_newsItem({news}) {
  return (
    <div>
      <div className="show_news">
        <p>{news.description}</p>
        <p>{news.created_at}</p>
      </div>
      <div className="news_horizontal_line"></div>
    </div>
  );
}
