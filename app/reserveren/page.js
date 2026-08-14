"use client";

import Link from "next/link";
import { useState } from "react";

export default function Reserveren() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [availability, setAvailability] = useState([]);
  const [loadingTimes, setLoadingTimes] = useState(false);

  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState("");

  async function loadAvailability(date) {
    if (!date) {
      setAvailability([]);
      setSelectedTime("");
      return;
    }

    setLoadingTimes(true);
    setError("");
    setSelectedTime("");

    try {
      const response = await fetch(
        `/api/availability?date=${encodeURIComponent(date)}`
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || "Beschikbaarheid kon niet worden geladen."
        );
      }

      setAvailability(result.availability);
    } catch (err) {
      console.error(err);
      setAvailability([]);
      setError("De beschikbare uren konden niet worden geladen.");
    } finally {
      setLoadingTimes(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSent(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!selectedTime) {
      setError("Kies eerst een beschikbaar tijdstip.");
      setLoading(false);
      return;
    }

    if (!guests) {
      setError("Kies eerst het aantal personen.");
      setLoading(false);
      return;
    }

    const data = {
      name: formData.get("nom"),
      email: formData.get("email"),
      phone: formData.get("telephone"),
      reservation_date: formData.get("date"),
      reservation_time: selectedTime,
      guests: Number(guests),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Er ging iets mis.");
      }

      setSent(true);
      setSelectedTime("");
      setGuests("");
      setAvailability([]);

      form.reset();
    } catch (err) {
      console.error(err);
      setError(
        err.message || "Je reservering kon niet worden opgeslagen."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page-main">
      <nav className="site-nav">
        <div className="site-nav-inner">
          <Link href="/" className="logo-link">
            <img
              src="/logo.png"
              alt="L'Atelier à Pizza"
              className="logo-image"
            />
          </Link>

          <div className="nav-links">
            <Link href="/" className="nav-link">
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

          <Link
            href="/reserveren"
            className="nav-button nav-link-active"
          >
            RÉSERVER
          </Link>
        </div>
      </nav>

      <section className="page-section">
        <div className="section-inner section-inner-large">
          <div className="section-header">
            <p className="section-label">L'Atelier à Pizza</p>

            <h1 className="section-title">
              Réserver une table
            </h1>

            <p className="hero-description">
              Réservez votre table au cœur de Bruxelles.
            </p>
          </div>

          <form
            className="reservation-form"
            onSubmit={handleSubmit}
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

            <div className="reservation-grid reservation-grid-2">
              <input
                name="date"
                required
                type="date"
                className="input-field"
                onChange={(e) => {
                  loadAvailability(e.target.value);
                }}
              />

              <select
                name="personnes"
                required
                className="input-field"
                value={guests}
                onChange={(e) => {
                  setGuests(e.target.value);
                  setSelectedTime("");
                }}
              >
                <option value="">Personnes</option>

                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} personne{n > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            <div className="reservation-time-section">
              <p className="reservation-time-label">
                Choisissez votre heure
              </p>

              {!availability.length && !loadingTimes && (
                <p className="reservation-time-help">
                  Choisissez d'abord une date.
                </p>
              )}

              {loadingTimes && (
                <p className="reservation-time-help">
                  Chargement des disponibilités...
                </p>
              )}

              {availability.length > 0 && (
                <div className="time-slot-grid">
                  {availability.map((slot) => {
                    const tooFewPlaces =
                      guests &&
                      slot.remaining < Number(guests);

                    const unavailable =
                      !slot.available || tooFewPlaces;

                    return (
                      <button
                        key={slot.time}
                        type="button"
                        disabled={unavailable || loading}
                        className={`time-slot ${
                          selectedTime === slot.time
                            ? "time-slot-selected"
                            : ""
                        } ${
                          unavailable
                            ? "time-slot-full"
                            : ""
                        }`}
                        onClick={() => {
                          setSelectedTime(slot.time);
                          setError("");
                        }}
                      >
                        <span>{slot.time}</span>

                        <small>
                          {unavailable
                            ? "VOL"
                            : `${slot.remaining} plaatsen`}
                        </small>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <textarea
              name="message"
              rows={4}
              placeholder="Une demande particulière ?"
              className="input-field input-area"
            />

            <button
              type="submit"
              className="nav-button submit-button"
              disabled={loading}
            >
              {loading
                ? "ENVOI EN COURS..."
                : "ENVOYER LA RÉSERVATION"}
            </button>

            {sent && (
              <p className="reservation-confirmation">
                Votre réservation a bien été enregistrée !
              </p>
            )}

            {error && (
              <p className="reservation-error">
                {error}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}