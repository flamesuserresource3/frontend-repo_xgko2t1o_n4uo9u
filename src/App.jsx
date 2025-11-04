import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import WhyUsSection from './components/WhyUsSection.jsx';
import BlogSection from './components/BlogSection.jsx';

const reviews = [
  {
    name: 'Carlos M.',
    role: 'Founder SaaS, España',
    text: 'Pasé de una estructura ineficiente a un esquema internacional sólido. Ahorro fiscal y tranquilidad total.',
  },
  {
    name: 'Lucía R.',
    role: 'E-commerce, México',
    text: 'Me ayudaron con mi residencia en EAU y la apertura bancaria. Todo legal, claro y muy profesional.',
  },
  {
    name: 'Matías G.',
    role: 'Agencia de marketing, Argentina',
    text: 'Su seguimiento anual marca la diferencia. Siempre tengo claridad y soporte para tomar decisiones.',
  },
];

function ReviewsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 4000);
    return () => clearInterval(id);
  }, []);

  const current = reviews[index];

  return (
    <section className="bg-white text-black py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">Lo que dicen nuestros clientes</h2>
        <div className="mt-8 relative mx-auto max-w-3xl">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-black text-white shadow-xl">
            <p className="text-lg">“{current.text}”</p>
            <p className="mt-4 text-sm text-blue-100">{current.name} — {current.role}</p>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            {reviews.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${i === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoTestimonials() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center">Más reseñas en video</h2>
        <p className="mt-2 text-center text-gray-300">Historias reales de internacionalización y protección patrimonial.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            'https://www.youtube.com/embed/ysz5S6PUM-U',
            'https://www.youtube.com/embed/oHg5SJYRHA0',
            'https://www.youtube.com/embed/ScMzIvxBSi4',
          ].map((src) => (
            <div key={src} className="relative aspect-video rounded-xl overflow-hidden ring-1 ring-white/10">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`${src}?rel=0&controls=1`}
                title="Reseña en video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Rizzo & Partners" className="h-10 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <span className="text-xl font-semibold">Rizzo & Partners</span>
          </div>
          <p className="mt-4 text-gray-300 max-w-md">
            Despacho internacional de abogados y contadores. Estrategias a medida para founders y empresas globales.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Navegación</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a className="hover:text-white" href="#servicios">Servicios</a></li>
            <li><a className="hover:text-white" href="#consultoria">Consultoría</a></li>
            <li><a className="hover:text-white" href="#blog">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Síguenos</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a className="hover:text-white" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a className="hover:text-white" href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a className="hover:text-white" href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Rizzo & Partners. Todos los derechos reservados.
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/0000000000?text=Hola%20Rizzo%20%26%20Partners%2C%20me%20gustaría%20reservar%20una%20consultoría."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 hover:bg-green-400 text-white px-4 py-3 shadow-lg"
      aria-label="Contactar por WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0C5.39 0 .01 5.38.01 12c0 2.11.55 4.14 1.6 5.94L0 24l6.2-1.62A11.95 11.95 0 0 0 12 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.82c-1.94 0-3.83-.52-5.48-1.5l-.39-.23-3.68.96.98-3.59-.25-.37A9.83 9.83 0 0 1 2.18 12C2.18 6.55 6.56 2.18 12 2.18c2.62 0 5.08 1.02 6.94 2.88A9.8 9.8 0 0 1 21.82 12c0 5.45-4.38 9.82-9.82 9.82zm5.58-7.3c-.31-.16-1.83-.9-2.12-1-.29-.12-.5-.17-.71.16-.2.31-.82 1-.99 1.2-.18.2-.36.22-.67.07-.31-.16-1.33-.49-2.54-1.55-.94-.8-1.57-1.78-1.76-2.08-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.2-.31.31-.52.11-.2.05-.39-.02-.55-.07-.16-.71-1.7-.97-2.33-.25-.6-.51-.52-.71-.53h-.61c-.2 0-.52.07-.79.39-.27.31-1.04 1-1.04 2.43s1.06 2.82 1.21 3.01c.16.2 2.1 3.2 5.09 4.49.71.31 1.26.49 1.68.64.71.22 1.36.19 1.88.12.57-.09 1.83-.75 2.09-1.47.25-.71.25-1.31.18-1.46-.08-.16-.29-.25-.6-.41z"/></svg>
      WhatsApp
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-inter">
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
