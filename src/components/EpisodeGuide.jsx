import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const episodes = [
  { id: 1, title: 'Rise of the Golden Standard', summary: 'Orhan claims his birthright as shadows gather.', length: '48m' },
  { id: 2, title: 'Crimson Vale', summary: 'Aylin’s visions guide a perilous path.', length: '51m' },
  { id: 3, title: 'Forge of Storms', summary: 'Tarkan rallies the legion against betrayal.', length: '49m' },
  { id: 4, title: 'The Throne Room', summary: 'Destinies collide beneath gilded firelight.', length: '52m' },
];

const EpisodeCard = ({ ep, onOpen }) => (
  <motion.button
    onClick={() => onOpen(ep)}
    whileHover={{ y: -6 }}
    whileTap={{ scale: 0.98 }}
    className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 text-left shadow-lg overflow-hidden"
  >
    <div className="absolute inset-0" style={{
      background: 'linear-gradient(135deg, rgba(128,0,32,0.12), rgba(184,134,11,0.12))'
    }} />
    <div className="relative z-10">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">E{ep.id} • {ep.title}</h3>
        <span className="text-xs text-[#b8860b] bg-[#b8860b]16 px-2 py-1 rounded-full border border-[#b8860b]33">{ep.length}</span>
      </div>
      <p className="mt-2 text-sm text-white/80">{ep.summary}</p>
      <div className="mt-3 text-sm text-[#b8860b]">Click to watch trailer</div>
    </div>

    <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity" style={{
      background: 'radial-gradient(600px circle at 30% -10%, rgba(184,134,11,0.15), transparent 40%)'
    }} />
  </motion.button>
);

const TrailerModal = ({ open, onClose, ep }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl"
        >
          <button onClick={onClose} className="absolute right-3 top-3 z-10 rounded-full bg-white/10 px-3 py-1 text-sm text-white hover:bg-white/20">Close</button>
          <div className="aspect-video w-full">
            <video
              className="h-full w-full"
              controls
              preload="none"
              poster="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1920&auto=format&fit=crop"
            >
              <source src="https://cdn.coverr.co/videos/coverr-crystal-forest-4353/1080p.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-5">
            <h4 className="text-xl text-white font-semibold">E{ep?.id} • {ep?.title}</h4>
            <p className="mt-2 text-white/70">{ep?.summary}</p>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const EpisodeGuide = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const onOpen = (ep) => {
    setSelected(ep);
    setOpen(true);
  };

  return (
    <section className="relative bg-[#0a0a0a] py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(800px circle at 80% 10%, rgba(184,134,11,0.08), transparent 40%), radial-gradient(900px circle at 20% 50%, rgba(128,0,32,0.12), transparent 45%)'
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">Episode Guide</h2>
          <p className="mt-3 text-white/70">Floating 3D cards expand to reveal cinematic trailers.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((ep) => (
            <EpisodeCard key={ep.id} ep={ep} onOpen={onOpen} />
          ))}
        </div>
      </div>

      <TrailerModal open={open} onClose={() => setOpen(false)} ep={selected} />
    </section>
  );
};

export default EpisodeGuide;
