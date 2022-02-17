import React, { useEffect, useState, useContext } from "react";
import "../css/components/SingleArticle.css";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../context/Context";

export default function SingleArticle() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [article, setArticle] = useState({});
  const publicFolder = "http://localhost:3000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getArticle = async () => {
      const res = await axios.get("/articles/" + path);
      setArticle(res.data);
      setTitle(res.data.title);
      setText(res.data.text);
    };
    getArticle();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/articles/${article._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/articles/${article._id}`, {
        username: user.username,
        title,
        text,
      });
      setUpdateMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="single-article">
      <div className="single-article-container">
        {article.photo && <img src={publicFolder + article.photo} alt="" />}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="single-article-title-input"
            placeholder="Modifiez votre titre..."
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <div>
            <h1 className="single-article-title">{title}</h1>
            {article.username === user?.username && (
              <div className="single-article-edit">
                <i
                  className="single-article-icons fas fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="single-article-icons fas fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </div>
        )}
        <div className="clear"></div>
        <div className="single-article-infos">
          <span className="single-article-author">
            Auteur:
            <Link to={`/?user=${article.username}`} className="link author">
              <b>{article.username}</b>
            </Link>
          </span>
          <br />
          <span className="single-article-date">
            {new Date(article.createdAt).toLocaleDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="single-article-text-input"
            placeholder="Modifiez votre article..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <p className="single-article-text">{text}</p>
        )}
        {updateMode && (
          <button className="single-article-button" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
