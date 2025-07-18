import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu toggle

const Navbar = () => {
  const location = useLocation();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRefs = useRef({});

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Contact Me", path: "/contact" },
  ];

  useEffect(() => {
    const activeLink = navLinks.find((link) => location.pathname === link.path);
    if (activeLink && navRefs.current[activeLink.name]) {
      const el = navRefs.current[activeLink.name];
      setIndicatorStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
    // Close mobile menu on navigation
    setMobileOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = (name) => {
    const el = navRefs.current[name];
    setIndicatorStyle({
      left: el.offsetLeft,
      width: el.offsetWidth,
    });
  };

  const handleMouseLeave = () => {
    const activeLink = navLinks.find((link) => location.pathname === link.path);
    if (activeLink && navRefs.current[activeLink.name]) {
      const el = navRefs.current[activeLink.name];
      setIndicatorStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  };

  return (
    <header className="w-full shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Logo */}
        <div
          className="flex flex-col"
          style={{
            fontFamily: '"Libre Baskerville", serif',
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "12.6px",
            color: "rgb(34, 34, 34)",
            gap: "12px",
          }}
        >
          <h1 style={{ display: "flex", alignItems: "baseline" }}>
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 800,
                color: "black",
                fontSize: "28px",
                marginRight: "-2px", // Pull text closer
              }}
            >
              B
            </span>
            ony Datta
          </h1>

          <span>Marketing & Branding</span>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden text-2xl text-black z-50 relative transition-transform duration-300 hover:scale-110"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation (Desktop) */}
        <nav
          className="relative hidden md:flex space-x-8 text-sm font-light"
          onMouseLeave={handleMouseLeave}
        >
          <span
            className="absolute top-0 h-[2px] bg-black transition-all duration-300"
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
            }}
          />
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                ref={(el) => (navRefs.current[link.name] = el)}
                onMouseEnter={() => handleMouseEnter(link.name)}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive
                    ? "font-medium text-black"
                    : "text-gray-600 hover:text-black"
                }`}
                style={{
                  fontFamily: '"Libre Baskerville", serif',
                  fontSize: "18px",
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Menu - Option 1: Slide Down with Staggered Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 bg-white border-t border-gray-100">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block py-3 px-2 rounded-lg border-b border-gray-100 last:border-b-0 transition-all duration-300 transform hover:bg-gray-50 hover:translate-x-2 ${
                    isActive
                      ? "font-medium text-black bg-gray-50"
                      : "text-gray-600 hover:text-black"
                  } ${
                    mobileOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{
                    fontFamily: '"Libre Baskerville", serif',
                    fontSize: "18px",
                    transitionDelay: mobileOpen ? `${index * 100}ms` : "0ms",
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;