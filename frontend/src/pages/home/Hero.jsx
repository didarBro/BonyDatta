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
      <div className="w-full max-w-5xl px-4 md:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative"
          >
            <p
              className="text-lg sm:text-2xl md:text-5xl mb-6 md:mb-10 text-left"
              style={{
                color: "rgb(34,34,34)",
                fontFamily: "Arial, sans-serif",
                fontWeight: 400,
              }}
            >
              {subheading}
            </p>

            <hr className="w-full border-t-1 border-gray-500/60 left-0 mt-[-4px] md:mt-[-7px] absolute" />
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl py-0 leading-none text-center font-extrabold tracking-widest"
              style={{
                color: "rgb(34,34,34)",
                transform: "scaleY(1.4)",
                fontFamily: "impact, impact-w01-2010, sans-serif",
              }}
            >
              {heading}
            </h1>
            <hr className="w-full border-t-1 border-gray-500/60 left-0 mt-[4px] md:mt-[7px] absolute" />
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 md:mt-10 flex justify-end">
          <button
            onClick={scrollToPortfolio}
            className="group text-lg sm:text-xl md:text-2xl flex flex-col items-center"
          >
            <span className="relative inline-block w-fit">
              <Link
                to="/portfolio"
                className="block hover:text-black transition"
                style={{
                  color: "rgb(34,34,34)",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: 400,
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
                  className="w-full h-2 sm:h-3 mt-1 transition"
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
                  <polygon points="100,0 110,6 100,12" fill="currentColor" />
                </svg>
              </Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}