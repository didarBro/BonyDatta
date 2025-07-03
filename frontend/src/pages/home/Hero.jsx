import { ArrowRight, MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        id: 1,
        bg: "bg-teal-300",
        heading: "PERFECTION",
        subheading: "I Perfect",
        textColor: "text-black",
    },
    {
        id: 2,
        bg: "bg-yellow-300",
        heading: "SMART",
        subheading: "I Strategize",
        textColor: "text-gray-700",
    },
    {
        id: 3,
        bg: "bg-red-300",
        heading: "RESULT",
        subheading: "I Show",
        textColor: "text-black",
    },
];

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 6000); // change every 6 seconds
        return () => clearInterval(interval);
    }, []);

    const { bg, heading, subheading, textColor } = slides[index];

    const scrollToPortfolio = () => {
        const el = document.getElementById("portfolio");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div
            className={`w-full h-screen flex items-center justify-center transition-all duration-200 ease-in-out ${bg}`}
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
                        <p className={`text-xl md:text-2xl font-serif mb-4 text-left ${textColor}`}>
                            {subheading}
                        </p>
                        <hr className="w-full border-t-1 border-gray-500/60  left-0 mt-[27px] absolute" />
                        <h1
                            className={`text-7xl  py-0 leading-none  text-center md:text-9xl font-extrabold tracking-widest  ${textColor}`}
                        >
                            {heading}
                        </h1>
                        <hr className="w-full border-t-1 border-gray-500/60  left-0  mt-[-10px] absolute" />

                    </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex justify-end">
                    <button
                        onClick={scrollToPortfolio}
                        className="group text-lg font-semibold text-black flex flex-col items-center"
                    >
                        <span className="relative inline-block">
                            <span className="block">View Our Work</span>
                            {/* Underline arrow */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 100 4"
                                preserveAspectRatio="none"
                                className="w-full h-1 mt-1"
                            >
                                <line
                                    x1="0"
                                    y1="2"
                                    x2="98"
                                    y2="2"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                                <polyline
                                    points="98,0 100,2 98,4"
                                    fill="currentColor"
                                />
                            </svg>
                        </span>
                    </button>
                </div>



            </div>
        </div>
    );
}
