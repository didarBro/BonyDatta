// Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="w-full shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo & Subtitle */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-light">
            <span className="italic font-semibold text-black mr-1">B</span>
            oni Datta
          </h1>
          <span className="text-sm text-gray-600">Marketing & Branding</span>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-8 text-sm font-light">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`hover:text-black transition relative ${
                  isActive ? 'font-medium text-black' : 'text-gray-600'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute left-1/2 -bottom-1.5 transform -translate-x-1/2 w-6 h-[2px] bg-black" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
