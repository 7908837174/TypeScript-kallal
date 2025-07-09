 import React, { useEffect, useState } from "react";

interface Product {
  category: string;
}

interface FetchResponse {
  products: Product[];
}

const Sidebar = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "fashion",
    "trend",
    "shoes",
    "shirt",
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products'); // Updated to actual dummy endpoint
        const data: FetchResponse = await response.json();
        console.log(data);
        const uniqueCategories = Array.from(
          new Set(data.products.map((product) => product.category))
        );
        console.log(uniqueCategories);
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching product categories', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="md-5 mt-4">
      <h2 className="text-xl font-semibold mb-3">Keywords</h2>
      <div>
        {keywords.map((keyword, index) => (
          <button
            key={index}
            className="block mb-2 py-2 px-4 w-full text-left border rounded hover:bg-gray-200"
          >
            {keyword}
          </button>
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-3">Categories</h2>
      <div>
        {categories.map((category, index) => (
          <div key={index} className="mb-2">
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;


