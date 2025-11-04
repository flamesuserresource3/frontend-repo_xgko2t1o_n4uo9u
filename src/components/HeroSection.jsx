import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
        >
          <source src="https://cdn.coverr.co/videos/coverr-city-sunrise-3265/1080p.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/3nP7t2PiFqS4Bf3I/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-24 text-center">
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Rizzo & Partners
        </h1>
        <p className="mt-4 max-w-3xl text-base text-gray-200 sm:text-lg">
          Consultoría estratégica, finanzas corporativas y crecimiento sostenible para empresas que buscan ir más allá.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#services"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-blue-500"
          >
            Nuestros servicios
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Agenda una consultoría
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
