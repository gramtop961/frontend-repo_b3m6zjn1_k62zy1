import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const ParticleField = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', onResize);

    const particleCount = 140;
    particlesRef.current = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 0.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.4 + 0.6,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const grad = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.max(width, height));
      grad.addColorStop(0, 'rgba(184,134,11,0.04)');
      grad.addColorStop(1, 'rgba(10,10,10,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      particlesRef.current.forEach(p => {
        p.x += p.vx * p.z;
        p.y += p.vy * p.z;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * p.z, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,' + (0.4 + 0.6 * p.z) + ')';
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(render);
    };

    render();
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

const HeroSection = () => {
  const heroRef = useRef(null);
  const parallaxRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      const rect = heroRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      parallaxRef.current = { x: dx, y: dy };
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/H1d3D8p8U9q3oY2P/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <ParticleField />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/30 to-[#0a0a0a]" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-wide"
          style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b8860b] to-[#800020] drop-shadow-[0_2px_20px_rgba(184,134,11,0.25)]">
            Kurulosh Orhan
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mt-5 max-w-2xl text-white/80"
          style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}
        >
          An epic saga of power, honor, and destiny. Enter a dark, cinematic realm bathed in royal gold and deep burgundy.
        </motion.p>

        <motion.div
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ x: parallaxRef.current.x * 10, y: parallaxRef.current.y * 10 }}
          transition={{ type: 'spring', stiffness: 40, damping: 12 }}
          className="mt-10 rounded-2xl bg-white/5 backdrop-blur-md p-5 sm:p-6 border border-white/10 shadow-xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#b8860b]">Season Premiere</p>
          <p className="mt-1 text-lg sm:text-xl text-white">Stream now in immersive 3D</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
