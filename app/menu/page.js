import Image from "next/image";
import Link from "next/link";

const featuredPizzas = [
  {
    name: "Pizza Margherita",
    image: "/pizza-margherita.png",
    description: "Tomate, mozzarella.",
    price: "12,90 €",
  },
  {
    name: "Diavola",
    image: "/pizza-diavola.png",
    description: "Tomate, mozzarella, salami piquant.",
    price: "13,90 €",
  },
  {
    name: "4 Fromages",
    image: "/pizza-4-fromages.png",
    description: "Tomate, mozzarella, parmesan, gorgonzola, chèvre.",
    price: "13,90 €",
  },
  {
    name: "Funghi",
    image: "/pizza-funghi.png",
    description: "Tomate, mozzarella, champignons.",
    price: "12,90 €",
  },
  {
    name: "Chèvre",
    image: "/pizza-chevre.png",
    description: "Tomate, mozzarella, chèvre, miel.",
    price: "12,90 €",
  },
];

const pizzaCategories = [
  {
    name: "Classiques",
    prices: "7 € / 12 € / 15 €",
    pizzas: [
      ["Margherita", "Tomate, mozzarella"],
      ["Funghi", "Tomate, mozzarella, champignons"],
      ["Chèvre", "Tomate, mozzarella, chèvre, miel"],
    ],
  },
  {
    name: "Traditionnelles",
    prices: "7,50 € / 13 € / 16 €",
    pizzas: [
      ["Norvégienne", "Crème, mozzarella, saumon fumé"],
      ["Tonno", "Tomate, mozzarella, thon, oignons rouges"],
      ["Chicken", "Tomate, mozzarella, poulet, champignons"],
      ["Hawaï", "Tomate, mozzarella, jambon de dinde, ananas"],
      ["Bari", "Tomate, mozzarella, jambon de dinde, champignons, œuf"],
      ["4 Fromages", "Tomate, mozzarella, parmesan, gorgonzola, chèvre"],
      ["Parmigiana", "Tomate, mozzarella, parmesan, aubergines, basilic"],
      ["Napolitaine", "Tomate, mozzarella, anchois, champignons, câpres, olives"],
      ["Capriciosa", "Tomate, mozzarella, jambon de dinde, champignons, poivrons"],
    ],
  },
  {
    name: "Urban",
    prices: "8 € / 13,50 € / 17,50 €",
    pizzas: [
      ["Sucuk", "Tomate, mozzarella, sucuk, œuf"],
      ["Jumpstreet", "Tomate, mozzarella, poulet, oignons rouges, sauce BBQ"],
      ["Buffalo", "Crème, mozzarella, poulet haché, oignons rouges, olives"],
      ["Tajmahal", "Tomate, crème, mozzarella, poulet épicé, poivrons, olives"],
      ["Miami", "Tomate, mozzarella, bœuf haché, oignons rouges, sauce BBQ"],
      ["Hot chili", "Tomate pimentée, mozzarella, bœuf haché, champignons"],
    ],
  },
  {
    name: "Gourmandes",
    prices: "8,50 € / 14,50 € / 18 €",
    pizzas: [
      ["Indiana", "Crème curry, mozzarella, poulet, champignons"],
      ["Mexico", "Tomate, mozzarella, bœuf haché, chorizo, poivrons, oignons rouges"],
      ["Végétarienne", "Tomate, mozzarella, feta, champignons, oignons rouges, olives"],
      ["Greek", "Huile d’olive, mozzarella, feta, tomates fraîches, oignons rouges, olives, origan"],
      ["L’Atelier", "Tomate, mozzarella, jambon de dinde, pommes de terre, oignons rouges"],
      ["Brooklyn", "Tomate, mozzarella, bœuf haché, champignons, poivrons, oignons rouges, œuf"],
      ["4 saisons", "Tomate, mozzarella, jambon de dinde, artichauts, poivrons, champignons, olives"],
    ],
  },
  {
    name: "Les incontournables",
    prices: "9 € / 15,50 € / 19 €",
    pizzas: [
      ["Scampis", "Tomate, mozzarella, scampis, ail"],
      ["Fruits de mer", "Tomate, mozzarella, fruits de mer, origan"],
      ["Kebab", "Crème, mozzarella, kebab poulet, oignons rouges"],
      ["Meat Lover", "Tomate, mozzarella, bœuf haché, poulet, champignons, poivrons, olives"],
      ["Burger", "Tomate, mozzarella, tomates fraîches, bœuf haché, cheddar, oignons rouges, cornichon, sauce burger"],
      ["Du chef", "Crème curry, sweet chili, mozzarella, poulet, jambon de dinde, pommes de terre, champignons, oignons rouges"],
    ],
  },
];

