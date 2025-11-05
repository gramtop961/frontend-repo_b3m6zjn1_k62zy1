import React from 'react';
import Spline from '@splinetool/react-spline';

const WorldMap = () => {
  return (
    <section className="relative bg-[#0a0a0a] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">Interactive World Map</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Explore the Kurulosh kingdom. Drag to orbit, scroll to zoom, click to discover landmarks.</p>
        </div>

        <div className="relative h-[480px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
          <Spline
            scene="https://prod.spline.design/8m2kO8oGk8oLwz8q/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />

          {/* soft edges and lighting overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
