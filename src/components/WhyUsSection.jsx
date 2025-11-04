import React from 'react';

const Pill = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium ring-1 ring-blue-200">
    {children}
  </span>
);

const WhyUsSection = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">
              ¿Por qué trabajar con nosotros?
            </h2>
            <p className="mt-4 text-gray-300">
              Somos un despacho internacional experto en fiscalidad y estructuras corporativas. Combinamos precisión legal, visión estratégica y una ética de transparencia absoluta.
            </p>
            <ul className="mt-6 space-y-4 text-gray-200">
              <li className="flex gap-3"><span className="text-blue-500">•</span> Competencia y profesionalismo avalados por casos reales de éxito.</li>
              <li className="flex gap-3"><span className="text-blue-500">•</span> Legalidad garantizada: cada paso se diseña y ejecuta con cumplimiento normativo.</li>
              <li className="flex gap-3"><span className="text-blue-500">•</span> Seguimiento personalizado todo el año, con garantía de satisfacción al 100%.</li>
              <li className="flex gap-3"><span className="text-blue-500">•</span> Transparencia total en honorarios, plazos y entregables.</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Compliance</Pill>
              <Pill>Optimización fiscal</Pill>
              <Pill>Protección patrimonial</Pill>
              <Pill>Internacionalización</Pill>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-white/10">
              <img
                src="https://images.pexels.com/photos/5668771/pexels-photo-5668771.jpeg"
                alt="Equipo Rizzo & Partners"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-4 rounded-xl shadow-xl">
              <p className="text-sm">+200 proyectos internacionales</p>
              <p className="text-xl font-semibold">Satisfacción 100%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
