"use client";

import { useEffect, useState } from "react";

export default function AdminReservationsPage() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedReservation, setSelectedReservation] =
    useState(null);
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  async function loadReservations() {
    try {
      setLoading(true);

      const response = await fetch(
        "/api/admin/reservations",
        {
          cache: "no-store",
        }
      );

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error);
      }

      setReservations(result.reservations);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadReservations();
  }, []);

  const filteredReservations = reservations.filter(
    (reservation) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        reservation.name
          ?.toLowerCase()
          .includes(searchValue) ||
        reservation.email
          ?.toLowerCase()
          .includes(searchValue) ||
        reservation.phone
          ?.toLowerCase()
          .includes(searchValue);

      const reservationDate =
        new Date(
          reservation.reservation_date
        )
          .toISOString()
          .split("T")[0];

      const matchesDate =
        !dateFilter ||
        reservationDate === dateFilter;

      return matchesSearch && matchesDate;
    }
  );

  return (
    <main className="admin-page">

      {/* SIDEBAR */}

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
            className="admin-nav-link"
          >
            <span>▦</span>
            Dashboard
          </a>

          <a
            href="/admin/reservations"
            className="admin-nav-link active"
          >
            <span>📅</span>
            Réservations
          </a>

          <a
            href="/admin#planning"
            className="admin-nav-link"
          >
            <span>🕐</span>
            Planning
          </a>

          <a
            href="/"
            className="admin-nav-link"
          >
            <span>🌐</span>
            Voir le site
          </a>

        </nav>

        <div className="admin-sidebar-bottom">
          <div className="admin-status">
            <span className="status-dot"></span>
            Système en ligne
          </div>
        </div>

      </aside>


      {/* CONTENT */}

      <section className="admin-content">

        <header className="admin-header">

          <div>

            <p className="admin-label">
              GESTION
            </p>

            <h1>
              Réservations
            </h1>

            <p className="admin-subtitle">
              Consultez et gérez toutes les
              réservations des clients.
            </p>

          </div>

          <div className="admin-notification">

            <span className="notification-icon">
              🔔
            </span>

            <div>
              <strong>
                {reservations.length}
              </strong>

              <small>
                réservations
              </small>
            </div>

          </div>

        </header>


        {/* FILTERS */}

        <section className="admin-panel">

          <div className="reservation-filters">

            <div className="reservation-search">

              <label>
                Rechercher
              </label>

              <input
                type="text"
                placeholder="Nom, e-mail ou téléphone..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>


            <div className="reservation-search">

              <label>
                Date
              </label>

              <input
                type="date"
                value={dateFilter}
                onChange={(e) =>
                  setDateFilter(e.target.value)
                }
              />

            </div>


            <button
              className="admin-refresh"
              onClick={() => {
                setSearch("");
                setDateFilter("");
              }}
            >
              Réinitialiser
            </button>

          </div>

        </section>


        {/* RESERVATIONS */}

        <section className="admin-panel">

          <div className="admin-panel-header">

            <div>

              <p className="admin-label">
                RÉSERVATIONS
              </p>

              <h2>
                {filteredReservations.length} résultat
                {filteredReservations.length !== 1
                  ? "s"
                  : ""}
              </h2>

            </div>

            <button
              className="admin-refresh"
              onClick={loadReservations}
            >
              ↻ Actualiser
            </button>

          </div>


          {loading ? (

            <div className="admin-empty">
              Chargement des réservations...
            </div>

          ) : filteredReservations.length === 0 ? (

            <div className="admin-empty">
              Aucune réservation trouvée.
            </div>

          ) : (

            <div className="reservation-list">

              {filteredReservations.map(
                (reservation) => (

                  <button
                    className="admin-reservation reservation-clickable"
                    key={reservation.id}
                    onClick={() =>
                      setSelectedReservation(
                        reservation
                      )
                    }
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


                    <div className="reservation-status">

                      <span></span>

                      Nouvelle

                    </div>

                  </button>

                )
              )}

            </div>

          )}

        </section>

      </section>


      {/* DETAILS POPUP */}

      {selectedReservation && (

        <div
          className="reservation-modal-overlay"
          onClick={() =>
            setSelectedReservation(null)
          }
        >

          <div
            className="reservation-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="reservation-modal-close"
              onClick={() =>
                setSelectedReservation(null)
              }
            >
              ×
            </button>


            <p className="admin-label">
              DÉTAILS DE LA RÉSERVATION
            </p>

            <h2>
              {selectedReservation.name}
            </h2>


            <div className="reservation-details">

              <div>
                <span>📅 Date</span>

                <strong>
                  {new Date(
                    selectedReservation.reservation_date
                  ).toLocaleDateString(
                    "fr-FR"
                  )}
                </strong>
              </div>


              <div>
                <span>🕐 Heure</span>

                <strong>
                  {String(
                    selectedReservation.reservation_time
                  ).slice(0, 5)}
                </strong>
              </div>


              <div>
                <span>👥 Personnes</span>

                <strong>
                  {selectedReservation.guests}
                </strong>
              </div>


              <div>
                <span>📞 Téléphone</span>

                <strong>
                  {selectedReservation.phone}
                </strong>
              </div>


              <div>
                <span>✉️ E-mail</span>

                <strong>
                  {selectedReservation.email}
                </strong>
              </div>


              <div>
                <span>💬 Message</span>

                <strong>
                  {selectedReservation.message ||
                    "Aucun message"}
                </strong>
              </div>

            </div>


            <button
              className="admin-refresh modal-button"
              onClick={() =>
                setSelectedReservation(null)
              }
            >
              Fermer
            </button>

          </div>

        </div>

      )}

    </main>
  );
}