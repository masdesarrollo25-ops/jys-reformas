export default function HeroVideo() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

        <h1 className="text-5xl md:text-6xl font-bold">
          Manitas a domicilio en Alicante
        </h1>

        <p className="mt-6 text-xl max-w-xl">
          Reparaciones del hogar rápidas y profesionales
        </p>

        <a href="#contacto" className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg inline-block transition-transform hover:scale-105">
          Solicitar presupuesto
        </a>

      </div>
    </section>
  );
}