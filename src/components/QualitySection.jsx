import React from "react";

const QualitySection = () => {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center px-6 md:px-20"
      style={{
        backgroundImage: "url(https://thewingsinternational.com/wp-content/uploads/2024/09/arrangement-frozen-food-table_23-2148969436.jpg)",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center text-white max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-serif italic mb-6">
          Uncompromising Quality, Exceptional Taste
        </h2>

        <p className="text-sm md:text-lg leading-relaxed">
          At The viaan enterprise, quality is the cornerstone of everything we
          do. We are dedicated to sourcing the finest ingredients and utilizing
          state-of-the-art processes to ensure that our frozen and dry foods
          meet the highest international standards. Each product is crafted
          with care and precision, maintaining unparalleled freshness and
          flavor. Our rigorous quality control and commitment to excellence
          ensure that every item not only meets but exceeds your expectations.
          Experience the rich, authentic taste and reliability of our products,
          and see why viaan enterprise is the trusted choice for premium food
          solutions worldwide.
        </p>
      </div>
    </div>
  );
};

export default QualitySection;