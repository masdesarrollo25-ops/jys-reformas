export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-blue-500 mb-4">J&S Reformas</h3>
          <p className="text-gray-400">
            Expertos en reformas y reparaciones del hogar. Calidad, rapidez y confianza garantizada.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Secciones</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-blue-400 transition">Inicio</a></li>
            <li><a href="#contacto" className="hover:text-blue-400 transition">Presupuesto</a></li>
            <li><a href="#reseñas" className="hover:text-blue-400 transition">Reseñas</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Contacto</h4>
          <ul className="space-y-2 text-gray-400">
            <li>📍 Alicante y alrededores</li>
            <li>✉️ jys.reformas26@gmail.com</li>
            <li>📞 +34 604 956 347</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm flex flex-col items-center gap-2">
        <p>&copy; {new Date().getFullYear()} J&S Reformas. Todos los derechos reservados.</p>
        <p className="text-[10px] text-gray-600 opacity-60 font-light hover:opacity-100 transition-opacity">Desarrollado por MAS DESARROLLO</p>
      </div>
    </footer>
  );
}
