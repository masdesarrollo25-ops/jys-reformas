export default function Services() {

  const services = [
    "Fontanería",
    "Electricidad",
    "Montaje de muebles",
    "Pintura",
    "Reparaciones del hogar",
    "Cerrajería"
  ];

  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Nuestros servicios
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow"
            >
              <h3 className="font-semibold text-xl">{service}</h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}