import React from 'react'
import a1 from "../assets/Aimg1.webp"
import a2 from "../assets/Aimg2.webp"
import { Phone, Mail } from "lucide-react";
import Footer from './Footer';


const About = () => {
  return (
    <>

      {/* -------------------sesion1------------------- */}


      <div className="relative w-full h-[400px] overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://thewingsinternational.com/wp-content/uploads/2024/09/deep-frozen-food-concept-food-industry_1162810-15507.jpg')", // tamari image path mukjo
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Center Text */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-5xl md:text-6xl font-serif italic">
          About Us
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


        {/*------------------ session2----------- */}


      <div className="w-full bg-gray-100 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={a1}
            alt="About"
            className="rounded-3xl shadow-xl w-full max-w-md object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-10">
          
          {/* Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif italic text-gray-800 mb-6">
              Welcome to Viaan Enterprise!
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              At The Viaan Enterprise, we are dedicated to bringing the finest 
              frozen and dry food products from India to the global market. 
              Established with a vision to connect international consumers with 
              the rich flavors and quality of Indian produce, we pride ourselves 
              on our extensive range of products and our commitment to excellence.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-2xl font-serif italic text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our mission is simple: to deliver premium Indian products that 
              meet the highest standards of quality and freshness. We are 
              committed to ensuring that every product we export not only meets 
              but exceeds international expectations. By leveraging our deep 
              industry expertise and state-of-the-art logistics, we ensure that 
              our products retain their exceptional quality from our facilities 
              to your doorstep.
            </p>
          </div>

        </div>
      </div>
    </div>


    {/* --------------------session3--------------- */}
    
        <div className="w-full bg-gray-100 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="space-y-10">
          
          {/* Commitment */}
          <div>
            <h2 className="text-4xl font-serif italic text-gray-800 mb-6">
              Our Commitment
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Quality is at the heart of everything we do. We work closely with
              trusted suppliers and adhere to rigorous quality control processes
              to ensure that our products meet international standards. Our team
              is passionate about delivering excellence and is always ready to
              address your needs and provide the support you require.
            </p>
          </div>

          {/* Journey */}
          <div>
            <h3 className="text-2xl font-serif italic text-gray-800 mb-4">
              Join Us on Our Journey
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              As we expand our reach to new markets around the world, we invite
              you to experience the exceptional quality and authenticity of
              Viaan Enterprise’s products. Whether you are a distributor,
              retailer, or a valued customer, we look forward to building lasting
              relationships and contributing to your success.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-6 pt-6">
            
            <div className="flex items-center gap-3 text-gray-800">
              <Phone size={20} />
              <span className="text-lg font-medium">
                +91 9274000198
              </span>
            </div>

            <div className="flex items-center gap-3 text-gray-800">
              <Mail size={20} />
              <span className="text-lg font-medium">
                Viaanenterprise26@gmail.com
              </span>
            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={a2} // tamari image path mukjo
            alt="Commitment"
            className="rounded-3xl shadow-xl w-full max-w-md object-cover hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </div>

    {/* -----------------------session4---------------------- */}

    
     <Footer/>
    </>
  )
}

export default About