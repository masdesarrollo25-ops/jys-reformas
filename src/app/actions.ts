"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase";

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const getFilePath = () => path.join(process.cwd(), "src/data/reviews.json");

export async function getReviews(): Promise<Review[]> {
  try {
    if (supabase) {
      const { data, error } = await supabase.from('reviews').select('*').order('date', { ascending: false });
      if (!error && data && data.length > 0) {
        return data as Review[];
      }
    }
    
    const filePath = getFilePath();
    const fileData = await fs.readFile(filePath, "utf-8");
    return JSON.parse(fileData);
  } catch (error) {
    console.error("Error reading reviews:", error);
    return [];
  }
}

export async function saveReview(prevState: any, formData: FormData): Promise<{ success: boolean; message?: string }> {
  try {
    const name = formData.get("name") as string;
    const rating = Number(formData.get("rating"));
    const comment = formData.get("comment") as string;

    if (!name || !rating || !comment) {
      return { success: false, message: "Todos los campos son obligatorios." };
    }
    if (rating < 1 || rating > 5) {
      return { success: false, message: "La calificación debe estar entre 1 y 5." };
    }

    const newReview: Review = {
      id: Date.now().toString(),
      name,
      rating,
      comment,
      date: new Date().toISOString(),
    };

    if (supabase) {
      const { error } = await supabase.from('reviews').insert([newReview]);
      if (error) {
        console.error("Supabase insert error:", error);
        return { success: false, message: "Hubo un error al guardar tu reseña en la BBDD." };
      }
    } else {
      const filePath = getFilePath();
      let reviews: Review[] = [];

      try {
        const data = await fs.readFile(filePath, "utf-8");
        reviews = JSON.parse(data);
      } catch (e) {
      }

      reviews.unshift(newReview);
      const dir = path.dirname(filePath);
      await fs.mkdir(dir, { recursive: true });
      await fs.writeFile(filePath, JSON.stringify(reviews, null, 2), "utf-8");
    }
    
    revalidatePath("/");
    return { success: true, message: "¡Gracias por tu valoración!" };
  } catch (error) {
    console.error("Error saving review", error);
    return { success: false, message: "Hubo un error al procesar tu solicitud." };
  }
}

export async function saveBudgetRequest(data: { name: string, email: string, phone: string, message: string }) {
  if (!supabase) {
    console.error("Excepción: Supabase client no está inicializado. Faltan variables de entorno.");
    return { success: false, message: "Error de configuración de la base de datos." };
  }
  
  try {
    const { error } = await supabase.from('budgets').insert([{
      ...data,
      date: new Date().toISOString()
    }]);
    
    if (error) {
      console.error("Supabase insert error in saveBudgetRequest:", error);
      return { success: false, message: "Hubo un error al guardar tu presupuesto en la BBDD." };
    }
    return { success: true };
  } catch(e) {
    console.error("Exception in saveBudgetRequest:", e);
    return { success: false, message: "Error inesperado al conectar con la base de datos." };
  }
}
