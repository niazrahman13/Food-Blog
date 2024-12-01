"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { useEffect, useState } from "react";
import recipes from "../data/recipes.json"; // Import your recipes data

export default function LastRecipes() {
  const [latestRecipes, setLatestRecipes] = useState([]);
  const router = useRouter();

  // Fetch and sort the latest 4 recipes based on the date
  useEffect(() => {
    // Sort recipes by date (assuming `date` is in the format YYYY-MM-DD)
    const sortedRecipes = [...recipes]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 4); // Take the top 4 most recent recipes
    setLatestRecipes(sortedRecipes);
  }, []);

  // Function to handle clicking on a recipe to navigate to its detail page
  const handleClick = (id) => {
    router.push(`/RecipeDetails/${id}`); // Assuming the recipe detail page is at `/recipe/[id]`
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {latestRecipes.length > 0 ? (
          latestRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="cursor-pointer"
              onClick={() => handleClick(recipe.category_id)} // Handle click to navigate
            >
              <Image
                src={`/assets/thumbs/${recipe.thumbnail}`} // Ensure the correct path for the image
                alt={recipe.title}
                height={300}
                width={300}
                className="w-full h-[300px] object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600">{recipe.category}</p>{" "}
              {/* Display category */}
            </div>
          ))
        ) : (
          <p>Loading latest recipes...</p>
        )}
      </div>
    </section>
  );
}
