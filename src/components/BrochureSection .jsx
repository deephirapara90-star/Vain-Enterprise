import React from "react";

const BrochureSection = () => {
  return (
    <div
      className="w-full bg-cover bg-center py-20 px-6 md:px-20"
      style={{
        backgroundImage:
          "url('/assets/purpal.png')",
      }}
    
    >
        
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="text-white max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Download Our Product Brochure
          </h2>
          <p className="text-lg leading-relaxed">
            Explore our full range of premium frozen and dry foods. Download
            our brochure to see detailed product information and discover how
            viian enterprise can meet your needs.
          </p>
        </div>

        {/* Right Button */}
        <div>
          <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-700 transition duration-300">
            DOWNLOAD BROCHURE
          </button>
        </div>

      </div>
      <div className="deep"></div>
    </div>
  );
};

export default BrochureSection;