import React from 'react';

const ServiceCard = ({ title, desc, image }) => (
  <div className="group relative overflow-hidden rounded-xl bg-white text-black shadow-lg ring-1 ring-black/5 hover:shadow-2xl transition">
    <img src={image} alt={title} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
    <div className="p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
  </div>
);

const ServicesSection = () => {
  const residencyCountries = [
    'Emiratos Árabes Unidos',
    'Malta',
    'Chipre',
    'Romania',
    'Paraguay',
    'Panamá',
    'Argentina',
    'Italia',
    'Portugal',
  ];

  return (
    <section id="servicios" className="bg-white text-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center">
          Nuestros servicios
        </h2>
        <p className="mt-3 text-center text-gray-600 max-w-3xl mx-auto">
          Soluciones premium para emprendedores digitales que buscan optimizar su carga fiscal y blindar su patrimonio a nivel internacional.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Cambio de residencia fiscal"
            desc={`Asesoramiento integral para trasladar tu residencia fiscal. Países: ${residencyCountries.join(', ')}.`}
            image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
          />
          <ServiceCard
            title="Apertura de sociedades offshore"
            desc="Estructuras en EE.UU., Reino Unido, Hong Kong y Singapur para escalar con eficiencia y compliance."
            image="https://images.pexels.com/photos/5668773/pexels-photo-5668773.jpeg"
          />
          <ServiceCard
            title="Cuentas bancarias internacionales"
            desc="Apertura y asesoría para cuentas offshore con máxima confidencialidad y protección financiera."
            image="https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg"
          />
          <ServiceCard
            title="Consultoría Fiscal Internacional"
            desc="Diagnóstico 360°, planificación fiscal y roadmap de implementación con seguimiento anual."
            image="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
          />
          <ServiceCard
            title="Holding Companies"
            desc="Diseño de estructuras holding para optimizar impuestos, proteger activos y facilitar expansión global."
            image="https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg"
          />
          <ServiceCard
            title="Cumplimiento y transparencia"
            desc="Todas nuestras estrategias cumplen con la legalidad vigente. Documentación y reporting impecables."
            image="https://images.pexels.com/photos/5668559/pexels-photo-5668559.jpeg"
          />
        </div>

        <div id="consultoria" className="mt-12 rounded-2xl bg-gradient-to-br from-blue-600 to-black p-1">
          <div className="rounded-2xl bg-white p-8 sm:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold">Reserva una consultoría estratégica</h3>
                <p className="mt-2 text-gray-600">
                  Agenda una llamada con nuestro equipo para evaluar tu situación y diseñar el plan óptimo para tu internacionalización.
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-500 transition shadow-lg shadow-blue-600/30"
                >
                  Ver disponibilidad del calendario
                </a>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&controls=1"
                  title="VSL Rizzo & Partners"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
