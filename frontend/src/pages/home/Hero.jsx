
// import { ArrowRight, MoveRight } from "lucide-react";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";

// const slides = [
//     {
//         id: 1,
//         bg: "#7ce7ca",
//         heading: "PLAN",
//         subheading: "I",
//         buttonText: "to Perfection",
//         textColor: "text-black",
//     },
//     {
//         id: 2,
//         bg: "#eee75c",
//         heading: "STRATEGIZE",
//         subheading: "I",
//         buttonText: "smart",
//         textColor: "text-gray-700",
//     },
//     {
//         id: 3,
//         bg: "#f1958b",
//         heading: "PROVIDE",
//         subheading: "I",
//         buttonText: "result",
//         textColor: "text-black",
//     },
// ];

// export default function Hero() {
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIndex((prev) => (prev + 1) % slides.length);
//         }, 6000); // change every 6 seconds
//         return () => clearInterval(interval);
//     }, []);

//     const { bg, heading, subheading, textColor, buttonText } = slides[index];

//     const scrollToPortfolio = () => {
//         const el = document.getElementById("portfolio");
//         if (el) el.scrollIntoView({ behavior: "smooth" });
//     };

//     return (
//         <div
//             className={`w-full h-screen flex items-center justify-center transition-all duration-200 ease-in-out ${bg}`}
//         >
//             <div className="w-full max-w-5xl px-6">
//                 <AnimatePresence mode="wait">
//                     <motion.div
//                         key={index}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         transition={{ duration: 0.6, ease: "easeInOut" }}
//                     >
//                         <p
//                             className={`text-xl md:text-6xl font-serif mb-4 text-left ${textColor}`}
//                         >
//                             {subheading}
//                         </p>
//                         <hr className="w-full border-t-1 border-gray-500/60 left-0 mt-[14px] absolute" />
//                         <h1
//                             className={`text-7xl py-0 leading-none text-center md:text-9xl font-extrabold tracking-widest ${textColor}`}
//                             style={{ transform: "scaleY(1.4)" }}
//                         >
//                             {heading}
//                         </h1>
//                         <hr className="w-full border-t-1 border-gray-500/60 left-0 mt-[9px] absolute" />
//                     </motion.div>
//                 </AnimatePresence>

//                 <div className="mt-10 flex justify-end">
//                     <button
//                         onClick={scrollToPortfolio}
//                         className="group text-2xl font-semibold text-black flex flex-col items-center"
//                     >
//                         <span className="relative inline-block">
//                             <Link
//                                 to="/portfolio"
//                                 className="block text-gray-700 hover:text-black transition"
//                             >
//                                 <AnimatePresence mode="wait">
//                                     <motion.span
//                                         key={buttonText}
//                                         initial={{ opacity: 0, y: 10 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         exit={{ opacity: 0, y: -10 }}
//                                         transition={{ duration: 0.4, ease: "easeInOut" }}
//                                     >
//                                         {buttonText}
//                                     </motion.span>
//                                 </AnimatePresence>
//                             </Link>
//                             <Link to="/portfolio" className="block group">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     viewBox="0 0 110 12"
//                                     preserveAspectRatio="none"
//                                     className="w-full h-3 mt-1 text-gray-700 group-hover:text-black transition"
//                                 >
//                                     <line
//                                         x1="0"
//                                         y1="6"
//                                         x2="100"
//                                         y2="6"
//                                         stroke="currentColor"
//                                         strokeWidth="6"
//                                         strokeLinecap="round"
//                                     />
//                                     <polygon
//                                         points="100,0 110,6 100,12"
//                                         fill="currentColor"
//                                     />
//                                 </svg>
//                             </Link>
//                         </span>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }



// import { ArrowRight, MoveRight } from "lucide-react";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";

// const slides = [
//     {
//         id: 1,
//         bg: "#7ce7ca",
//         heading: "PLAN",
//         subheading: "I",
//         buttonText: "to Perfection",
//         textColor: "text-black",
//     },
//     {
//         id: 2,
//         bg: "#eee75c",
//         heading: "STRATEGIZE",
//         subheading: "I",
//         buttonText: "smart",
//         textColor: "text-gray-700",
//     },
//     {
//         id: 3,
//         bg: "#f1958b",
//         heading: "PROVIDE",
//         subheading: "I",
//         buttonText: "result",
//         textColor: "text-black",
//     },
// ];

// export default function Hero() {
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIndex((prev) => (prev + 1) % slides.length);
//         }, 6000);
//         return () => clearInterval(interval);
//     }, []);

//     const { bg, heading, subheading, textColor, buttonText } = slides[index];

//     const scrollToPortfolio = () => {
//         const el = document.getElementById("portfolio");
//         if (el) el.scrollIntoView({ behavior: "smooth" });
//     };

