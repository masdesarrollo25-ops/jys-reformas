"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

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
    const filePath = getFilePath();
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
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

    const filePath = getFilePath();
    let reviews: Review[] = [];

    try {
      const data = await fs.readFile(filePath, "utf-8");
      reviews = JSON.parse(data);
    } catch (e) {
      // File doesn't exist or is invalid
    }

    reviews.unshift(newReview);

    const dir = path.dirname(filePath);
    await fs.mkdir(dir, { recursive: true });

    await fs.writeFile(filePath, JSON.stringify(reviews, null, 2), "utf-8");
    
    // Revalidate the homepage to show the new review instantly
    revalidatePath("/");
    
    return { success: true, message: "¡Gracias por tu valoración!" };
  } catch (error) {
    console.error("Error saving review", error);
    return { success: false, message: "Hubo un error al guardar la reseña." };
  }
}
