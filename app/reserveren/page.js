"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Reserveren() {
  const [sent, setSent] = useState(false);

  return (
    <main className="page-main">
      <nav className="site-nav">
        <div className="site-nav-inner">
          <Link href="/" className="logo-link">
            <Image
              src="/logo.png"
              alt="L'Atelier à Pizza"
              width={90}
              height={90}
              className="logo-image"
            />
          </Link>

          <div className="nav-links">
            <Link href="/" className="nav-link nav-link-active">
              ACCUEIL
            </Link>
            <Link href="/menu" className="nav-link">
              LA CARTE
            </Link>
            <Link href="/a-propos" className="nav-link">
              À PROPOS
            </Link>
            <Link href="/contact" className="nav-link">
              CONTACT
            </Link>
          </div>

          <Link href="/reserveren" className="nav-button">
            RÉSERVER
          </Link>
        </div>
      </nav>

      <section className="page-section">
        <div className="section-inner section-inner-large">
          <div className="section-header">
            <p className="section-label">L'Atelier à Pizza</p>
            <h1 className="section-title">Réserver une table</h1>
            <p className="hero-description">
              Réservez votre table au cœur de Bruxelles.
            </p>
          </div>

          <form
            className="reservation-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="reservation-grid reservation-grid-2">
              <input
                name="nom"
                required
                placeholder="Votre nom"
                className="input-field"
              />

              <input
                name="telephone"
                required
                type="tel"
                placeholder="Votre numéro"
                className="input-field"
              />
            </div>

            <input
              name="email"
              required
              type="email"
              placeholder="Votre e-mail"
              className="input-field"
            />

            <div className="reservation-grid reservation-grid-3">
              <input
                name="date"
                required
                type="date"
                className="input-field"
              />

              <input
                name="heure"
                required
                type="time"
                className="input-field"
              />

              <select name="personnes" required className="input-field">
                <option value="">Personnes</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} personne{n > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              name="message"
              rows={4}
              placeholder="Une demande particulière ?"
              className="input-field input-area"
            />

            <button type="submit" className="nav-button submit-button">
              ENVOYER LA RÉSERVATION
            </button>

            {sent && (
              <p className="reservation-confirmation">
                Votre réservation a bien été envoyée !
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
