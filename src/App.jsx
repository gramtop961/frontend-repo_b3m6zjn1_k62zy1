import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import CharacterGallery from './components/CharacterGallery.jsx';
import EpisodeGuide from './components/EpisodeGuide.jsx';
import WorldMap from './components/WorldMap.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-white">
      {/* Hero with immersive 3D trailer background */}
      <HeroSection />

      {/* Character gallery with 3D-inspired hover interactions */}
      <CharacterGallery />

      {/* Episode guide with floating cards and cinematic trailers */}
      <EpisodeGuide />

      {/* Interactive world map in 3D */}
      <WorldMap />

      {/* Footer / links */}
      <footer className="bg-[#0a0a0a] border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white/70">© {new Date().getFullYear()} Kurulosh Orhan</div>
            <div className="flex items-center gap-3">
              <a href="#" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition">Download</a>
              <a href="#" className="rounded-full border border-[#b8860b]/40 bg-[#b8860b]/10 px-4 py-2 text-sm text-[#b8860b] hover:bg-[#b8860b]/20 transition">Stream</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
