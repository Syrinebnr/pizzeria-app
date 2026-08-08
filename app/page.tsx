import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#151515] text-white">
      <nav className="border-b border-white/10 bg-black/80">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="L'Atelier à Pizza"
              width={90}
              height={90}
              className="h-14 w-14 object-contain"
            />
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href="/" className="text-[#c9a45c]">
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
            className="rounded-md bg-[#c9a45c] px-5 py-3 text-sm font-semibold hover:bg-[#b38d42]"
          >
            RÉSERVER
          </Link>
        </div>
      </nav>

      <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden px-6 text-center">
        <Image
          src="/hero-pizza.jpg"
          alt="Pizza"
          fill
          priority
          className="object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
            L'Atelier à Pizza
          </p>

          <h1 className="mt-5 text-5xl font-bold md:text-7xl">
            La pizza, avec passion.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300">
            Une cuisine italienne authentique au cœur de Bruxelles.
          </p>

          <Link
            href="/reserveren"
            className="mt-8 inline-block rounded-md bg-[#c9a45c] px-8 py-4 font-semibold hover:bg-[#b38d42]"
          >
            RÉSERVER UNE TABLE
          </Link>
        </div>
      </section>
    </main>
  );
}