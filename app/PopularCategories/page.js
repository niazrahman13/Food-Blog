"use client";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import { useEffect, useState } from "react";
import categoriesData from "../data/categories.json"; // Import categories data
import recipes from "../data/recipes.json"; // Import recipes data

export default function PopularCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Initialize an object to store the category counts
    const categoryCount = {};

    // Loop through the recipes and count the categories
    recipes.forEach((recipe) => {
      const categoryId = recipe.category_id;

      if (!categoryCount[categoryId]) {
        categoryCount[categoryId] = 0;
      }
      categoryCount[categoryId]++;
    });

    // Convert the categoryCount object to an array and sort it
    const sortedCategories = Object.keys(categoryCount)
      .map((categoryId) => ({
        id: categoryId,
        count: categoryCount[categoryId],
      }))
      .sort((a, b) => b.count - a.count);

    // Match categories with their details from categories.json
    const popularCategories = sortedCategories.slice(0, 6).map((category) => {
      const categoryDetails = categoriesData.find(
        (cat) => cat.id === category.id
      );
      return {
        ...category,
        name: categoryDetails ? categoryDetails.name : "Unknown",
        image: categoryDetails
          ? `/assets${categoryDetails.image}`
          : "/default.jpg", // Prepend `/assets`
      };
    });

    // Set the top 6 categories with their details
    setCategories(popularCategories);
  }, []);

  return (
    <section className="mb-16">
      <div className="flex justify-between items-top">
        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
        <Link href="/Categories" className="text-orange-500">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="cursor-pointer text-center group">
            <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
              <Image
                src={category.image} // Now correctly references the images
                alt={category.name}
                height={100}
                width={100}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="transition-transform duration-300 group-hover:scale-105">
              <Link href={`/Desserts/${category.id}`}>{category.name}</Link>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
