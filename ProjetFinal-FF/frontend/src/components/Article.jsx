import React from "react";
import "../css/components/Article.css";
import { Link } from "react-router-dom";

export default function Article({ article }) {
  const publicFolder = "http://localhost:3000/images/";

  return (
    <div className="article">
      {article.photo && (
        <img
          className="article-img"
          src={publicFolder + article.photo}
          alt=""
        />
      )}
      <div className="article-infos">
        <Link to={`/article/${article._id}`} className="link">
          <h2 className="article-title">{article.title}</h2>
        </Link>
        <hr />
        <p className="article-date">
          {new Date(article.createdAt).toLocaleDateString()}
        </p>
      </div>
      <p className="article-text">{article.text}</p>
    </div>
  );
}
