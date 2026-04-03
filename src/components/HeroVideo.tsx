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

        <a href="#contacto" className="mt-8 bg-gradient-to-r from-[#D4AF37] via-[#FACC15] to-[#B8860B] border border-[#d4af37]/50 shadow-[0_0_15px_rgba(212,175,55,0.2)] text-black hover:brightness-110 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] px-8 py-4 rounded-xl text-lg inline-block transition-transform hover:scale-105">
          Solicitar presupuesto
        </a>

      </div>
    </section>
  );
}