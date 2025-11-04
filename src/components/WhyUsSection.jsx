import React from 'react';
import { CheckCircle, Award, Clock, Target } from 'lucide-react';

const bullets = [
  { icon: <Award className="h-5 w-5 text-blue-600" />, text: 'Experiencia comprobada en múltiples industrias' },
  { icon: <Target className="h-5 w-5 text-blue-600" />, text: 'Enfoque en resultados y creación de valor' },
  { icon: <Clock className="h-5 w-5 text-blue-600" />, text: 'Ejecución ágil con impactos en semanas' },
  { icon: <CheckCircle className="h-5 w-5 text-blue-600" />, text: 'Metodologías probadas y personalizadas' },
];

const WhyUsSection = () => {
  return (
    <section className="relative bg-gray-50 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl font-semibold sm:text-4xl">¿Por qué Rizzo & Partners?</h2>
          <p className="mt-3 text-gray-700">
            Nos integramos con tu equipo para resolver los retos que importan, combinando rigor analítico
            con una ejecución centrada en el negocio.
          </p>
          <ul className="mt-6 space-y-3">
            {bullets.map((b, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-0.5">{b.icon}</span>
                <span className="text-gray-700">{b.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1600&auto=format&fit=crop"
              alt="Equipo trabajando en estrategia"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
