import Image from "next/image";
import Link from "next/link";

export default function Home() {
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

      <section className="hero-section">
        <Image
          src="/hero-pizza.jpg"
          alt="Pizza"
          fill
          priority
          className="hero-image"
        />

        <div className="hero-overlay" />

        <div className="hero-copy">
          <p className="hero-label">L'Atelier à Pizza</p>

          <h1 className="hero-title">La pizza, avec passion.</h1>

          <p className="hero-description">
            Une cuisine italienne authentique au cœur de Bruxelles.
          </p>

          <Link href="/reserveren" className="hero-cta">
            RÉSERVER UNE TABLE
          </Link>
        </div>
      </section>
    </main>
  );
}
