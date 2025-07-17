// export default function About() {
//   const data = {
//     title: "WHO AM I ?",
//     subheading:
//       "Growth & Brand Marketing Pro | Full-Funnel Fixer | Remote-Ready",
//     video: "https://bonydatta.com/assets/video/about.mp4",
//     paragraphs: [
//       "Full-time digital marketer, content strategist, and branding enthusiast & part-time skincare nerd.",
//       "If your business is online (and it should be), I help you own the space—from strategy to full-scale execution across all major platforms.",
//       "I design marketing funnels customized to the real needs of businesses, big or small. From managing multi-channel campaigns to leading remote teams and creating digital content across various industries, I blend creativity, data, and technology to deliver impact. I've collaborated with financial firms, beauty brands, retail companies, and edtech platforms while keeping user needs and business goals in mind. I don't just post pretty content. I build conversion-ready funnels: Strategy → Design → Publishing → Paid Ads → Email Campaigns. A solid understanding of the interconnectedness of content, campaign components, and analytics enables me to spot the golden triad to elevate performance and get the most bang for the buck.",
//     ],
//     tagline:
//       "I believe in strategic simplicity, seamless execution, and the power of a well-optimized funnel to drive real results.",
//   };

//   return (
//     <div className="flex flex-col items-center">
//       {/* Header */}
//       <div
//         className="w-full bg-[#EF958A] py-10 flex justify-center"
//         style={{
//           fontFamily: "impact, impact-w01-2010, sans-serif",
//           fontSize: "70px",
//           fontWeight: 700,
//           lineHeight: "normal",
//           color: "rgb(34,34,34)",
//         }}
//       >
//         <h1
//           className="text-5xl font-extrabold tracking-wide text-black uppercase"
//           style={{ transform: "scaleY(1.4)" }}
//         >
//           {data.title}
//         </h1>
//       </div>

//       {/* Subheading */}
//       <div
//         className="text-center mb-8 mt-8 px-4 sm:px-0"
//         style={{
//           fontFamily: "libre baskerville, serif",
//           fontSize: "18px",
//           fontWeight: 400,
//           lineHeight: "27px",
//           color: "rgb(34,34,34)",
//         }}
//       >
//         <p className="text-2xl font-light text-gray-800 leading-relaxed">
//           {data.subheading}
//         </p>
//       </div>

//       {/* Content */}
//       <div className="flex flex-col md:flex-row items-start max-w-4xl w-full px-4 sm:px-0 gap-8">
//         {/* Video */}
//         <div className="flex-1 h-full">
//           <video
//             src={data.video}
//             autoPlay
//             muted
//             defaultMuted
//             loop
//             playsInline
//             className="w-full h-full object-cover rounded shadow-md"
//             style={{ height: "503px" }}
//           />
//         </div>

//         {/* Text */}
//         <div
//           className="flex-1 h-full flex flex-col justify-between text-gray-700 text-justify space-y-2"
//           style={{
//             fontFamily: "libre baskerville, serif",
//             fontSize: "17px",
//             fontWeight: 400,
//             lineHeight: "27px",
//             color: "rgb(34,34,34)",
//           }}
//         >
//           {data.paragraphs.map((para, index) => (
//             <p key={index}>{para}</p>
//           ))}
//         </div>
//       </div>

