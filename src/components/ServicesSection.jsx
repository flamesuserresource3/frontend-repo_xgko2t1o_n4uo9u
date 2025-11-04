import React from 'react';
import { Briefcase, LineChart, Shield, Users } from 'lucide-react';

const services = [
  {
    icon: <Briefcase className="h-6 w-6 text-blue-600" />,
    title: 'Estrategia Corporativa',
    desc: 'Diseño de planes de crecimiento y posicionamiento para maximizar valor y competitividad.',
  },
  {
    icon: <LineChart className="h-6 w-6 text-blue-600" />,
    title: 'Finanzas & M&A',
    desc: 'Modelos financieros, valuaciones, due diligence y acompañamiento en fusiones y adquisiciones.',
  },
  {
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    title: 'Riesgos & Cumplimiento',
    desc: 'Gobierno corporativo, gestión de riesgos y cumplimiento normativo con estándares internacionales.',
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: 'Transformación Organizacional',
    desc: 'Diseño organizacional, cultura y procesos para habilitar el cambio y la ejecución.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative bg-white py-20 text-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Servicios</h2>
            <p className="mt-2 max-w-2xl text-gray-600">
              Soluciones de alto impacto para acelerar resultados y construir ventajas sostenibles.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-500"
          >
            Solicitar propuesta
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <div className="mt-4 text-sm font-medium text-blue-700 opacity-0 transition group-hover:opacity-100">
                Conoce más →
              </div>
            </div>
          ))}
        </div>

        {/* Embedded consult CTA/video */}
        <div className="mt-16 grid items-center gap-8 lg:grid-cols-2">
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video presentación"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Agenda una sesión de diagnóstico</h3>
            <p className="mt-3 text-gray-600">
              En 30 minutos identificamos oportunidades tácticas y definimos próximos pasos concretos.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• Sin costo, enfoque práctico</li>
              <li>• Recomendaciones accionables</li>
              <li>• Confidencialidad absoluta</li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-500"
            >
              Reservar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
