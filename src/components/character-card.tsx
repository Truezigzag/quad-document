'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Character } from '@/data/universe';

export function CharacterCard({ character, index }: { character: Character; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group"
    >
      <Link
        href={`/characters/${character.slug}`}
        className="block rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition duration-300 hover:border-violet-300/40 hover:shadow-aura"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-violet-200/70">{character.title}</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">{character.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{character.appearance}</p>
      </Link>
    </motion.div>
  );
}
