'use client';

import { motion } from 'framer-motion';

export function Mist() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-72 w-72 rounded-full bg-violet-300/10 blur-3xl"
          initial={{ x: `${15 + i * 20}%`, y: `${10 + i * 18}%`, opacity: 0.1 }}
          animate={{
            x: [`${15 + i * 20}%`, `${12 + i * 22}%`, `${18 + i * 18}%`],
            y: [`${10 + i * 18}%`, `${15 + i * 15}%`, `${8 + i * 20}%`],
            opacity: [0.12, 0.25, 0.12]
          }}
          transition={{ duration: 12 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
