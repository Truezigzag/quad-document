import Link from 'next/link';
import { notFound } from 'next/navigation';
import { coreCharacters } from '@/data/universe';

export function generateStaticParams() {
  return coreCharacters.map((c) => ({ slug: c.slug }));
}

export default function CharacterPage({ params }: { params: { slug: string } }) {
  const character = coreCharacters.find((c) => c.slug === params.slug);

  if (!character) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 py-12 md:px-12">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
        <Link href="/" className="text-sm text-violet-200/80 transition hover:text-violet-100">
          ← 返回入口层
        </Link>
        <h1 className="mt-4 text-4xl font-bold text-white">{character.name}</h1>
        <p className="mt-2 text-violet-200">{character.title}</p>

        <div className="mt-8 space-y-5 text-slate-300">
          <section>
            <h2 className="text-sm uppercase tracking-[0.2em] text-slate-400">Appearance</h2>
            <p className="mt-1">{character.appearance}</p>
          </section>
          <section>
            <h2 className="text-sm uppercase tracking-[0.2em] text-slate-400">Personality</h2>
            <p className="mt-1">{character.personality}</p>
          </section>
          <section>
            <h2 className="text-sm uppercase tracking-[0.2em] text-slate-400">Lineage</h2>
            <p className="mt-1">{character.lineage}</p>
          </section>
          <section>
            <h2 className="text-sm uppercase tracking-[0.2em] text-slate-400">Abilities</h2>
            <ul className="mt-2 grid gap-2 md:grid-cols-2">
              {character.abilities.map((ability) => (
                <li key={ability} className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm">
                  {ability}
                </li>
              ))}
            </ul>
          </section>
          <blockquote className="rounded-xl border-l-2 border-violet-300/70 bg-black/25 px-4 py-3 italic text-slate-200">
            “{character.quote}”
          </blockquote>
        </div>
      </div>
    </main>
  );
}
