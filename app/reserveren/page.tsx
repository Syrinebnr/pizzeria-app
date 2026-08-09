import Image from "next/image";
import Link from "next/link";

export default function Reserveren() {
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
            <Link href="/a-propos" className="hover:text-[#c9a45c]">
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

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
              L'Atelier à Pizza
            </p>
            <h1 className="mt-4 text-5xl font-bold">Réserver une table</h1>
            <p className="mt-4 text-gray-400">
              Réservez votre table et profitez d'un moment convivial à
              Bruxelles.
            </p>
          </div>

          <form className="space-y-6 rounded-xl border border-white/10 bg-[#202020] p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Nom
                </label>
                <input
                  type="text"
                  name="nom"
                  required
                  className="w-full rounded-md border border-white/10 bg-[#151515] px-4 py-3 outline-none focus:border-[#c9a45c]"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="telephone"
                  required
                  className="w-full rounded-md border border-white/10 bg-[#151515] px-4 py-3 outline-none focus:border-[#c9a45c]"
                  placeholder="Votre numéro"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-md border border-white/10 bg-[#151515] px-4 py-3 outline-none focus:border-[#c9a45c]"
                placeholder="votre@email.com"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full rounded-md border border-white/10 bg-[#151515] px-4 py-3 outline-none focus:border-[#c9a45c]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Heure
                </label>
                <input
                  type="time"
                  name="heure"
                  required
                  className="w-full rounded-md border border-white/10 bg-[#151515] px-4 py-3 outline-none focus:border-[#c9a45c]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Personnes
                </label>
                <select
                  name="personnes"
                  required
                  className="w-full rounded-md border border-white/10 bg-[#151515] px-4 py-3 outline-none focus:border-[#c9a45c]"
                >
                  <option value="">Aantal</option>
                  <option value="1">1 personne</option>
                  <option value="2">2 personnes</option>
                  <option value="3">3 personnes</option>
                  <option value="4">4 personnes</option>
                  <option value="5">5 personnes</option>
                  <option value="6">6 personnes</option>
                  <option value="7">7 personnes</option>
                  <option value="8">8 personnes</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-md border border-white/10 bg-[#151515] px-4 py-3 outline-none focus:border-[#c9a45c]"
                placeholder="Une demande particulière ?"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-[#c9a45c] px-6 py-4 font-semibold hover:bg-[#b38d42]"
            >
              ENVOYER LA RÉSERVATION
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}