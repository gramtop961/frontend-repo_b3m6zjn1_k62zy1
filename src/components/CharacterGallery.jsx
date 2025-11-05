import React from 'react';
import { motion } from 'framer-motion';

const characters = [
  {
    name: 'Orhan',
    role: 'The Heir of Kurulosh',
    colorFrom: '#800020',
    colorTo: '#b8860b',
    quote: 'Honor binds the crown to the soul.',
  },
  {
    name: 'Aylin',
    role: 'Seer of the Crimson Vale',
    colorFrom: '#b8860b',
    colorTo: '#800020',
    quote: 'The stars whisper to those who listen.',
  },
  {
    name: 'Tarkan',
    role: 'General of the Golden Legion',
    colorFrom: '#5a0f1b',
    colorTo: '#b8860b',
    quote: 'Steel remembers the truth of battle.',
  },
];

const CharacterCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ rotateY: 12, rotateX: -6, z: 30 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="group relative rounded-2xl p-[1px]"
      style={{ perspective: 1000 }}
    >
      <div
        className="rounded-2xl p-6 bg-[#0a0a0a]/70 backdrop-blur-xl border border-white/10 shadow-lg"
        style={{
          backgroundImage: `linear-gradient(135deg, ${item.colorFrom}22, ${item.colorTo}22)`,
        }}
      >
        <div className="h-40 rounded-xl mb-4 bg-gradient-to-br" style={{ backgroundImage: `linear-gradient(135deg, ${item.colorFrom}, ${item.colorTo})` }} />
        <h3 className="text-xl font-semibold text-white">{item.name}</h3>
        <p className="text-sm text-white/70">{item.role}</p>
        <p className="mt-3 text-white/80 italic">“{item.quote}”</p>
        <div className="mt-4 flex gap-2">
          <span className="text-xs text-[#b8860b] bg-[#b8860b]16 px-2 py-1 rounded-full border border-[#b8860b]33">Warrior</span>
          <span className="text-xs text-[#b8860b] bg-[#b8860b]16 px-2 py-1 rounded-full border border-[#b8860b]33">Royal</span>
        </div>
      </div>

      {/* glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
        background: `radial-gradient(600px circle at var(--x,50%) var(--y,50%), ${item.colorTo}33, transparent 40%)`
      }} />
    </motion.div>
  );
};

const CharacterGallery = () => {
  return (
    <section className="relative w-full bg-[#0a0a0a] py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(800px circle at 20% 10%, rgba(184,134,11,0.08), transparent 40%), radial-gradient(900px circle at 80% 30%, rgba(128,0,32,0.12), transparent 45%)'
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white"><span className="text-[#b8860b]">Characters</span> of the Realm</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Interactive 3D-inspired cards. Hover to tilt and reveal hints of their legacy.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {characters.map((c) => (
            <CharacterCard key={c.name} item={c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharacterGallery;
