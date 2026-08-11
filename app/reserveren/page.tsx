"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Reserveren() {
  const [sent, setSent] = useState(false);

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
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
              L'Atelier à Pizza
            </p>

            <h1 className="mt-4 text-5xl font-bold">
              Réserver une table
            </h1>

            <p className="mt-4 text-gray-400">
              Réservez votre table au cœur de Bruxelles.
            </p>
          </div>

          <form
            className="space-y-5 rounded-xl border border-white/10 bg-[#202020] p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                name="nom"
                required
                placeholder="Votre nom"
                className="rounded-md border border-white/10 bg-[#151515] px-4 py-3 outline-none focus:border-[#c9a45c]"
              />

              <input
                name="telephone"
                required
                type="tel"
                placeholder="Votre numéro"
                className="rounded-md border border-white/10 bg-[#151515] px-4 py-3 outline-none focus:border-[#c9a45c]"
              />
            </div>

            <input
              name="email"
              required
              type="email"
              placeholder="Votre e-mail"
              className="w-full rounded-md border border-white/10 bg-[#151515] px-4 py-3 outline-none focus:border-[#c9a45c]"
            />

            <div className="grid gap-5 sm:grid-cols-3">
              <input
                name="date"
                required
                type="date"
                className="rounded-md border border-white/10 bg-[#151515] px-4 py-3 outline-none focus:border-[#c9a45c]"
              />

              <input
                name="heure"
                required
                type="time"
                className="rounded-md border border-white/10 bg-[#151515] px-4 py-3 outline-none focus:border-[#c9a45c]"
              />

              <select
                name="personnes"
                required
                className="rounded-md border border-white/10 bg-[#151515] px-4 py-3 outline-none focus:border-[#c9a45c]"
              >
                <option value="">Personnes</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} personne{n > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              name="message"
              rows={4}
              placeholder="Une demande particulière ?"
              className="w-full rounded-md border border-white/10 bg-[#151515] px-4 py-3 outline-none focus:border-[#c9a45c]"
            />

            <button
              type="submit"
              className="w-full rounded-md bg-[#c9a45c] px-6 py-4 font-semibold hover:bg-[#b38d42]"
            >
              ENVOYER LA RÉSERVATION
            </button>

            {sent && (
              <p className="text-center font-medium text-[#c9a45c]">
                Votre réservation a bien été envoyée !
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}