import React from "react";
import d1 from "../assets/Lemon.webp"
import d2 from "../assets/banana.webp"
import d3 from "../assets/Corn.webp"
import d4 from "../assets/poteto.webp"
import d5 from "../assets/food.webp"
import d6 from "../assets/rice.webp"

const Products = () => {
  return (
    <div className="w-full bg-gray-100 py-16 px-6 md:px-20">
      
      {/* Heading */}

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif italic text-gray-800">
          Explore Our Products
        </h2>
        <p className="mt-4 text-gray-600">
          View our extensive range of premium frozen and dry food offerings.
        </p>
      </div>

      {/* Product Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        
        <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
          <img
            src={d1}
            alt="Lemon"
            className="w-full h-48 object-cover"
          />
        </div>

        <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
          <img
            src={d2}
            alt="Banana"
            className="w-full h-48 object-cover"
          />
        </div>

        <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
          <img
            src={d3}
            alt="Corn"
            className="w-full h-48 object-cover"
          />
        </div>

        <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
          <img
            src={d4}
            alt="Potato"
            className="w-full h-48 object-cover"
          />
        </div>

        <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
          <img
            src={d5}
            alt="Frozen Food"
            className="w-full h-48 object-cover"
          />
        </div>

        <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
          <img
            src={d6}
            alt="Rice"
            className="w-full h-48 object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Products;