const otherSections = [
  {
    title: "Entrées chaudes",
    items: [
      ["Pain à l’ail", "5,00 €"],
      ["Scampis à l’ail — 6 PCS", "7,00 €"],
      ["Scampis diabolo — 6 PCS", "7,00 €"],
    ],
  },
  {
    title: "Penne",
    items: [
      ["Bolognaise", "10,00 €"],
      ["Archiduc", "10,00 €"],
      ["Carbonara", "10,00 €"],
      ["Veggie", "12,00 €"],
      ["New Delhi", "12,00 €"],
      ["Chicken", "12,00 €"],
      ["Poulet piquant", "12,00 €"],
      ["Poulet curry", "12,00 €"],
      ["Scampis", "14,00 €"],
      ["Norvégienne", "14,00 €"],
      ["Fruits de mer", "14,00 €"],
    ],
  },
  {
    title: "À vos fours",
    items: [
      ["Lasagne — Bolognaise gratinée", "12,00 €"],
      ["Hachis Parmentier — Purée de pommes de terre, bœuf haché, épinards, gratinée", "12,00 €"],
    ],
  },
  {
    title: "Plats",
    items: [
      ["Escalope de poulet", "16,00 €"],
    ],
  },
  {
    title: "Sauces",
    items: [
      ["Mayonnaise", "1,00 €"],
      ["Ketchup", "1,00 €"],
      ["Samouraï", "1,00 €"],
      ["Andalouse", "1,00 €"],
      ["Sauce à l’ail", "1,00 €"],
      ["Hot Chili", "1,00 €"],
      ["Sweet Chili", "1,00 €"],
      ["BBQ", "1,00 €"],
    ],
  },
  {
    title: "Salades",
    items: [
      ["Mix", "5,00 €"],
      ["Greek", "6,00 €"],
      ["Niçoise", "7,00 €"],
      ["Hawaï", "7,50 €"],
      ["Pollo", "7,50 €"],
      ["Tenders", "8,00 €"],
    ],
  },
  {
    title: "Nuggets & Finger Food",
    items: [
      ["Nuggets — 6 PCS", "5,00 €"],
      ["Nuggets — 10 PCS", "7,00 €"],
      ["Crispy Wings — 4 PCS", "4,50 €"],
      ["Tenders — 3 PCS", "5,00 €"],
      ["Chili Cheese — 6 PCS", "5,00 €"],
      ["Chili Cheese — 10 PCS", "7,00 €"],
      ["Bouchées de Camembert — 6 PCS", "5,00 €"],
      ["Bouchées de Camembert — 10 PCS", "7,00 €"],
      ["Mozza stick — 6 PCS", "6,00 €"],
      ["Onion rings — 6 PCS", "5,00 €"],
      ["Potatoes Country", "5,00 €"],
    ],
  },
];

export default function Menu() {
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

            <Link href="/menu" className="nav-link nav-link-active">
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
        <div className="section-inner">
          <div className="section-header">
            <p className="section-label">NOTRE CARTE</p>
            <h1 className="section-title">Nos pizzas incontournables</h1>
            <div className="section-divider" />
          </div>

          <div className="menu-grid">
            {featuredPizzas.map((pizza) => (
              <article className="pizza-card" key={pizza.name}>
                <div className="pizza-image-container">
                  <Image
                    src={pizza.image}
                    alt={pizza.name}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 33vw, 20vw"
                    className="pizza-image"
                  />
                </div>

                <div className="pizza-card-content">
                  <h2 className="pizza-title">{pizza.name}</h2>
                  <p className="pizza-description">{pizza.description}</p>
                  <p className="pizza-price">{pizza.price}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="menu-categories">
            {pizzaCategories.map((category) => (
              <section className="menu-category" key={category.name}>
                <div className="category-header">
                  <p className="section-label">{category.name}</p>
                  <p className="category-prices">
                    Small / Medium / Large — {category.prices}
                  </p>
                </div>

                <div className="category-grid">
                  {category.pizzas.map(([name, description]) => (
                    <article className="menu-item" key={name}>
                      <div>
                        <h3>{name}</h3>
                        <p>{description}</p>
                      </div>

                      <span>{category.prices}</span>
                    </article>
                  ))}
                </div>
              </section>
            ))}

            <div className="menu-other-grid">
              {otherSections.map((section) => (
                <section className="menu-other-section" key={section.title}>
                  <div className="category-header">
                    <p className="section-label">{section.title}</p>
                  </div>

                  <div className="other-items">
                    {section.items.map(([name, price]) => (
                      <div className="other-item" key={name}>
                        <span>{name}</span>
                        <strong>{price}</strong>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="supplements">
              <p>
                Supplément Small <strong>+1,00 €</strong> · Medium{" "}
                <strong>+1,50 €</strong> · Large <strong>+2,00 €</strong>
              </p>
              <p>
                Scampis / Fruits de mer / Thon : Small <strong>+2,00 €</strong>{" "}
                · Medium <strong>+2,50 €</strong> · Large{" "}
                <strong>+3,00 €</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}