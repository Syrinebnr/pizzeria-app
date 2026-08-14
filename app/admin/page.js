"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [previousCount, setPreviousCount] = useState(0);
  const [newReservationAlert, setNewReservationAlert] = useState(false);

  async function loadReservations() {
    try {
      setError("");

      const response = await fetch("/api/admin/reservations", {
        cache: "no-store",
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || "Reservaties konden niet worden geladen."
        );
      }

      const newReservations = result.reservations;

      if (
        previousCount > 0 &&
        newReservations.length > previousCount
      ) {
        setNewReservationAlert(true);

        setTimeout(() => {
          setNewReservationAlert(false);
        }, 6000);
      }

      setPreviousCount(newReservations.length);
      setReservations(newReservations);
    } catch (err) {
      console.error(err);
      setError("De reservaties konden niet worden geladen.");
    } finally {
      setLoading(false);
    }
  }

  async function updateReservationStatus(id, status) {
    try {
      const response = await fetch(
        "/api/admin/reservations/status",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            status,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || "Status kon niet worden aangepast."
        );
      }

      await loadReservations();
    } catch (error) {
      console.error(error);
      setError(
        "De status van de reservatie kon niet worden aangepast."
      );
    }
  }

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("adminLoggedIn");

    if (loggedIn !== "true") {
      window.location.href = "/admin/login";
      return;
    }

    loadReservations();

    const interval = setInterval(loadReservations, 10000);

    return () => clearInterval(interval);
  }, []);

  const totalReservations = reservations.length;

  const totalGuests = reservations.reduce(
    (total, reservation) =>
      total + Number(reservation.guests),
    0
  );

  const now = new Date();

  const today =
    now.getFullYear() +
    "-" +
    String(now.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(now.getDate()).padStart(2, "0");

  const todayReservations = reservations.filter(
    (reservation) => {
      const date = new Date(
        reservation.reservation_date
      );

      const reservationDay =
        date.getFullYear() +
        "-" +
        String(date.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(date.getDate()).padStart(2, "0");

      return reservationDay === today;
    }
  );

  const newReservations = reservations.slice(0, 5);

  return (
    <main className="admin-page">

      <aside className="admin-sidebar">

        <div className="admin-logo">
          <span>🍕</span>

          <div>
            <strong>L'Atelier</strong>
            <small>ADMIN</small>
          </div>
        </div>

        <nav className="admin-nav">

          <a
            href="/admin"
            className="admin-nav-link active"
          >
            <span>▦</span>
            Dashboard
          </a>

          <a
            href="/admin/reservations"
            className="admin-nav-link"
          >
            <span>📅</span>
            Réservations
          </a>

          <a
            href="#planning"
            className="admin-nav-link"
          >
            <span>🕐</span>
            Planning
          </a>

        </nav>

        <div className="admin-sidebar-bottom">

          <a
            href="/"
            className="admin-nav-link"
          >
            <span>🌐</span>
            Voir le site
          </a>

        </div>

      </aside>


      <section className="admin-content">

        <header className="admin-header">

          <div>

            <p className="admin-label">
              ESPACE ADMINISTRATEUR
            </p>

            <h1>
              Dashboard
            </h1>

            <p className="admin-subtitle">
              Beheer je reservaties en planning.
            </p>

          </div>

          <div className="admin-header-right">

            <div className="admin-notification">
              <span>🔔</span>

              <div>
                <strong>
                  {totalReservations}
                </strong>

                <small>
                  Réservations
                </small>
              </div>
            </div>

          </div>

        </header>


        {newReservationAlert && (
          <div className="admin-alert">
            🔔 Nieuwe reservatie ontvangen!
          </div>
        )}


        {error && (
          <div className="admin-error">
            {error}
          </div>
        )}


        <section className="admin-stats">

          <div className="admin-stat-card">

            <div className="admin-stat-icon">
              📅
            </div>

            <div>
              <span>
                Aujourd'hui
              </span>

              <strong>
                {todayReservations.length}
              </strong>

              <small>
                Réservations
              </small>
            </div>

          </div>


          <div className="admin-stat-card">

            <div className="admin-stat-icon">
              👥
            </div>

            <div>
              <span>
                Personnes aujourd'hui
              </span>

              <strong>
                {todayReservations.reduce(
                  (total, reservation) =>
                    total +
                    Number(reservation.guests),
                  0
                )}
              </strong>

              <small>
                personnes
              </small>
            </div>

          </div>


          <div className="admin-stat-card">

            <div className="admin-stat-icon">
              🍕
            </div>

            <div>
              <span>
                Réservations
              </span>

              <strong>
                {totalReservations}
              </strong>

              <small>
                au total
              </small>
            </div>

          </div>


          <div className="admin-stat-card">

            <div className="admin-stat-icon">
              👤
            </div>

            <div>
              <span>
                Clients
              </span>

              <strong>
                {totalGuests}
              </strong>

              <small>
                personnes
              </small>
            </div>

          </div>

        </section>


        <section
          className="admin-panel"
          id="reservations"
        >

          <div className="admin-panel-header">

            <div>

              <p className="admin-label">
                GESTION
              </p>

              <h2>
                Dernières réservations
              </h2>

            </div>

            <button
              className="admin-refresh"
              onClick={loadReservations}
              type="button"
            >
              ↻ Actualiser
            </button>

          </div>


          {loading ? (

            <div className="admin-empty">
              Chargement des réservations...
            </div>

          ) : reservations.length === 0 ? (

            <div className="admin-empty">
              Aucune réservation pour le moment.
            </div>

          ) : (

            <div className="reservation-list">

              {newReservations.map(
                (reservation) => (

                  <div
                    className="admin-reservation"
                    key={reservation.id}
                  >

                    <div className="reservation-avatar">

                      {reservation.name
                        ? reservation.name
                            .charAt(0)
                            .toUpperCase()
                        : "?"}

                    </div>


                    <div className="reservation-main">

                      <strong>
                        {reservation.name}
                      </strong>

                      <span>
                        {reservation.email}
                      </span>

                      <small>
                        {reservation.phone}
                      </small>

                    </div>


                    <div className="reservation-info">

                      <strong>
                        {new Date(
                          reservation.reservation_date
                        ).toLocaleDateString(
                          "fr-FR"
                        )}
                      </strong>

                      <span>
                        {String(
                          reservation.reservation_time
                        ).slice(0, 5)}
                      </span>

                    </div>


                    <div className="reservation-guests">

                      <strong>
                        {reservation.guests}
                      </strong>

                      <span>
                        {reservation.guests === 1
                          ? "personne"
                          : "personnes"}
                      </span>

                    </div>


                    <div className="reservation-actions">

                      {reservation.status ===
                        "nieuw" && (
                        <>
                          <button
                            type="button"
                            className="reservation-confirm-button"
                            onClick={() =>
                              updateReservationStatus(
                                reservation.id,
                                "bevestigd"
                              )
                            }
                          >
                            ✓ Bevestigen
                          </button>

                          <button
                            type="button"
                            className="reservation-cancel-button"
                            onClick={() =>
                              updateReservationStatus(
                                reservation.id,
                                "geannuleerd"
                              )
                            }
                          >
                            × Annuleren
                          </button>
                        </>
                      )}


                      {reservation.status ===
                        "bevestigd" && (
                        <span className="reservation-status confirmed">
                          <span></span>
                          Bevestigd
                        </span>
                      )}


                      {reservation.status ===
                        "geannuleerd" && (
                        <span className="reservation-status cancelled">
                          <span></span>
                          Geannuleerd
                        </span>
                      )}

                    </div>

                  </div>

                )
              )}

            </div>

          )}

        </section>


        <section
          className="admin-panel"
          id="planning"
        >

          <div className="admin-panel-header">

            <div>

              <p className="admin-label">
                APERÇU
              </p>

              <h2>
                Planning
              </h2>

            </div>

          </div>


          <div className="planning-grid">

            {[
              "18:00",
              "18:30",
              "19:00",
              "19:30",
              "20:00",
              "20:30",
              "21:00",
            ].map((time) => {

              const guests =
                todayReservations
                  .filter(
                    (reservation) =>
                      String(
                        reservation.reservation_time
                      ).slice(0, 5) === time
                  )
                  .reduce(
                    (total, reservation) =>
                      total +
                      Number(
                        reservation.guests
                      ),
                    0
                  );

              return (
                <div
                  className={`planning-slot ${
                    guests >= 20
                      ? "planning-full"
                      : ""
                  }`}
                  key={time}
                >

                  <strong>
                    {time}
                  </strong>

                  <div className="planning-bar">

                    <span
                      style={{
                        width: `${Math.min(
                          (guests / 20) * 100,
                          100
                        )}%`,
                      }}
                    ></span>

                  </div>

                  <small>
                    {guests} / 20 personnes
                  </small>

                </div>
              );

            })}

          </div>

        </section>

      </section>

    </main>
  );
}