import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      axios.get<Product>(`https://dummyjson.com/products/${id}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error(`Error fetching product data: ${error}`);
        });
    }
  }, [id]);

  return (
    <div className="p-5 w-[60%]">
      <button
        onClick={() => navigate(-1)}
        className="mb-5 px-4 py-2 bg-black text-white rounded"
      >
        Back
      </button>
      {product && (
        <>
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-[50%] h-auto mb-5"
          />
          <h1 className="text-2xl mb-4 font-bold">{product.title}</h1>
          <p className="mb-4 text-gray-700 w-[70%]">{product.description}</p>
          <div className="flex">
            <p>Price: ${product.price}</p>
            <p className="ml-10">Rating: {product.rating}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
