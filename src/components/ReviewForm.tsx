"use client";

import { useActionState } from "react";
import { saveReview } from "@/app/actions";
import { useState } from "react";

export default function ReviewForm() {
  const [state, formAction, isPending] = useActionState(saveReview, { success: false });
  const [rating, setRating] = useState(5);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700/50 transition-colors duration-500 sticky top-8">
      <h3 className="text-2xl font-bold mb-6 text-foreground transition-colors">Deja tu valoración</h3>
      <form action={formAction} className="space-y-4">
        <div>
          <label htmlFor="nameR" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 transition-colors">Nombre</label>
          <input 
            type="text" 
            id="nameR" 
            name="name" 
            required 
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-foreground focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all" 
            placeholder="Tu nombre" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 transition-colors">Calificación</label>
          <input type="hidden" name="rating" value={rating} />
          <div className="flex gap-1 cursor-pointer">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg 
                key={star} 
                onClick={() => setRating(star)}
                className={`w-8 h-8 transition-colors ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-300 dark:text-gray-600 fill-current hover:text-yellow-200"}`} 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="comment" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 transition-colors">Comentario</label>
          <textarea 
            id="comment" 
            name="comment" 
            required 
            rows={3} 
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-foreground focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all resize-none" 
            placeholder="¿Qué te pareció nuestro trabajo?"
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isPending} 
          className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#FACC15] to-[#B8860B] border border-[#d4af37]/50 shadow-[0_0_15px_rgba(212,175,55,0.2)] text-black hover:brightness-110 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-70 flex justify-center items-center"
        >
          {isPending && (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
          {isPending ? "Enviando..." : "Publicar Reseña"}
        </button>

        {state?.message && (
          <p className={`mt-4 text-sm font-medium p-3 rounded-xl border transition-all ${state.success ? "text-green-600 bg-green-50 border-green-200 dark:text-green-400 dark:bg-green-900/20 dark:border-green-800" : "text-red-600 bg-red-50 border-red-200 dark:text-red-400 dark:bg-red-900/20 dark:border-red-800"}`}>
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}
