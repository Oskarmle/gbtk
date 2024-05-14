import React from 'react';

export default function B_newsItem({ news }) {
  return (
    <div className="news_display_item">
      <p>{news.description}</p>
      <p>{news.created_at}</p>
      <div className="horizontal_line"></div>
    </div>
  );
}