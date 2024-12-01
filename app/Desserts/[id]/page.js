"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import categories from "../../data/categories.json";
import recipes from "../../data/recipes.json";

export default function RecipeDetails() {
  const { id } = useParams();

  if (!id) {
    return <p>Loading...</p>;
  }

  // Find the category name based on the id
  const category = categories.find((cat) => cat.id === id);

  // If category is not found, handle the case
  if (!category) {
    return <p>Category not found.</p>;
  }

  // Filter the recipes based on the category_id
  const filteredRecipes = recipes.filter((recipe) => recipe.category_id === id);

  return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">
            {category.name}{" "}
            <span className="text-gray-500 text-2xl font-normal">
              ({filteredRecipes.length} Recipes)
            </span>
          </h1>
          <p className="text-gray-600">
            A collection of delicious recipes for you to try at home. Enjoy
            these carefully selected recipes!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={`/assets/thumbs/${recipe.thumbnail}`} // Make sure thumbnail names match
                alt={recipe.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-2">{recipe.title}</h2>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes found for this category.</p>
        )}
      </div>
    </main>
  );
}
