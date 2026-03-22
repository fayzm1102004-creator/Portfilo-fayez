import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-950 text-white px-6 py-4 flex justify-between items-center shadow-md shadow-yellow-400/10 fixed top-0 w-full z-50">
      
      {/* Logo */}
      <div className="font-bold text-xl text-yellow-400">Fayez</div>

      {/* Toggle Button  */}
      <button className="md:hidden text-2xl z-50" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Links */}
      <ul
        className={`
          flex-col md:flex-row md:flex md:space-x-6
          absolute md:static bg-gray-950 w-full md:w-auto left-0 top-16 md:top-0
          transition-all duration-300 ease-in-out
          ${open ? 'flex opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none md:pointer-events-auto md:opacity-100 md:translate-y-0'}
        `}
      >
        <li className="py-2 px-4 md:py-0">
          <NavLink to="/home" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400"}>
            Home
          </NavLink>
        </li>
        <li className="py-2 px-4 md:py-0">
          <NavLink to="/about" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400"}>
            About
          </NavLink>
        </li>
        <li className="py-2 px-4 md:py-0">
          <NavLink to="/projects" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400"}>
            Projects
          </NavLink>
        </li>
        <li className="py-2 px-4 md:py-0">
          <NavLink to="/contact" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400"}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
