import React from "react";
import "../css/components/Articles.css";
import Article from "./Article";

export default function Articles({ articles }) {
  return (
    <div className="articles">
      {articles.map((a) => (
        <Article article={a} />
      ))}
    </div>
  );
}
