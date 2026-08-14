"use client";

import { useState } from "react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (password === "admin123") {
      sessionStorage.setItem("adminLoggedIn", "true");
      window.location.href = "/admin";
      return;
    }

    setError("Wachtwoord is incorrect.");
  }

  return (
    <main className="admin-login-page">
      <div className="admin-login-card">

        <div className="admin-login-logo">
          🍕
        </div>

        <p className="admin-label">
          L'ATELIER
        </p>

        <h1>Beheerder</h1>

        <p className="admin-login-subtitle">
          Log in om het reservatiesysteem te beheren.
        </p>

        <form onSubmit={handleLogin}>

          <label htmlFor="password">
            Wachtwoord
          </label>

          <input
            id="password"
            type="password"
            placeholder="Voer je wachtwoord in"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />

          {error && (
            <p className="admin-login-error">
              {error}
            </p>
          )}

          <button type="submit">
            Inloggen
          </button>

        </form>

        <a href="/">
          ← Terug naar website
        </a>

      </div>
    </main>
  );
}