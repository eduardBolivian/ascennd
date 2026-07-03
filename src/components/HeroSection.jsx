import React, { useEffect, useRef, useState } from 'react';
import QuieroInvertir from './QuieroInvertir.jsx';

const MARCAS = ['Stripe', 'Coinbase', 'Uniswap', 'Aave', 'Compound', 'MakerDAO', 'Chainlink'];

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4';

function HeroSection() {
  const [opacity, setOpacity] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      requestAnimationFrame(() => setOpacity(1));
    };

    video.addEventListener('loadeddata', handleLoaded);
    return () => video.removeEventListener('loadeddata', handleLoaded);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Fondo de video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
        style={{ transform: 'translateY(17%)', opacity }}
        src={VIDEO_URL}
      />

      {/* Superposición oscura */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Contenido */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
          Que tus dólares trabajan mientras tú avanzas
        </h1>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <span className="text-3xl md:text-4xl font-bold" style={{ color: '#FFA500' }}>
            16%
          </span>
          <span className="text-3xl md:text-4xl text-white">de rendimiento estimado</span>
        </div>

        <p className="text-white/70 text-sm md:text-base max-w-lg mb-6 leading-relaxed">
          Conectamos tus dólares con asesores reales de inversión para que crezcan con
          estrategias diseñadas según tu perfil, con acompañamiento humano en cada paso.
        </p>

        <QuieroInvertir />

        {/* Marquee de marcas */}
        <div className="mt-24 w-full max-w-md overflow-hidden">
          <style>{`
            .marquee-track {
              display: flex;
              width: max-content;
              animation: marquee 22s linear infinite;
            }
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
          <div className="marquee-track">
            {[...MARCAS, ...MARCAS].map((marca, i) => (
              <span key={i} className="mx-7 shrink-0 text-white/60 whitespace-nowrap text-sm">
                {marca}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