//       {/* Tagline Section */}
//       <div className="mt-10 mb-10 text-center px-4 sm:px-0">
//         <div className="border-t border-gray-200 pt-12">
//           <blockquote className="text-xl font-medium text-gray-800 italic max-w-4xl mx-auto leading-relaxed">
//             "{data.tagline}"
//           </blockquote>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [isTaglineVisible, setIsTaglineVisible] = useState(false);
  const taglineRef = useRef(null);

  const data = {
    title: "WHO AM I ?",
    subheading:
      "Growth & Brand Marketing Pro | Full-Funnel Fixer | Remote-Ready",
    video: "https://bonydatta.com/assets/video/about.mp4",
    paragraphs: [
      "Full-time digital marketer, content strategist, and branding enthusiast & part-time skincare nerd.",
      "If your business is online (and it should be), I help you own the space—from strategy to full-scale execution across all major platforms.",
      "I design marketing funnels customized to the real needs of businesses, big or small. From managing multi-channel campaigns to leading remote teams and creating digital content across various industries, I blend creativity, data, and technology to deliver impact. I've collaborated with financial firms, beauty brands, retail companies, and edtech platforms while keeping user needs and business goals in mind. I don't just post pretty content. I build conversion-ready funnels: Strategy → Design → Publishing → Paid Ads → Email Campaigns. A solid understanding of the interconnectedness of content, campaign components, and analytics enables me to spot the golden triad to elevate performance and get the most bang for the buck.",
    ],
    tagline:
      "I believe in strategic simplicity, seamless execution, and the power of a well-optimized funnel to drive real results.",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTaglineVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (taglineRef.current) {
      observer.observe(taglineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Header */}
      <div
        className="w-full bg-[#EF958A] py-10 flex justify-center"
        style={{
          fontFamily: "impact, impact-w01-2010, sans-serif",
          fontSize: "70px",
          fontWeight: 700,
          lineHeight: "normal",
          color: "rgb(34,34,34)",
        }}
      >
        <h1
          className="text-5xl font-extrabold tracking-wide text-black uppercase"
          style={{ transform: "scaleY(1.4)" }}
        >
          {data.title}
        </h1>
      </div>

      {/* Subheading */}
      <div
        className="text-center mb-8 mt-8 px-4 sm:px-0"
        style={{
          fontFamily: "libre baskerville, serif",
          fontSize: "18px",
          fontWeight: 400,
          lineHeight: "27px",
          color: "rgb(34,34,34)",
        }}
      >
        <p className="text-2xl font-light text-gray-800 leading-relaxed">
          {data.subheading}
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-4xl w-full px-4 md:px-8 lg:px-0 gap-8">
        {/* Video */}
        <div className="flex-1 h-full">
          <video
            src={data.video}
            autoPlay
            muted
            defaultMuted
            loop
            playsInline
            className="w-full h-full object-cover rounded shadow-md"
            style={{ height: "503px" }}
          />
        </div>

        {/* Text */}
        <div
          className="flex-1 h-full flex flex-col justify-between text-gray-700 text-justify space-y-2"
          style={{
            fontFamily: "libre baskerville, serif",
            fontSize: "17px",
            fontWeight: 400,
            lineHeight: "27px",
            color: "rgb(34,34,34)",
          }}
        >
          {data.paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>

      {/* Tagline Section */}
      <div
        ref={taglineRef}
        className="mt-10 mb-10 text-center px-4 sm:px-0 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isTaglineVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="border-t border-gray-200 pt-12 relative"
        >
          {/* Animated border line */}
          <motion.div
            initial={{ width: 0 }}
            animate={isTaglineVisible ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
            className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"
          />

          {/* Quote marks animation */}
          <div className="relative">
            <motion.span
              initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
              animate={isTaglineVisible ? { opacity: 0.1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -15 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="absolute -top-4 -left-4 text-6xl text-gray-300 font-serif"
            >
              "
            </motion.span>

            <motion.span
              initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
              animate={isTaglineVisible ? { opacity: 0.1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: 15 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="absolute -bottom-4 -right-4 text-6xl text-gray-300 font-serif"
            >
              "
            </motion.span>

            {/* Tagline text with typewriter effect */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={isTaglineVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="text-xl font-medium text-gray-800 italic max-w-4xl mx-auto leading-relaxed relative z-10"
            >
              {data.tagline.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={isTaglineVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{
                    duration: 0.03,
                    ease: "easeOut",
                    delay: 0.8 + (index * 0.02)
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.blockquote>
          </div>

          {/* Subtle glow effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isTaglineVisible ? { opacity: 0.3, scale: 1.1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent rounded-lg blur-sm -z-10"
          />
        </motion.div>
      </div>
    </div>
  );
}