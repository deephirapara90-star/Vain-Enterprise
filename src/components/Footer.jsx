import React from 'react'
import logo from "../assets/logo.png"
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (


    <div>
      <footer className="bg-[#3e4455] text-white py-16 px-6 font-serif">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">

          <div className="flex flex-col items-center md:items-start">

            <div className="text-xl font-bold text-red-500">
              <img src={logo} alt="" className='w-50' />
            </div>


            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <FaEnvelope className="text-white" />


                <a href="mailto:viaanenterprise90@gmail.com" class="hover:text-[#00d2ff] transition-colors">viaanenterprise90@gmail.com</a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <FaPhone className="text-white rotate-90" />

                <a href="tel:+919274000198" class="hover:text-[#00d2ff] transition-colors">+91 9974000999</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl italic mb-6">Pages</h3>
            <ul className="space-y-4 italic text-lg">
              <li><Link to="/" className="hover:text-[#00d2ff]">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#00d2ff]">About</Link></li>
              <li><Link to="/product" className="hover:text-[#00d2ff]">Product</Link></li>
              <li><Link to="/contact" className="hover:text-[#00d2ff]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl italic mb-6">Products</h3>
            <ul className="space-y-4 italic text-lg">
              <li><a href="#" class="hover:text-[#00d2ff]">Frozen food</a></li>
              <li><a href="#" class="hover:text-[#00d2ff]">Dry Onion Flaks</a></li>
              <li><a href="#" class="hover:text-[#00d2ff]">Mango pulps</a></li>
              <li><a href="#" class="hover:text-[#00d2ff]">Dried powder of orange</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl italic mb-6">Address</h3>
            <p className="italic leading-relaxed text-lg max-w-[250px] mx-auto md:mx-0">
              B-446, Moneyplant High Street, Jagatpur Rd, nr. Shell Petrol Pump, Gota, Ahmedabad
            </p>
          </div>

        </div>
      </footer>
    </div>

  )
}

export default Footer