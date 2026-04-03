"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // USING FORMSUBMIT.CO API
      const response = await fetch("https://formsubmit.co/ajax/tu_correo@ejemplo.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-background to-gray-50 dark:to-gray-900/20 relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 backdrop-blur-3xl rounded-full blur-[120px] w-1/2 h-1/2 top-0 left-1/4 pointer-events-none transition-all duration-500" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-foreground tracking-tight mb-4 transition-colors duration-500">
            Solicita tu <span className="text-blue-600 dark:text-blue-500">Presupuesto</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-500">
            Cuéntanos sobre tu proyecto de reforma. Te contactaremos lo antes posible con una propuesta personalizada o para agendar una visita.
          </p>
        </div>

        <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700/50 transition-colors duration-500 group hover:border-blue-500/30">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="_subject" value="Nuevo presupuesto - J&S Reformas" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-500">Nombre completo</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 text-foreground focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:bg-white dark:hover:bg-gray-900"
                  placeholder="Ej. Juan Pérez"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-500">Correo electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 text-foreground focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:bg-white dark:hover:bg-gray-900"
                  placeholder="juan@ejemplo.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-500">Teléfono</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                required 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 text-foreground focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:bg-white dark:hover:bg-gray-900"
                placeholder="600 000 000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-500">¿Qué necesitas?</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 text-foreground focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:bg-white dark:hover:bg-gray-900 resize-none"
                placeholder="Describe brevemente la reforma que deseas..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === "loading"}
              className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 m-auto"
            >
              {status === "loading" ? "Enviando..." : "Pedir Presupuesto"}
            </button>
            
            {status === "success" && (
              <p className="text-green-600 dark:text-green-400 mt-4 font-medium text-sm p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800 text-center animate-pulse">
                ¡Gracias! Tu mensaje ha sido enviado correctamente.
              </p>
            )}
            
            {status === "error" && (
              <p className="text-red-600 dark:text-red-400 mt-4 font-medium text-sm p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800 text-center">
                Ha ocurrido un error. Por favor, inténtalo de nuevo o contáctanos por teléfono.
              </p>
            )}
          </form>
          <div className="mt-8 text-xs text-gray-500 dark:text-gray-400 text-center border-t border-gray-200 dark:border-gray-700/50 pt-6">
            ⚠️ Nota del desarrollador: Reemplaza <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">tu_correo@ejemplo.com</code> en <code>ContactForm.tsx</code> con tu correo electrónico de la empresa.
          </div>
        </div>
      </div>
    </section>
  );
}
