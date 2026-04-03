export default function Benefits() {
  const items = [
    {
      title: "Presupuesto cerrado",
      desc: "Sin sorpresas al terminar la obra. Claridad y transparencia desde el principio.",
      icon: (
        <svg className="w-8 h-8 text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Profesionales cualificados",
      desc: "Nuestro equipo está formado por expertos con amplia trayectoria en su sector.",
      icon: (
        <svg className="w-8 h-8 text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Garantía de satisfacción",
      desc: "No terminamos el trabajo hasta que no estés 100% satisfecho con los resultados.",
      icon: (
        <svg className="w-8 h-8 text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Puntualidad",
      desc: "Cumplimos escrupulosamente con los plazos prometidos para no generarte molestias.",
      icon: (
        <svg className="w-8 h-8 text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Cuidamos los detalles",
      desc: "El rigor es nuestra marca. Creemos que la excelencia está en los matices más pequeños.",
      icon: (
        <svg className="w-8 h-8 text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      title: "Responsabilidad",
      desc: "Respondemos por nuestras acciones. Seguridad y confianza ante todo.",
      icon: (
        <svg className="w-8 h-8 text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-foreground tracking-tight mb-4 transition-colors">
            Por qué elegir <span className="text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] dark:text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">J&S Reformas</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
            Nuestros valores nos definen y nos permiten ofrecerte el mejor servicio posible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-xl hover:border-[#D4AF37]/30 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[#D4AF37]/5 dark:bg-[#B8860B]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground transition-colors group-hover:text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] dark:group-hover:text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}