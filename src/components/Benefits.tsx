export default function Benefits() {
  const items = [
    "Presupuesto cerrado",
    "Profesionales cualificados",
    "Garantía de satisfacción",
    "Reserva online",
    "Más de 30 años de experiencia",
    "Cuidamos los detalles"
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {items.map((item, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl text-center shadow-sm"
          >
            <h3 className="font-semibold text-lg">{item}</h3>
          </div>
        ))}

      </div>

    </section>
  );
}