//     return (
//         <div
//             style={{ backgroundColor: bg }}
//             className="w-full h-screen flex items-center justify-center transition-all duration-200 ease-in-out"
//         >
//             <div className="w-full max-w-5xl px-6">
//                 <AnimatePresence mode="wait">
//                     <motion.div
//                         key={index}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         transition={{ duration: 0.6, ease: "easeInOut" }}
//                     >
//                         <p
//                             className={`text-3xl md:text-6xl font-serif mb-4 text-left ${textColor}`}
//                         >
//                             {subheading}
//                         </p>
//                         <hr className="w-full border-t-1 border-gray-500/60 left-0 mt-[14px] absolute" />
//                         <h1
//                             className={`text-7xl py-0 leading-none text-center md:text-9xl font-extrabold tracking-widest ${textColor}`}
//                             style={{ transform: "scaleY(1.4)" }}
//                         >
//                             {heading}
//                         </h1>
//                         <hr className="w-full border-t-1 border-gray-500/60 left-0 mt-[9px] absolute" />
//                     </motion.div>
//                 </AnimatePresence>

//                 <div className="mt-10 flex justify-end">
//                     <button
//                         onClick={scrollToPortfolio}
//                         className="group text-2xl font-semibold text-black flex flex-col items-center"
//                     >
//                         <span className="relative inline-block w-fit">
//                             <Link
//                                 to="/portfolio"
//                                 className="block text-gray-700 hover:text-black transition"
//                             >
//                                 <AnimatePresence mode="wait">
//                                     <motion.span
//                                         key={buttonText}
//                                         initial={{ opacity: 0, y: 10 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         exit={{ opacity: 0, y: -10 }}
//                                         transition={{ duration: 0.4, ease: "easeInOut" }}
//                                     >
//                                         {buttonText}
//                                     </motion.span>
//                                 </AnimatePresence>
//                             </Link>
//                             <Link to="/portfolio" className="block group">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     viewBox="0 0 110 12"
//                                     preserveAspectRatio="none"
//                                     className="w-full h-3 mt-1 text-gray-700 group-hover:text-black transition"
//                                 >
//                                     <line
//                                         x1="0"
//                                         y1="6"
//                                         x2="100"
//                                         y2="6"
//                                         stroke="currentColor"
//                                         strokeWidth="6"
//                                         strokeLinecap="round"
//                                     />
//                                     <polygon
//                                         points="100,0 110,6 100,12"
//                                         fill="currentColor"
//                                     />
//                                 </svg>
//                             </Link>
//                         </span>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }


import { ArrowRight, MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    bg: "#7ce7ca",
    heading: "PLAN",
    subheading: "I",
    buttonText: "to Perfection",
  },
  {
    id: 2,
    bg: "#eee75c",
    heading: "STRATEGIZE",
    subheading: "I",
    buttonText: "smart",
  },
  {
    id: 3,
    bg: "#f1958b",
    heading: "PROVIDE",
    subheading: "I",
    buttonText: "result",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const { bg, heading, subheading, buttonText } = slides[index];

  const scrollToPortfolio = () => {
    const el = document.getElementById("portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{ backgroundColor: bg }}
      className="w-full h-screen flex items-center justify-center transition-all duration-200 ease-in-out"
    >
      <div className="w-full max-w-5xl px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <p
              className="text-3xl md:text-5xl mb-10 text-left"
              style={{
                color: "rgb(34,34,34)",
                fontFamily: "impact, impact-w01-2010, sans-serif",
              }}
            >
              {subheading}
            </p>
            <hr className="w-full border-t-1 border-gray-500/60 left-0 mt-[-7px] absolute" />
            <h1
              className="text-7xl py-0 leading-none text-center md:text-8xl font-extrabold tracking-widest"
              style={{
                color: "rgb(34,34,34)",
                transform: "scaleY(1.4)",
                fontFamily: "impact, impact-w01-2010, sans-serif",
              }}
            >
              {heading}
            </h1>
            <hr className="w-full border-t-1 border-gray-500/60 left-0 mt-[7px] absolute" />
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex justify-end">
          <button
            onClick={scrollToPortfolio}
            className="group text-2xl font-semibold flex flex-col items-center"
          >
            <span className="relative inline-block w-fit">
              <Link
                to="/portfolio"
                className="block hover:text-black transition"
                style={{
                  color: "rgb(34,34,34)",
                  fontFamily: "impact, impact-w01-2010, sans-serif",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={buttonText}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {buttonText}
                  </motion.span>
                </AnimatePresence>
              </Link>
              <Link to="/portfolio" className="block group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 110 12"
                  preserveAspectRatio="none"
                  className="w-full h-3 mt-1 transition"
                  style={{ color: "rgb(34,34,34)" }}
                >
                  <line
                    x1="0"
                    y1="6"
                    x2="100"
                    y2="6"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <polygon
                    points="100,0 110,6 100,12"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
