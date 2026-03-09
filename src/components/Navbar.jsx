import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black text-white z-50">
        <div className="flex justify-between items-center px-20 ">
          
          <div className="text-xl font-bold text-red-500">
            <img src={logo} alt="" className='w-30'/>
          </div>

          <div className="bg-black text-white px-10 py-4">
      <ul className="flex gap-10 text-lg">
        <li>
          <Link to="/" className="hover:text-cyan-400">
            Home
          </Link>
        </li> 

        <li>
          <Link to="/about" className="hover:text-cyan-400">
            About
          </Link>
        </li>

        <li>
          <Link to="/product" className="hover:text-cyan-400">
            Product
          </Link>
        </li>

        <li>
          <Link to="/contact" className="hover:text-cyan-400">
            Contact
          </Link>
        </li>
      </ul>
    </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar