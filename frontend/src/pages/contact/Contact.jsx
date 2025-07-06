// import React, { useState, useEffect } from "react";
// import { FaWhatsapp, FaEnvelope, FaRocket, FaLightbulb, FaLeaf, FaHandshake } from "react-icons/fa";

// const data = {
//   title: "Contact",
//   intro:
//     "Let's build something bold, smart, and sustainable together. Whether it's a quick project or a long-term partnership, you can count on me.",
//   whatsapp: "+8801782388822",
//   email: "labonydatta@gmail.com",
// };

// const Contact = () => {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeCard, setActiveCard] = useState(null);

//   useEffect(() => {
//     setIsVisible(true);

//     const handleMouseMove = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const floatingIcons = [
//     { icon: FaRocket, color: "text-orange-500", delay: "0s" },
//     { icon: FaLightbulb, color: "text-yellow-500", delay: "0.5s" },
//     { icon: FaLeaf, color: "text-green-500", delay: "1s" },
//     { icon: FaHandshake, color: "text-blue-500", delay: "1.5s" },
//   ];

//   return (
//     <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col items-center relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         {/* Floating geometric shapes */}
//         <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-20 animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full opacity-20 animate-bounce"></div>
//         <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-green-300 to-teal-300 rounded-full opacity-20 animate-pulse"></div>

//         {/* Dynamic cursor follower */}
//         <div
//           className="absolute w-64 h-64 bg-gradient-radial from-pink-200/30 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
//           style={{
//             left: mousePos.x - 128,
//             top: mousePos.y - 128,
//             transform: 'translate(-50%, -50%)'
//           }}
//         ></div>
//       </div>

//       {/* Header */}
//       <div className="w-full bg-[#EF958A] py-8 flex justify-center">
//         <h1 className="text-5xl font-extrabold tracking-wide text-black uppercase">
//           {data.title}
//         </h1>
//       </div>

//       {/* Floating Icons */}
//       <div className="absolute top-32 left-0 w-full h-full pointer-events-none">
//         {floatingIcons.map((item, index) => (
//           <div
//             key={index}
//             className={`absolute ${item.color} text-4xl opacity-20 animate-float`}
//             style={{
//               left: `${15 + index * 20}%`,
//               top: `${30 + index * 15}%`,
//               animationDelay: item.delay,
//               animationDuration: `${3 + index * 0.5}s`
//             }}
//           >
//             <item.icon />
//           </div>
//         ))}
//       </div>

//       {/* Intro with enhanced animation */}
//       <div className={`max-w-3xl px-6 py-12 text-center transform transition-all duration-1000 ${
//         isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//       }`}>
//         <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed">
//           {data.intro.split(' ').map((word, index) => (
//             <span
//               key={index}
//               className="inline-block animate-fadeInUp"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               {word}&nbsp;
//             </span>
//           ))}
//         </p>
//       </div>

//       {/* Enhanced Contact Cards */}
//       <div className="flex flex-col md:flex-row gap-8 mb-12 z-10">
//         {/* WhatsApp Card */}
//         <div
//           className={`group relative overflow-hidden transform transition-all duration-500 ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}
//           style={{ animationDelay: '0.5s' }}
//           onMouseEnter={() => setActiveCard('whatsapp')}
//           onMouseLeave={() => setActiveCard(null)}
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
//           <a
//             href={`https://wa.me/${data.whatsapp}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="relative flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
//           >
//             <div className="relative">
//               <FaWhatsapp size={28} className="animate-pulse" />
//               {activeCard === 'whatsapp' && (
//                 <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full animate-ping"></div>
//               )}
//             </div>
//             <div className="flex flex-col">
//               <span className="text-xl">WhatsApp</span>
//               <span className="text-sm opacity-90">Chat instantly</span>
//             </div>
//           </a>
//         </div>

//         {/* Email Card */}
//         <div
//           className={`group relative overflow-hidden transform transition-all duration-500 ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}
//           style={{ animationDelay: '0.7s' }}
//           onMouseEnter={() => setActiveCard('email')}
//           onMouseLeave={() => setActiveCard(null)}
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
//           <a
//             href={`mailto:${data.email}`}
//             className="relative flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
//           >
//             <div className="relative">
//               <FaEnvelope size={28} className="animate-bounce" />
//               {activeCard === 'email' && (
//                 <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full animate-ping"></div>
//               )}
//             </div>
//             <div className="flex flex-col">
//               <span className="text-xl">Email</span>
//               <span className="text-sm opacity-90">Send a message</span>
//             </div>
//           </a>
//         </div>
//       </div>

