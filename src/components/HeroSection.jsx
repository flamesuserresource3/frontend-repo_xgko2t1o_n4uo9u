import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src="https://videos.pexels.com/video-files/3183171/3183171-uhd_2560_1440_25fps.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <img
          src="/logo.png"
          alt="Rizzo & Partners"
          className="mx-auto mb-8 h-16 sm:h-20 object-contain"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          Estrategias internacionales a la medida de tu negocio
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          No estandarizamos procesos. Diseñamos soluciones únicas para cada cliente:
          optimización fiscal, protección patrimonial e internacionalización real.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#servicios"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-500 transition text-white font-medium shadow-lg shadow-blue-600/30"
          >
            Ver servicios
          </a>
          <a
            href="#consultoria"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 hover:border-white/60 transition text-white font-medium"
          >
            Reservar consultoría
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
