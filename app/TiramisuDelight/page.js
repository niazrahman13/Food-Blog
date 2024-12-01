"use client";
import Image from "next/image";
import Link from "next/link"; // Use Link for routing
import { useEffect, useState } from "react";
import recipes from "../data/recipes.json"; // Import your recipes data

export default function TiramisuDelight() {
  const [randomRecipe, setRandomRecipe] = useState(null);

  useEffect(() => {
    if (recipes && recipes.length > 0) {
      const randomIndex = Math.floor(Math.random() * recipes.length);
      setRandomRecipe(recipes[randomIndex]);
    }
  }, []);

  if (!randomRecipe) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <section className="mb-16 bg-orange-50">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src={`/assets/thumbs/${randomRecipe.thumbnail}`}
              alt={randomRecipe.title}
              width={100}
              height={100}
              className="w-full h-[450px] object-cover rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{randomRecipe.title} </h1>
            <p className="text-gray-600 mb-4">
              {randomRecipe.description.length > 30
                ? randomRecipe.description.substring(0, 30) + "..."
                : randomRecipe.description}
            </p>
            <Link href={`/RecipeDetails/${randomRecipe.category_id}`}>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600">
                View Recipe
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
