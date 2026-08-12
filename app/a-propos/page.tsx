import Image from "next/image";
import Link from "next/link";

export default function APropos() {
  return (
    <main className="min-h-screen bg-[#151515] text-white">
      <nav className="border-b border-white/10 bg-black/80">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="L'Atelier à Pizza"
              width={90}
              height={90}
              className="h-14 w-14 object-contain"
            />
          </Link>

          <div className="flex gap-8 text-sm font-medium">
            <Link href="/" className="hover:text-[#c9a45c]">
              ACCUEIL
            </Link>
            <Link href="/menu" className="hover:text-[#c9a45c]">
              LA CARTE
            </Link>
            <Link href="/a-propos" className="text-[#c9a45c]">
              À PROPOS
            </Link>
            <Link href="/contact" className="hover:text-[#c9a45c]">
              CONTACT
            </Link>
          </div>

          <Link
            href="/reserveren"
            className="rounded-md bg-[#c9a45c] px-5 py-3 text-sm font-semibold"
          >
            RÉSERVER
          </Link>
        </div>
      </nav>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
              Notre histoire
            </p>

            <h1 className="mt-4 text-5xl font-bold">
              Bienvenue à L'Atelier à Pizza
            </h1>
          </div>

          <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">
                La passion de la pizza italienne
              </h2>

              <p className="mt-6 leading-8 text-gray-400">
                L'Atelier à Pizza est né d'une passion pour la cuisine
                italienne et le plaisir de partager une bonne pizza.
              </p>

              <p className="mt-4 leading-8 text-gray-400">
                Nous préparons nos pizzas avec des ingrédients soigneusement
                sélectionnés et une pâte travaillée avec patience pour offrir
                une expérience authentique et généreuse.
              </p>

              <p className="mt-4 leading-8 text-gray-400">
                Notre objectif est simple : proposer une cuisine chaleureuse,
                savoureuse et accessible, dans une ambiance conviviale au cœur
                de Bruxelles.
              </p>
            </div>

            <div className="relative h-80 overflow-hidden rounded-xl">
              <Image
                src="/hero-pizza.jpg"
                alt="Pizza de L'Atelier à Pizza"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-[#202020] p-8 text-center">
              <h3 className="text-xl font-bold text-[#c9a45c]">
                Produits frais
              </h3>
              <p className="mt-3 text-gray-400">
                Des ingrédients choisis avec soin pour chaque pizza.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#202020] p-8 text-center">
              <h3 className="text-xl font-bold text-[#c9a45c]">
                Savoir-faire
              </h3>
              <p className="mt-3 text-gray-400">
                Une pâte préparée avec patience et passion.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#202020] p-8 text-center">
              <h3 className="text-xl font-bold text-[#c9a45c]">
                Convivialité
              </h3>
              <p className="mt-3 text-gray-400">
                Un endroit où partager un bon moment ensemble.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}