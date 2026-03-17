'use client';

import { motion } from 'framer-motion';
import { CharacterCard } from '@/components/character-card';
import { Mist } from '@/components/mist';
import { coreCharacters, dragonOffspring, uncannyItems } from '@/data/universe';

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-12 md:px-12">
      <Mist />

      <section className="relative mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-violet-100 via-slate-200 to-rose-100 bg-clip-text text-4xl font-bold text-transparent md:text-6xl"
        >
          烬契四重奏
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base"
        >
          梦核与微恐之间，破罐咖啡馆在凌晨之后才算真正开门。点击任一角色，进入他们的档案层。
        </motion.p>
      </section>

      <section className="relative mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {coreCharacters.map((character, idx) => (
          <CharacterCard key={character.slug} character={character} index={idx} />
        ))}
      </section>

      <section className="relative mx-auto mt-14 grid max-w-6xl gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-violet-100">龙裔档案 · 异常子代</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {dragonOffspring.map((child) => (
              <li key={child.name} className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 transition hover:border-emerald-300/40 hover:shadow-aura">
                <span className="font-medium text-emerald-200">{child.name}</span> · {child.power}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-rose-100">日常物件 · 行为异常</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {uncannyItems.map((item) => (
              <li key={item.name} className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 transition hover:border-rose-300/50 hover:shadow-ember">
                <span className="font-medium text-rose-200">{item.name}</span>：{item.behavior}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