//       {/* Call-to-Action Section */}
//       <div className={`text-center mb-12 transform transition-all duration-1000 ${
//         isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//       }`} style={{ animationDelay: '1s' }}>
//         <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 max-w-2xl mx-auto">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
//             Ready to Start?
//           </h2>
//           <p className="text-gray-600 text-lg mb-6">
//             Drop me a line and let's turn your ideas into reality. I'm just a click away!
//           </p>
//           <div className="flex justify-center space-x-4">
//             <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
//             <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
//             <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }

//         .animate-fadeInUp {
//           animation: fadeInUp 0.6s ease-out both;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Contact;

import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaRocket,
  FaLightbulb,
  FaLeaf,
  FaHandshake,
} from "react-icons/fa";

const data = {
  title: "LET'S TALK",
  intro:
    "Let's build something bold, smart, and sustainable together. Whether it's a quick project or a long-term partnership, you can count on me.",
  whatsapp: "+8801782388822",
  email: "labonydatta@gmail.com",
};

const Contact = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [typingText, setTypingText] = useState("");

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Continuous typing effect for "Ready to Start?"
    const text = "Ready to Start?";
    let currentIndex = 0;
    let isDeleting = false;

    const typingInterval = setInterval(
      () => {
        if (!isDeleting) {
          // Typing forward
          if (currentIndex < text.length) {
            setTypingText(text.substring(0, currentIndex + 1));
            currentIndex++;
          } else {
            // Pause before deleting
            setTimeout(() => {
              isDeleting = true;
            }, 2000);
          }
        } else {
          // Deleting backward
          if (currentIndex > 0) {
            setTypingText(text.substring(0, currentIndex - 1));
            currentIndex--;
          } else {
            // Pause before typing again
            setTimeout(() => {
              isDeleting = false;
            }, 500);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(typingInterval);
    };
  }, []);

  const floatingIcons = [
    { icon: FaRocket, color: "text-orange-500", delay: "0s" },
    { icon: FaLightbulb, color: "text-yellow-500", delay: "0.5s" },
    { icon: FaLeaf, color: "text-green-500", delay: "1s" },
    { icon: FaHandshake, color: "text-blue-500", delay: "1.5s" },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-green-300 to-teal-300 rounded-full opacity-20 animate-pulse"></div>

        {/* Dynamic cursor follower */}
        <div
          className="absolute w-64 h-64 bg-gradient-radial from-pink-200/30 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePos.x - 128,
            top: mousePos.y - 128,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      </div>

      {/* Header */}
      <div className="w-full bg-[#EF958A] py-10 flex justify-center">
        <h1
          style={{
            fontFamily: "impact, impact-w01-2010, sans-serif",
            fontSize: "70px",
            fontWeight: 700,
            lineHeight: "normal",
            color: "rgb(34,34,34)",
          }}
        >
          {data.title}
        </h1>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-32 left-0 w-full h-full pointer-events-none">
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className={`absolute ${item.color} text-4xl opacity-20 animate-float`}
            style={{
              left: `${15 + index * 20}%`,
              top: `${30 + index * 15}%`,
              animationDelay: item.delay,
              animationDuration: `${3 + index * 0.5}s`,
            }}
          >
            <item.icon />
          </div>
        ))}
      </div>

      {/* Intro with enhanced animation */}
      <div
        className={`max-w-3xl px-6 py-12 text-center transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed">
          {data.intro.split(" ").map((word, index) => (
            <span
              key={index}
              className="inline-block animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </p>
      </div>

      {/* Enhanced Contact Cards */}
      <div className="flex flex-col md:flex-row gap-8 mb-12 z-10">
        {/* WhatsApp Card */}
        <div
          className={`group relative overflow-hidden transform transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ animationDelay: "0.5s" }}
          onMouseEnter={() => setActiveCard("whatsapp")}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
          <a
            href={`https://wa.me/${data.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative">
              <FaWhatsapp size={28} className="animate-pulse" />
              {activeCard === "whatsapp" && (
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full animate-ping"></div>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-xl">WhatsApp</span>
              <span className="text-sm opacity-90">Chat instantly</span>
            </div>
          </a>
        </div>

        {/* Email Card */}
        <div
          className={`group relative overflow-hidden transform transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ animationDelay: "0.7s" }}
          onMouseEnter={() => setActiveCard("email")}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
          <a
            href={`mailto:${data.email}`}
            className="relative flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative">
              <FaEnvelope size={28} className="animate-bounce" />
              {activeCard === "email" && (
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full animate-ping"></div>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-xl">Email</span>
              <span className="text-sm opacity-90">Send a message</span>
            </div>
          </a>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div
        className={`text-center mt-10 mb-12 transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{ animationDelay: "1s" }}
      >
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            {typingText}
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Drop me a line and let's turn your ideas into reality. I'm just a
            click away!
          </p>
          <div className="flex justify-center space-x-4">
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
            <div
              className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default Contact;
