// // Navbar.jsx
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const location = useLocation();

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About Me', path: '/about' },
//     { name: 'Portfolio', path: '/portfolio' },
//     { name: 'Services', path: '/services' },
//     { name: 'Blog', path: '/blog' },
//     { name: 'Contact Us', path: '/contact' },
//   ];

//   return (
//     <header className="w-full shadow-sm">
//       <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
//         {/* Logo & Subtitle */}
//         <div className="flex flex-col">
//           <h1 className="text-2xl font-light">
//             <span className="italic font-semibold text-black mr-1">B</span>
//             ony Datta
//           </h1>
//           <span className="text-sm text-gray-600">Marketing & Branding</span>
//         </div>

//         {/* Navigation */}
//         <nav className="flex space-x-8 text-sm font-light">
//           {navLinks.map((link) => {
//             const isActive = location.pathname === link.path;

//             return (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`hover:text-black transition relative ${
//                   isActive ? 'font-medium text-black' : 'text-gray-600'
//                 }`}
//               >
//                 {link.name}
//                 {isActive && (
//                   <span className="absolute left-1/2 -bottom-1.5 transform -translate-x-1/2 w-6 h-[2px] bg-black" />
//                 )}
//               </Link>
//             );
//           })}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// Navbar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef({});

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    // { name: 'Testimonials', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // Update indicator to active link on load
  useEffect(() => {
    const activeLink = navLinks.find((link) => location.pathname === link.path);
    if (activeLink && navRefs.current[activeLink.name]) {
      const el = navRefs.current[activeLink.name];
      setIndicatorStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [location.pathname]);

  // Handle hover
  const handleMouseEnter = (name) => {
    const el = navRefs.current[name];
    setIndicatorStyle({
      left: el.offsetLeft,
      width: el.offsetWidth,
    });
  };

  // Handle mouse leave to return to active
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
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo & Subtitle */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-light">
            <span className="italic font-semibold text-black mr-1">B</span>
            ony Datta
          </h1>
          <span className="text-sm text-gray-600">Marketing & Branding</span>
        </div>

        {/* Navigation */}
        <nav
          className="relative flex space-x-8 text-sm font-light"
          onMouseLeave={handleMouseLeave}
        >
          {/* Moving top underline */}
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
                  isActive ? 'font-medium text-black' : 'text-gray-600 hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
