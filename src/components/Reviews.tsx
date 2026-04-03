import { getReviews } from "@/app/actions";
import ReviewForm from "./ReviewForm";
import Stars from "./Stars";

export default async function Reviews() {
  const reviews = await getReviews();

  return (
    <section id="reseñas" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-foreground tracking-tight mb-4 transition-colors duration-500">
            Lo que dicen <span className="text-blue-600 dark:text-blue-400">Nuestros Clientes</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-500">
            La satisfacción de nuestros clientes es nuestra mejor garantía.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-1">
            <ReviewForm />
          </div>

          {/* List */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review.id} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <Stars rating={review.rating} />
                  <p className="mt-4 text-gray-700 dark:text-gray-300 italic transition-colors">"{review.comment}"</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-semibold text-foreground transition-colors">{review.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="md:col-span-2 flex justify-center items-center h-full min-h-[200px] border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-3xl">
                <p className="text-gray-500 dark:text-gray-400 italic">Aún no hay reseñas. ¡Sé el primero en dejar tu valoración!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
