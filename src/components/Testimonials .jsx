import React from "react";

const Testimonials = () => {
  return (
    <div className="w-full bg-gray-100 py-20 px-6 md:px-20">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif italic text-gray-800">
          What our customers say
        </h2>
        <p className="mt-4 text-gray-600 italic">
          See what our satisfied clients have to say about our exceptional products.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
          <p className="text-gray-700 italic leading-relaxed">
            The viaan enterprise has consistently delivered top-quality products.
            The frozen foods are always fresh, and the dry ingredients are of
            exceptional quality. Highly recommend!
          </p>

          <h3 className="mt-8 text-2xl font-serif italic text-gray-900">
            Amit S
          </h3>
          <p className="text-gray-600 italic">Retailer</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
          <p className="text-gray-700 italic leading-relaxed">
            The viaan enterprise provides a diverse range of high-quality
            products. Their frozen potatoes and dried fruit powders are
            particularly impressive and always meet our standards.
          </p>

          <h3 className="mt-8 text-2xl font-serif italic text-gray-900">
            John K.
          </h3>
          <p className="text-gray-600 italic">Exporter</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
          <p className="text-gray-700 italic leading-relaxed">
            The mango pulps from viaan enterprise are unmatched in flavor and
            consistency. Our customers love them, and we couldn't be happier
            with the service and quality.
          </p>

          <h3 className="mt-8 text-2xl font-serif italic text-gray-900">
            Linda M
          </h3>
          <p className="text-gray-600 italic">Food Distributor</p>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;