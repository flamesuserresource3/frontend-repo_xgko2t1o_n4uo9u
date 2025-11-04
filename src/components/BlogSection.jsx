import React from 'react';

const posts = [
  {
    title: 'Tendencias de M&A 2025',
    excerpt: 'Qué pueden esperar los CFOs ante un escenario de tasas cambiantes y valuaciones en ajuste.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
    href: '#',
  },
  {
    title: 'Gobierno corporativo en crecimiento',
    excerpt: 'Prácticas clave para preparar tu empresa para inversión institucional.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop',
    href: '#',
  },
  {
    title: 'Estrategia: del plan a la acción',
    excerpt: 'Cómo vincular métricas, incentivos y ejecución para resultados sostenibles.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop',
    href: '#',
  },
];

const BlogSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Ideas y perspectivas</h2>
            <p className="mt-2 max-w-2xl text-gray-600">Insights para líderes que construyen el futuro de su organización.</p>
          </div>
          <a href="#" className="text-sm font-medium text-blue-700 hover:underline">Ver todo</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <a key={p.title} href={p.href} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-gray-600">{p.excerpt}</p>
                <div className="mt-4 text-sm font-medium text-blue-700">Leer más →</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
