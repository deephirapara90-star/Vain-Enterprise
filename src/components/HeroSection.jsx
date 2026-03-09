import React from "react";
import frozenImg from "../assets/feazon.jpg"; // tamari image aa naam thi mukjo

const HeroSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={frozenImg}
            alt="Frozen Products"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <p className="text-gray-600 italic mb-2">Welcome To</p>

          <h1 className="text-4xl md:text-5xl font-serif italic mb-4">
            The viaan enterprise
          </h1>

          <p className="text-gray-700 leading-relaxed mb-8">
            At viaan enterprise, we are dedicated to bringing the finest
            frozen and dry food products from India to the global market.
            Established with a vision to connect international consumers
            with the rich flavors and quality of Indian produce, we pride
            ourselves on our extensive range of products and our commitment
            to excellence.
          </p>

          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition">
            KNOW MORE
          </button>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;