import Image from "next/image";
import Link from "next/link";

const pizzas = [
  ["Margherita", "/pizza-margherita.png", "Tomate, mozzarella.", "12,90 €"],
  ["Diavola", "/pizza-diavola.png", "Tomate, mozzarella, salami piquant.", "13,90 €"],
  ["4 Fromages", "/pizza-4-fromages.png", "Mozzarella, parmesan, gorgonzola, chèvre.", "13,90 €"],
  ["Funghi", "/pizza-funghi.png", "Tomate, mozzarella, champignons.", "12,90 €"],
  ["Chèvre", "/pizza-chevre.png", "Tomate, mozzarella, chèvre, miel.", "12,90 €"],
];

export default function Menu() {
  return (
    <main className="min-h-screen bg-[#151515] text-white">
      <nav className="border-b border-white/10 bg-black/80">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/">
            <Image src="/logo.png" alt="L'Atelier à Pizza" width={90} height={90} className="h-14 w-14 object-contain" />
          </Link>

          <div className="flex gap-8 text-sm font-medium">
            <Link href="/" className="hover:text-[#c9a45c]">ACCUEIL</Link>
            <Link href="/menu" className="text-[#c9a45c]">LA CARTE</Link>
            <Link href="/a-propos" className="hover:text-[#c9a45c]">À PROPOS</Link>
            <Link href="/contact" className="hover:text-[#c9a45c]">CONTACT</Link>
          </div>

          <Link href="/reserveren" className="rounded-md bg-[#c9a45c] px-5 py-3 text-sm font-semibold">
            RÉSERVER
          </Link>
        </div>
      </nav>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
            Notre carte
          </p>
          <h1 className="mt-4 text-5xl font-bold">Nos pizzas incontournables</h1>
          <div className="mx-auto mt-6 h-1 w-12 bg-[#c9a45c]" />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {pizzas.map(([name, image, description, price]) => (
              <article key={name} className="overflow-hidden rounded-lg border border-white/10 bg-[#202020]">
                <div className="h-52">
                  <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-5 text-left">
                  <h2 className="text-xl font-bold">{name}</h2>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-gray-400">
                    {description}
                  </p>
                  <p className="mt-5 text-lg font-bold text-[#c9a45c]">{price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}