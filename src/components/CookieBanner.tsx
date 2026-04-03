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
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors whitespace-nowrap shadow-md focus:ring-2 focus:ring-blue-500 outline-none"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
