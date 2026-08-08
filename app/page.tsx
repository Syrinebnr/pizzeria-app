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
            className="rounded-md bg-[#c9a45c] px-5 py-3 text-sm font-semibold"
          >
            RÉSERVER
          </Link>
        </div>
      </nav>
    </main>
  );
}