import React, { useState } from "react";

interface BookProps {
  id: string;
  title: string;
  price: number;
  image: string;
}

const BookCurd: React.FC<BookProps> = ({ id, title, price, image }) => {
  return (
    <div className="border p-4 rounded">
      <a href={`/product/${id}`} className="block">
        <img src={image} alt={title} className="w-full h-32 object-cover mb-2" />
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-gray-600">${price.toFixed(2)}</p>
      </a>
    </div>
  );
};

const ProductListWithPagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;  

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPaginationButtons = () => {
    const buttons: number[] = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage - 2 < 1) {
      endPage = Math.min(totalPages, endPage + (2 - (currentPage - 1)));
    }
    if (currentPage + 2 > totalPages) {
      startPage = Math.max(1, startPage - ((currentPage + 2) - totalPages));
    }

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(page);
    }

    return buttons;
  };

  return (
    <div>
      {/* Product Grid */}
      <div className="grid grid-cols-3 gap-4">
        {/* Example: Replace below with a map of product data */}
        <BookCurd id="1" title="Example Book" price={29.99} image="example.jpg" />
        {/* Add more BookCurd components dynamically */}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {getPaginationButtons().map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 mx-1 border rounded ${
              page === currentPage ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductListWithPagination;
