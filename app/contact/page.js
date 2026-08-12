import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="page-main">
      <nav className="site-nav">
        <div className="site-nav-inner">
          <Link href="/" className="logo-link">
            <Image
              src="/logo.png"
              alt="L'Atelier à Pizza"
              width={56}
              height={56}
              className="logo-image"
            />
          </Link>

          <div className="nav-links nav-links-always-visible">
            <Link href="/" className="nav-link">
              ACCUEIL
            </Link>

            <Link href="/menu" className="nav-link">
              LA CARTE
            </Link>

            <Link href="/a-propos" className="nav-link">
              À PROPOS
            </Link>

            <Link href="/contact" className="nav-link nav-link-active">
              CONTACT
            </Link>
          </div>

          <Link href="/reserveren" className="nav-button">
            RÉSERVER
          </Link>
        </div>
      </nav>

      <section className="page-section contact-section">
        <div className="section-inner contact-container">
          <div className="section-header">
            <p className="section-label">CONTACTEZ-NOUS</p>

            <h1 className="section-title">
              Venez nous rendre visite
            </h1>

            <div className="section-divider" />
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <h2>Notre pizzeria</h2>

              <p>
                Une envie de pizza ? Passez nous voir ou contactez-nous
                pour préparer votre prochaine commande.
              </p>

              <div className="contact-info">
                <div>
                  <span>ADRESSE</span>
                  <p>Bruxelles, Belgique</p>
                </div>

                <div>
                  <span>TÉLÉPHONE</span>
                  <p>Contactez-nous par téléphone</p>
                </div>

                <div>
                  <span>HORAIRES</span>
                  <p>Consultez nos horaires avant votre visite.</p>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <h2>Une réservation ?</h2>

              <p>
                Vous souhaitez réserver une table ? Utilisez notre
                formulaire de réservation.
              </p>

              <Link href="/reserveren" className="hero-cta">
                RÉSERVER UNE TABLE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}