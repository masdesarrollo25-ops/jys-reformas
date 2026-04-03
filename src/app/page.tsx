import HeroVideo from "@/components/HeroVideo";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="scroll-smooth">

      <HeroVideo />

      <Benefits />

      <Services />

      <Reviews />

      <ContactForm />

      <Footer />

    </main>
  );
}