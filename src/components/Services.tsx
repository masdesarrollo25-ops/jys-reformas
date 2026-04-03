export default function Services() {
  const services = [
    {
      title: "Fontanería",
      desc: "Instalación de sanitarios, reparación de tuberías, atascos y sistemas de agua en general.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Electricidad",
      desc: "Renovación de cuadros eléctricos, iluminación LED, enchufes y detección de fallas.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Montaje de muebles",
      desc: "Armado e instalación de muebles de cocina, salón, armarios a medida e IKEA.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Pintura",
      desc: "Trabajos de revestimiento exterior e interior, reparación de humedades y alisados.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Reparaciones del hogar",
      desc: "Desde colgar cortinas hasta arreglar persianas; pequeñas soluciones que marcan la diferencia.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      title: "Cerrajería",
      desc: "Instalación de cerraduras de seguridad, bombines y apertura de puertas trabadas.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-800/20 transition-colors duration-500 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold text-foreground tracking-tight mb-4 transition-colors">
              Nuestros <span className="text-blue-600 dark:text-blue-400">Servicios</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 transition-colors">
              Soluciones integrales para el mantenimiento y mejora de tu hogar, ejecutadas por profesionales de confianza.
            </p>
          </div>
          <a 
            href="#contacto" 
            className="hidden md:inline-flex mt-6 md:mt-0 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-foreground font-semibold rounded-xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300"
          >
            Presupuesto General
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:border-blue-500/50 transition-all duration-500 group flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="font-bold text-2xl mb-4 text-foreground transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">{service.title}</h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow transition-colors">
                {service.desc}
              </p>
              
              <a 
                href="#contacto" 
                className="mt-auto flex items-center text-blue-600 dark:text-blue-400 font-semibold group/btn"
              >
                Solicitar para {service.title.toLowerCase()}
                <svg className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}