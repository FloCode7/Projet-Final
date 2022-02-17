import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/pages/Home.css";
import Articles from "../components/Articles";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get("/articles" + search);
      setArticles(res.data);
    };
    fetchArticles();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Articles articles={articles} />
        <Sidebar />
      </div>
    </>
  );
}
