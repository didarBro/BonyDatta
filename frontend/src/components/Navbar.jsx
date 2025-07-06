
// // Navbar.jsx
// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const location = useLocation();
//   const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
//   const navRefs = useRef({});

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About Me', path: '/about' },
//     { name: 'Portfolio', path: '/portfolio' },
//     { name: 'Services', path: '/services' },
//     // { name: 'Testimonials', path: '/blog' },
//     { name: 'Contact Us', path: '/contact' },
//   ];

//   // Update indicator to active link on load
//   useEffect(() => {
//     const activeLink = navLinks.find((link) => location.pathname === link.path);
//     if (activeLink && navRefs.current[activeLink.name]) {
//       const el = navRefs.current[activeLink.name];
//       setIndicatorStyle({
//         left: el.offsetLeft,
//         width: el.offsetWidth,
//       });
//     }
//   }, [location.pathname]);

//   // Handle hover
//   const handleMouseEnter = (name) => {
//     const el = navRefs.current[name];
//     setIndicatorStyle({
//       left: el.offsetLeft,
//       width: el.offsetWidth,
//     });
//   };

//   // Handle mouse leave to return to active
//   const handleMouseLeave = () => {
//     const activeLink = navLinks.find((link) => location.pathname === link.path);
//     if (activeLink && navRefs.current[activeLink.name]) {
//       const el = navRefs.current[activeLink.name];
//       setIndicatorStyle({
//         left: el.offsetLeft,
//         width: el.offsetWidth,
//       });
//     }
//   };

//   return (
//     <header className="w-full shadow-sm">
//       <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-60">
//         {/* Logo & Subtitle */}
//         {/* <div className="flex flex-col">
//           <h1 className="text-2xl font-light">
//             <span className="italic font-semibold text-black mr-1">B</span>
//             ony Datta
//           </h1>
//           <span className="text-sm text-gray-600">Marketing & Branding</span>
//         </div> */}
//         <div
//           className="flex flex-col"
//           style={{
//             fontFamily: '"Libre Baskerville", serif',
//             fontSize: '18px',
//             fontWeight: 400,
//             lineHeight: '12.6px',
//             color: 'rgb(34, 34, 34)',
//             gap: '12px' // gap between the two lines
//           }}
//         >
//           <h1 style={{ display: 'flex', alignItems: 'baseline' }}>
//             <span
//               style={{
//                 fontStyle: 'italic',
//                 fontWeight: 600,
//                 marginRight: '4px',
//                 color: 'black',
//                 fontSize: '28px' // make the B bigger
//               }}
//             >
//               B
//             </span>
//             ony Datta
//           </h1>
//           <span>Marketing & Branding</span>
//         </div>



//         {/* Navigation */}
//         <nav
//           className="relative flex space-x-8 text-sm font-light"
//           onMouseLeave={handleMouseLeave}
//         >
//           {/* Moving top underline */}
//           <span
//             className="absolute top-0 h-[2px] bg-black transition-all duration-300"
//             style={{
//               left: indicatorStyle.left,
//               width: indicatorStyle.width,
//             }}
//           />
//           {navLinks.map((link) => {
//             const isActive = location.pathname === link.path;

//             return (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 ref={(el) => (navRefs.current[link.name] = el)}
//                 onMouseEnter={() => handleMouseEnter(link.name)}
//                 className={`relative py-1 transition-colors duration-200 ${isActive ? 'font-medium text-black' : 'text-gray-600 hover:text-black'
//                   }`}
//                 style={{
//                   fontFamily: '"Libre Baskerville", serif',
//                   fontSize: '18px'
//                 }}
//               >
//                 {link.name}
//               </Link>
//             );
//           })}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for menu toggle

const Navbar = () => {
  const location = useLocation();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRefs = useRef({});

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
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
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '12.6px',
            color: 'rgb(34, 34, 34)',
            gap: '12px',
          }}
        >
          <h1 style={{ display: 'flex', alignItems: 'baseline' }}>
            <span
              style={{
                fontStyle: 'italic',
                fontWeight: 600,
                marginRight: '4px',
                color: 'black',
                fontSize: '28px',
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
          className="md:hidden text-2xl text-black"
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
                    ? 'font-medium text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
                style={{
                  fontFamily: '"Libre Baskerville", serif',
                  fontSize: '18px',
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block py-2 border-b border-gray-200 ${
                    isActive
                      ? 'font-medium text-black'
                      : 'text-gray-600 hover:text-black'
                  }`}
                  style={{
                    fontFamily: '"Libre Baskerville", serif',
                    fontSize: '18px',
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
