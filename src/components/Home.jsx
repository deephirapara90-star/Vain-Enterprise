import React from 'react'
import HeroSection from './HeroSection'
import BrochureSection from './BrochureSection '
import Products from "./Products";
import QualitySection from './QualitySection'
import Testimonials from './Testimonials '
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      <>


        <div className="w-full h-screen">
          {/* Hero Section */}
          <div
            className="h-screen bg-cover bg-center flex items-center px-20"
            style={{
              backgroundImage:
                "url('https://thewingsinternational.com/wp-content/uploads/2024/09/display-different-fruits-including-one-that-saysveggieson-it_1241530-1237.jpg')",
            }}
          >
            {/* Overlay */}
            <div className="bg-black/60 p-10 rounded-lg max-w-2xl text-white mt-20">

              <p className="text-lg mb-5">
                B-446, Moneyplant High Street, Jagatpur Rd, nr. Shell Petrol Pump,
                Gota, Ahmedabad
              </p>

              <h1 className="text-4xl font-semibold mb-5 leading-snug">
                Connecting Global Markets <br />
                with Premium Indian Products
              </h1>

              <p className="mb-8 leading-relaxed">
                At The vaan enterprise, we specialize in exporting a diverse range
                of high-quality frozen and dry foods from India. Explore our
                extensive selection and experience unmatched freshness and flavor
                delivered worldwide.
              </p>

              <div className="flex gap-5">
                <Link to="/product">
                <button className="bg-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-700 transition">
                  GET PRICE
                </button>
                </Link>
                <Link to="/contact">
                <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
                  CONTACT US
                </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Slanted White Shape */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg
              viewBox="0 0 1440 120"
              className="w-full h-40"
              preserveAspectRatio="none"
            >
              <path
                d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>

        <HeroSection />
        <BrochureSection />
        <Products />
        <QualitySection />
        <Testimonials />
        <Footer />

      </>
  )
}

export default Home