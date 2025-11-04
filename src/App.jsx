import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import WhyUsSection from './components/WhyUsSection.jsx';
import BlogSection from './components/BlogSection.jsx';

const ReviewsCarousel = () => {
  const reviews = [
    { name: 'María G.', role: 'CEO, Fintech', text: 'Resultados visibles en 8 semanas. Equipo senior, enfoque en valor.' },
    { name: 'Jorge R.', role: 'CFO, Retail', text: 'Su modelo financiero nos permitió cerrar una ronda clave.' },
    { name: 'Lucía P.', role: 'COO, Logística', text: 'Ejecución impecable y gran acompañamiento al equipo.' },
  ];
  return (
    <section className="bg-gray-50 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-900">Lo que dicen nuestros clientes</h2>
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="text-gray-700">“{r.text}”</p>
              <div className="mt-4 text-sm font-medium text-gray-900">{r.name}</div>
              <div className="text-xs text-gray-500">{r.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoTestimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Testimonios en video</h2>
        <p className="mt-2 max-w-2xl text-gray-600">Casos reales de transformación y crecimiento.</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {[
            'https://www.youtube.com/embed/ysz5S6PUM-U',
            'https://www.youtube.com/embed/aqz-KE-bpKQ',
          ].map((src, idx) => (
            <div key={idx} className="aspect-video overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <iframe
                className="h-full w-full"
                src={src}
                title={`Testimonio ${idx + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white py-10 text-gray-700">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div>
          <div className="text-lg font-semibold text-gray-900">Rizzo & Partners</div>
          <p className="text-sm text-gray-600">Estrategia y finanzas para un crecimiento sostenible.</p>
        </div>
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} Rizzo & Partners. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5491122334455"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-600"
      aria-label="WhatsApp"
    >
      WhatsApp
    </a>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeroSection />
      <ReviewsCarousel />
      <ServicesSection />
      <WhyUsSection />
      <VideoTestimonials />
      <BlogSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
