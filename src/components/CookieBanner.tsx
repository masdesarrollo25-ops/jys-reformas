"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookieConsent");
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-900 border-t border-gray-800 shadow-2xl z-50 text-white transition-transform duration-500 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-sm text-gray-300 max-w-4xl text-center md:text-left">
        Utilizamos cookies para poder responder a sus peticiones de presupuesto y mejorar su experiencia. 
        Al hacer clic en "Aceptar", consientes su uso de acuerdo con la RGPD europea.
      </div>
      <div>
        <button 
          onClick={acceptCookies}
          className="px-6 py-2 bg-gradient-to-r from-[#D4AF37] via-[#FACC15] to-[#B8860B] border border-[#d4af37]/50 shadow-[0_0_15px_rgba(212,175,55,0.2)] text-black hover:brightness-110 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] text-white font-semibold rounded-lg transition-colors whitespace-nowrap shadow-md focus:ring-2 focus:ring-[#D4AF37] outline-none"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
