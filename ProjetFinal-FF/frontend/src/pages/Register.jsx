import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/pages/Register.css";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <h1 className="register-title">Inscription</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>Nom d'utilisateur</label>
        <input
          className="register-input"
          type="text"
          placeholder="Exemple123"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="register-input"
          type="text"
          placeholder="Exemple@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Mot de passe</label>
        <input
          className="register-input"
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register-button" type="submit">
          S'inscrire
        </button>
        {error && (
          <span className="error-span">Il semblerait y avoir une erreur !</span>
        )}
      </form>
      <Link to="/login" className="register-login-button link">
        Se connecter
      </Link>
    </div>
  );
}
