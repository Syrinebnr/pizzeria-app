import Image from "next/image";
import Link from "next/link";

export default function APropos() {
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

          <div className="nav-links nav-links-always-visible">
            <Link href="/" className="nav-link">
              ACCUEIL
            </Link>
            <Link href="/menu" className="nav-link">
              LA CARTE
            </Link>
            <Link href="/a-propos" className="nav-link nav-link-active">
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
          <div className="section-text-center">
            <p className="section-label">Notre histoire</p>
            <h1 className="section-title">Bienvenue à L'Atelier à Pizza</h1>
          </div>

          <div className="about-grid-two">
            <div>
              <h2 className="about-heading">La passion de la pizza italienne</h2>
              <p className="about-paragraph">
                L'Atelier à Pizza est né d'une passion pour la cuisine italienne et le plaisir de partager une bonne pizza.
              </p>
              <p className="about-paragraph">
                Nous préparons nos pizzas avec des ingrédients soigneusement sélectionnés et une pâte travaillée avec patience pour offrir une expérience authentique et généreuse.
              </p>
              <p className="about-paragraph">
                Notre objectif est simple : proposer une cuisine chaleureuse, savoureuse et accessible, dans une ambiance conviviale au cœur de Bruxelles.
              </p>
            </div>

            <div className="about-image-card">
              <Image
                src="/hero-pizza.jpg"
                alt="Pizza de L'Atelier à Pizza"
                fill
                className="about-image"
              />
            </div>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <h3 className="feature-title">Produits frais</h3>
              <p className="feature-text">
                Des ingrédients choisis avec soin pour chaque pizza.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="feature-title">Savoir-faire</h3>
              <p className="feature-text">
                Une pâte préparée avec patience et passion.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="feature-title">Convivialité</h3>
              <p className="feature-text">
                Un endroit où partager un bon moment ensemble.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
