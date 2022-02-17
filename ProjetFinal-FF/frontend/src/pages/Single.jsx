import React from "react";
import Sidebar from "../components/Sidebar";
import SingleArticle from "../components/SingleArticle";
import "../css/pages/Single.css";

export default function Single() {
  return (
    <div className="single">
      <SingleArticle />
      <Sidebar />
    </div>
  );
}
