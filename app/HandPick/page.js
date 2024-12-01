"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import recipes from "../data/recipes.json"; // Import your recipes data

export default function HandPick() {
  const [handPicked, setHandPicked] = useState([]);

  // Fetch the two hand-picked recipes when the component is mounted
  useEffect(() => {
    // Here, you can fetch the hand-picked recipes based on some criteria (e.g., top-rated or manually marked)
    const pickedRecipes = recipes.slice(0, 2); // Picking the first two recipes as an example
    setHandPicked(pickedRecipes);
  }, []);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 animate-fade-in-down">
        Hand-Picked Collections
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {handPicked.length > 0 ? (
          handPicked.map((recipe) => (
            <div
              key={recipe.id}
              className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer"
            >
              <Image
                src={`/assets/thumbs/${recipe.thumbnail}`} // Assuming `recipe.thumbnail` is the correct path
                alt={recipe.title}
                height={400}
                width={600}
                className="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
                <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                <a
                  href="./recipes.html"
                  className="text-orange-300 hover:underline"
                >
                  View Collection
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>Loading hand-picked recipes...</p>
        )}
      </div>
    </section>
  );
}
