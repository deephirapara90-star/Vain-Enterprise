import React from 'react'
import p1 from "../assets/poster4.jpg"
import p2 from "../assets/poster2.png"
import p3 from "../assets/poster3.png"
import p4 from "../assets/poster5.jpg"
import p5 from "../assets/poster6.png"
import p6 from "../assets/poster7.png"
import p7 from "../assets/poster8.png"
import p8 from "../assets/poster9.jpeg"
import p9 from "../assets/poster10.png"
import p10 from "../assets/poster11.png"
import p11 from "../assets/poster12.png"
import p12 from "../assets/poster13.jpg"
import p13 from "../assets/poster14.png"
import p14 from "../assets/poster15.jpg"
import p15 from "../assets/poster16.jpg"
import Footer from './Footer'




const Product = () => {
  return (
    <>

      {/* ------------------session1----------------- */}

      <div className="relative w-full h-[400px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: " url('https://thewingsinternational.com/wp-content/uploads/2024/09/delicious-foods-celebration-scaled.jpg') " }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Center Text */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-5xl italic font-serif">
            Products
          </h1>
        </div>

        {/* Bottom Slanted White Shape */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-24"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="white"
          ></path>
        </svg>
      </div>
      </div>


      {/*------------------- session2 -------------------*/}


      <div className="bg-white py-16 px-4">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-serif italic text-gray-800 mb-4">
            Let's View our Products
          </h1>
          <p className="text-gray-600 italic text-lg leading-relaxed">
            Explore our diverse range of premium frozen and dried food products, crafted for quality and flavor.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">

          {/* Card 1: Rice */}
          <div className="relative h-[450px] overflow-hidden rounded-2xl group shadow-xl">
            <img
              src={p1}
              alt="Rice"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-8 text-white">
              <h2 className="text-4xl font-serif italic mb-3">Rice</h2>
              <p className="text-sm font-light leading-relaxed opacity-90 italic">
                High-quality rice, perfectly harvested and milled for exceptional taste and texture.
              </p>
            </div>
          </div>

          {/* Card 2: Basmati Rice */}
          <div className="relative h-[450px] overflow-hidden rounded-2xl group shadow-xl">
            <img
              src={p2}
              alt="Basmati Rice"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-8 text-white">
              <h2 className="text-4xl font-serif italic mb-3">Basmati Rice</h2>
              <p className="text-sm font-light leading-relaxed opacity-90 italic">
                Premium-quality rice, known for its rich aroma and long grains.
              </p>
            </div>
          </div>

          {/* Card 3: Wheat */}
          <div className="relative h-[450px] overflow-hidden rounded-2xl group shadow-xl">
            <img
              src={p3}
              alt="Wheat"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-8 text-white">
              <h2 className="text-4xl font-serif italic mb-3">Wheat</h2>
              <p className="text-sm font-light leading-relaxed opacity-90 italic">
                Golden and nutrient-rich wheat grains, perfect for making flour, bread, and a variety of healthy dishes.
              </p>
            </div>
          </div>


          <div className="relative h-[450px] overflow-hidden rounded-2xl group shadow-xl">
            <img
              src={p4}
              alt="Wheat"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-8 text-white">
              <h2 className="text-4xl font-serif italic mb-3">Yellow maize</h2>
              <p className="text-sm font-light leading-relaxed opacity-90 italic">
                High-quality yellow maize, versatile and nutritious for a variety of culinary applications.
              </p>
            </div>
          </div>

          <div className="relative h-[450px] overflow-hidden rounded-2xl group shadow-xl">
            <img
              src={p5}
              alt="Wheat"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-8 text-white">
              <h2 className="text-4xl font-serif italic mb-3">Premium Barley Grains</h2>
              <p className="text-sm font-light leading-relaxed opacity-90 italic">
                Wholesome and nutrient-rich barley grains, perfect for making soups, stews, and healthy meals.
              </p>
            </div>
          </div>

          <div className="relative h-[450px] overflow-hidden rounded-2xl group shadow-xl">
            <img
              src={p6}
              alt="Wheat"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-8 text-white">
              <h2 className="text-4xl font-serif italic mb-3">Nutritious Millets</h2>
              <p className="text-sm font-light leading-relaxed opacity-90 italic">
                A variety of wholesome and gluten-free millets, rich in fiber and perfect for healthy meals.
              </p>
            </div>
          </div>

          <div className="relative h-[450px] overflow-hidden rounded-2xl group shadow-xl">
            <img
              src={p7}
              alt="Wheat"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-8 text-white">
              <h2 className="text-4xl font-serif italic mb-3">  Premium Chickpeas</h2>
              <p className="text-sm font-light leading-relaxed opacity-90 italic">
                Plump and protein-rich chickpeas, ideal for making hummus, curries, and nutritious dishes.
              </p>
            </div>
          </div>

          <div className="relative h-[450px] overflow-hidden rounded-2xl group shadow-xl">
            <img
              src={p8}
              alt="Wheat"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-8 text-white">
              <h2 className="text-4xl font-serif italic mb-3">Black Pepper</h2>
              <p className="text-sm font-light leading-relaxed opacity-90 italic">
                Unlock the vibrant heat and earthy notes of freshly ground black pepper.
              </p>
            </div>
          </div>

          <div className="relative h-[450px] overflow-hidden rounded-2xl group shadow-xl">
            <img
              src={p9}
              alt="Wheat"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-8 text-white">
              <h2 className="text-4xl font-serif italic mb-3">Green Gram</h2>
              <p className="text-sm font-light leading-relaxed opacity-90 italic">
                Exporting the Finest Green Gram to Meet Global Demand
              </p>
            </div>
          </div>

          <div className="relative h-[450px] overflow-hidden rounded-2xl group shadow-xl">
            <img
              src={p10}
              alt="Wheat"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-8 text-white">
              <h2 className="text-4xl font-serif italic mb-3">Turmeric</h2>
              <p className="text-sm font-light leading-relaxed opacity-90 italic">
                Turmerics vibrant hue and potential health benefits captivate with global markets.
              </p>
            </div>
          </div>

          <div className="relative h-[450px] overflow-hidden rounded-2xl group shadow-xl">
            <img
              src={p11}
              alt="Wheat"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-8 text-white">
              <h2 className="text-4xl font-serif italic mb-3">Cumin</h2>
              <p className="text-sm font-light leading-relaxed opacity-90 italic">
                The warm, distinctive flavor of cumin: A staple export from our fertile lands.
              </p>
            </div>
          </div>

          <div className="relative h-[450px] overflow-hidden rounded-2xl group shadow-xl">
            <img
              src={p12}
              alt="Wheat"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-8 text-white">
              <h2 className="text-4xl font-serif italic mb-3">Cardamom</h2>
              <p className="text-sm font-light leading-relaxed opacity-90 italic">
                Discover the captivating aroma and flavor of our carefully selected cardamom.
              </p>
            </div>
          </div>

          <div className="relative h-[450px] overflow-hidden rounded-2xl group shadow-xl">
            <img
              src={p13}
              alt="Wheat"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-8 text-white">
              <h2 className="text-4xl font-serif italic mb-3">Lentils</h2>
              <p className="text-sm font-light leading-relaxed opacity-90 italic">
                Nutritious and versatile lentils, rich in protein and fiber for your meals.
              </p>
            </div>
          </div>

          <div className="relative h-[450px] overflow-hidden rounded-2xl group shadow-xl">
            <img
              src={p14}
              alt="Wheat"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-8 text-white">
              <h2 className="text-4xl font-serif italic mb-3">Coriander</h2>
              <p className="text-sm font-light leading-relaxed opacity-90 italic">
                Experience the delicate, sweet flavor of our high-quality coriander seeds and powder.
              </p>
            </div>
          </div>

          <div className="relative h-[450px] overflow-hidden rounded-2xl group shadow-xl">
            <img
              src={p15}
              alt="Wheat"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-8 text-white">
              <h2 className="text-4xl font-serif italic mb-3">Frozen food</h2>
              <p className="text-sm font-light leading-relaxed opacity-90 italic">
                Premium frozen food made with the finest ingredients, flash-frozen for optimal freshness.
              </p>
            </div>
          </div>



        </div>
      </div>

      {/* ------------------session4-------------------- */}

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


      {/* -----------------session5------------------ */}

      <Footer/>
    </>
  )
}

export default Product