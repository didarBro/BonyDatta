import { useEffect, useState } from "react";

const slides = [
    {
        id: 1,
        bg: "bg-teal-300",
        heading: "PERFECTION",
        subheading: "I plan to",
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
        heading: "RESULTS",
        subheading: "I Show",
        textColor: "text-black",
    },
];

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const { bg, heading, subheading, textColor } = slides[index];

    const scrollToPortfolio = () => {
        const el = document.getElementById("portfolio");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className={`w-full h-screen flex items-center justify-center transition-all duration-1000 ${bg}`}>
            <div className="w-full max-w-5xl px-6">
                <p className={`text-xl md:text-2xl font-serif mb-4 text-left ${textColor}`}>{subheading}</p>
                <h1 className={`text-7xl md:text-9xl font-extrabold tracking-widest text-left ${textColor}`}>{heading}</h1>
                <div className="mt-8 flex justify-end">
                    <button
                        onClick={scrollToPortfolio}
                        className="relative group text-lg font-semibold text-black"
                    >
                        View Our Work
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-current after:content-[''] after:absolute after:right-0 after:top-1/2 after:translate-y-[-50%] after:border-[6px] after:border-transparent after:border-l-current"></span>
                    </button>
                </div>
            </div>
        </div>
    );
}
