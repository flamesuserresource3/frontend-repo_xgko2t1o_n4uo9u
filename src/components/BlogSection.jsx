import React from 'react';

const posts = [
  {
    title: 'Residencia fiscal: cómo elegir el país correcto',
    excerpt: 'Criterios clave para trasladar tu residencia fiscal sin riesgos y con máxima eficiencia.',
    image: 'https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg',
  },
  {
    title: 'Holding companies: estructura, ventajas y errores comunes',
    excerpt: 'Guía práctica para proteger activos y optimizar impuestos usando holdings internacionales.',
    image: 'https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg',
  },
  {
    title: 'Cuentas bancarias offshore: mitos, realidades y compliance',
    excerpt: 'Cómo abrir y operar cuentas internacionales con seguridad y cumplimiento.',
    image: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="bg-white text-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Blog</h2>
            <p className="mt-2 text-gray-600">Estrategia, fiscalidad y expansión internacional para founders.</p>
          </div>
          <a href="#" className="text-blue-600 hover:text-blue-500 font-medium">Ver todos los artículos →</a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group rounded-xl overflow-hidden bg-white ring-1 ring-black/5 shadow hover:shadow-lg transition">
              <img src={p.image} alt={p.title} className="h-48 w-full object-cover group-hover:scale-[1.02] transition" />
              <div className="p-6">
                <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">{p.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
