import React from 'react'
import Footer from './Footer';

const Contact = () => {
  return (
    <>
    {/* ---------------------session1--------------------- */}
      <div
      className="relative w-full h-[300px] md:h-[350px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://thewingsinternational.com/wp-content/uploads/2024/09/food-arrangement-reusable-bag-scaled.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text */}
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-5xl font-serif italic">
          Contact
        </h1>
      </div>
    </div>

    {/* ------------------sessin2 -----------------*/}

     <div className="w-full bg-gray-200 py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Form */}
        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl italic font-serif text-gray-800 mb-2">
            Get in Touch with Us
          </h2>
          <p className="text-gray-500 mb-8">
            Would you like any additional details or sections for that page?
          </p>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 p-3 rounded-md outline-none focus:border-blue-600"
            />

            <input
              type="text"
              placeholder="Contact No."
              className="w-full border border-gray-300 p-3 rounded-md outline-none focus:border-blue-600"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-3 rounded-md outline-none focus:border-blue-600"
            />

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full border border-gray-300 p-3 rounded-md outline-none focus:border-blue-600"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Send Request
            </button>
          </form>
        </div>

        {/* Right Map */}
        <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Money%20Plant%20High%20Street%20Ahmedabad&output=embed"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </div>


 {/* --------------session3------------ */}

     <Footer/>
    
    </>
  )
}

export default Contact