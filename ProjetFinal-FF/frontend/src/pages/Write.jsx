import React, { useContext, useState } from "react";
import "../css/pages/Write.css";
import axios from "axios";
import { Context } from "../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArticle = {
      username: user.username,
      title,
      text,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newArticle.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
      try {
        const res = await axios.post("/articles", newArticle);
        window.location.replace("/article/" + res.data._id);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="write">
      {file && (
        <img className="write-img" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="write-form" onSubmit={handleSubmit}>
        <div className="write-form-grp">
          <label htmlFor="file-input">
            <i className="write-icon fas fa-plus"></i>
          </label>
          <input
            id="file-input"
            name="file"
            type="file"
            hidden
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className="write-input"
            placeholder="Titre"
            type="text"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="write-submit" type="submit">
            Publier
          </button>
        </div>
        <div className="write-form-grp">
          <textarea
            className="write-input write-text"
            placeholder="Écrivez votre article..."
            type="text"
            autoFocus={true}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
