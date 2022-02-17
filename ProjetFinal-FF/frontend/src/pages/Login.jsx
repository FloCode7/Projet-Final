import "../css/pages/Login.css";
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import axios from "axios";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <h1 className="login-title">Connexion</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Nom d'utilisateur</label>
        <input
          className="login-input"
          type="text"
          placeholder="Entrez votre pseudo..."
          ref={userRef}
        />
        <label>Mot de passe</label>
        <input
          className="login-input"
          type="password"
          placeholder="Entrez votre mot de passe..."
          ref={passwordRef}
        />
        <button className="login-button" type="submit">
          Se connecter
        </button>
      </form>
      <Link to="/register" className="login-register-button link">
        Pas encore de compte ? Inscrivez-vous
      </Link>
    </div>
  );
}
