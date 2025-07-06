// import React, { useState, useEffect, useRef } from "react";
// import {
//   FaHeart,
//   FaFacebookF,
//   FaTwitter,
//   FaPinterestP,
//   FaTumblr,
//   FaEnvelope,
// } from "react-icons/fa";
// import { IoMdShareAlt } from "react-icons/io";

// const Portfolio = () => {
//   const projects = [
//     {
//       title: "Branding & Visuals",
//       description:
//         "I help clients transform scattered, outdated, or non-existent branding into seamless, modern identities that truly reflect their business.",
//       image: [
//         "/images/branding.jpg",
//         "/images/branding.jpg",
//         "/images/branding.jpg",
//       ],
//     },
//     {
//       title: "Social Media Graphics",
//       description: "I help clients transform scattered, outdated, or non-existent branding into seamless, modern identities that truly reflect their business.",
//       image: "/images/social.jpg",
//     },
//     {
//       title: "Website UI/UX Design",
//       description:
//         "I help clients transform scattered, outdated, or non-existent branding into seamless, modern identities that truly reflect their business.",
//       image: "/images/uiux.jpg",
//     },
//     {
//       title: "Print & Digital",
//       description:
//         "I help clients transform scattered, outdated, or non-existent branding into seamless, modern identities that truly reflect their business.",
//       image: "/images/print.jpg",
//     },
//     {
//       title: "Campaign Creatives",
//       description:
//         "I help clients transform scattered, outdated, or non-existent branding into seamless, modern identities that truly reflect their business.",
//       image: "/images/campaign.jpg",
//     },
//     {
//       title: "Email Marketing",
//       description:
//         "I help clients transform scattered, outdated, or non-existent branding into seamless, modern identities that truly reflect their business.",
//       image: "/images/email.jpg",
//     },
//     {
//       title: "Paid Media Campaign",
//       description:
//         "I help clients transform scattered, outdated, or non-existent branding into seamless, modern identities that truly reflect their business.",
//       image: "/images/paid.jpg",
//     },
//     {
//       title: "Performance & Analytics",
//       description:
//         "I help clients transform scattered, outdated, or non-existent branding into seamless, modern identities that truly reflect their business.",

//       image: "/images/performance.jpg",
//     },
//   ];

//   const [liked, setLiked] = useState({});
//   const [shareModal, setShareModal] = useState(null);

//   // Track visibility of rows
//   const [visibleRows, setVisibleRows] = useState({});
//   const rowRefs = useRef([]);

//   useEffect(() => {
//     const observers = [];

//     rowRefs.current.forEach((ref, index) => {
//       if (!ref) return;

//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             // Add a small delay for smoother sequential animation
//             setTimeout(() => {
//               setVisibleRows((prev) => ({ ...prev, [index]: true }));
//             }, index * 200);
//             observer.unobserve(entry.target);
//           }
//         },
//         { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
//       );

//       observer.observe(ref);
//       observers.push(observer);
//     });

//     return () => {
//       observers.forEach((obs) => obs.disconnect());
//     };
//   }, []);

//   const toggleLike = (index) => {
//     setLiked((prev) => ({ ...prev, [index]: !prev[index] }));
//   };

//   const openShare = (index) => {
//     setShareModal(index);
//   };

//   const closeShare = () => {
//     setShareModal(null);
//   };

//   const copyLink = () => {
//     navigator.clipboard.writeText("https://www.example.com/yourproject");
//     alert("Link copied to clipboard!");
//   };

//   return (
//     <div className="bg-white relative">
//       {/* Header */}
//       <div
//         className="bg-teal-300 py-10 text-center"
//         style={{
//           fontFamily: "impact, impact-w01-2010, sans-serif",
//           fontSize: "70px",
//           fontWeight: 700,
//           lineHeight: "normal",
//           color: "rgb(34,34,34)",
//         }}
//       >
//         <h1
//           className="text-5xl md:text-5xl font-extrabold uppercase tracking-wide transform transition-all duration-700 ease-out"
//           style={{ transform: "scaleY(1.4)" }}
//         >
//           MY WORK
//         </h1>
//       </div>

//       {/* Intro */}
//       <div className="max-w-3xl mx-auto text-center mt-6 px-4">
//         <p className="text-lg transition-all duration-500 ease-in-out">
//           From standout visuals to conversion-focused websites, every project I
//           take on—be it copy, branding, or a full campaign—is created with
//           clarity, creativity, and results in mind.
//         </p>
//       </div>

//       <div className="max-w-7xl mx-auto">
//         {[
//           { slice: [0, 2], cols: 2 },
//           { slice: [2, 5], cols: 3 },
//           { slice: [5, 8], cols: 3 },
//         ].map((row, rowIndex) => (
//           <div
//             key={rowIndex}
//             ref={(el) => (rowRefs.current[rowIndex] = el)}
//             className={`grid grid-cols-2 md:grid-cols-${
//               row.cols
//             } gap-8 mt-8 transform transition-all duration-1000 ease-out
//               ${
//                 visibleRows[rowIndex]
//                   ? "opacity-100 translate-y-0 scale-100"
//                   : "opacity-0 translate-y-16 scale-95"
//               }`}
//             style={{
//               transitionDelay: `${rowIndex * 0.2}s`,
//             }}
//           >
//             {projects.slice(...row.slice).map((project, index) => {
//               const globalIndex = row.slice[0] + index;
//               const staggerClass =
//                 rowIndex === 1
//                   ? index === 1
//                     ? "mt-8"
//                     : index === 2
//                     ? "mt-4"
//                     : ""
//                   : rowIndex === 2
//                   ? index === 0
//                     ? "mt-4"
//                     : index === 2
//                     ? "mt-8"
//                     : ""
//                   : "";
//               return (
//                 <div
//                   key={globalIndex}
//                   className={`relative group ${staggerClass} transform transition-all duration-700 ease-out hover:scale-105`}
//                   style={{
//                     transitionDelay: `${rowIndex * 0.3 + index * 0.1}s`,
//                   }}
//                 >
//                   <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-out">
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-72 object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
//                     />
//                     {/* Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out p-4">
//                       <h3 className="text-white text-lg font-semibold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
//                         {project.title}
//                       </h3>
//                       <div
//                         className="flex justify-between items-center w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out"
//                         style={{ transitionDelay: "0.1s" }}
//                       >
//                         <FaHeart
//                           className={`text-2xl cursor-pointer transition-all duration-300 ease-out transform hover:scale-125 ${
//                             liked[globalIndex]
//                               ? "text-red-600 animate-pulse"
//                               : "text-white hover:text-red-400"
//                           }`}
//                           onClick={() => toggleLike(globalIndex)}
//                         />
//                         <IoMdShareAlt
//                           className="text-2xl text-white cursor-pointer transition-all duration-300 ease-out transform hover:scale-125 hover:text-blue-400"
//                           onClick={() => openShare(globalIndex)}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </div>

//       {/* Share Modal */}
//       {shareModal !== null && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-all duration-300 ease-out">
//           <div className="bg-white p-6 rounded-lg relative max-w-md w-full mx-4 transform transition-all duration-500 ease-out scale-100 opacity-100 animate-in">
//             <button
//               onClick={closeShare}
//               className="absolute top-2 right-2 text-2xl hover:text-red-500 transition-colors duration-200 ease-out"
//               aria-label="Close share modal"
//             >
//               &times;
//             </button>
//             <h3 className="text-xl font-semibold mb-4 text-center">
//               Share this project
//             </h3>
//             <div className="flex justify-center space-x-4 mb-4">
//               <FaFacebookF className="text-2xl cursor-pointer hover:text-blue-600 transition-all duration-300 ease-out transform hover:scale-125" />
//               <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400 transition-all duration-300 ease-out transform hover:scale-125" />
//               <FaPinterestP className="text-2xl cursor-pointer hover:text-red-500 transition-all duration-300 ease-out transform hover:scale-125" />
//               <FaTumblr className="text-2xl cursor-pointer hover:text-blue-800 transition-all duration-300 ease-out transform hover:scale-125" />
//               <FaEnvelope className="text-2xl cursor-pointer hover:text-gray-600 transition-all duration-300 ease-out transform hover:scale-125" />
//             </div>
//             <div className="flex border rounded-md overflow-hidden mt-4">
//               <input
//                 type="text"
//                 readOnly
//                 value="https://www.example.com/yourproject"
//                 className="flex-1 p-2 outline-none bg-gray-50"
//               />
//               <button
//                 onClick={copyLink}
//                 className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors duration-200 ease-out"
//               >
//                 Copy
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Portfolio;

import React, { useState, useEffect, useRef } from "react";
import {
  FaHeart,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaTumblr,
  FaEnvelope,
} from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import DetailsCart from "./DetailsCart";

const Portfolio = () => {
  const projects = [
    {
      title: "Branding & Visuals",
      description:
        "I help clients transform scattered, outdated, or non-existent branding into seamless, modern identities that truly reflect their business.",
      detailedDescription: `
      I help clients transform scattered, outdated, or non-existent branding into seamless, modern identities that truly reflect their business.
      𝗣𝗿𝗼𝗰𝗲𝘀𝘀:
      → Brand audit + competitive benchmarking
      → Moodboarding & concept development
      → Logo, typography, & color palette design
      → Style guide & visual asset creation
      
      𝗥𝗲𝘀𝘂𝗹𝘁𝘀:
      Created solid, polished identities that would work everywhere & make a lasting impression, from 𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 𝘁𝗼 𝗶𝗻𝘃𝗲𝘀𝘁𝗼𝗿 𝗱𝗲𝗰𝗸𝘀.
        `,
      image: "/images/branding.jpg",
      projectImages: [
        "/images/branding/1.png",
        "/images/branding/2.png",
        "/images/branding/3.png",
        "/images/branding/4.png",
        "/images/branding/5.png",
        "/images/branding/6.png",
        "/images/branding/7.png",
      ],
    },

    {
      title: "Social Media Graphics",
      description:
        "I help clients transform scattered, outdated, or non-existent branding into seamless, modern identities that truly reflect their business.",
      image: "/images/social.jpg",
      detailedDescription:
        "Most businesses struggle to stand out on social media—either their visuals feel off-brand or their messaging doesn't resonate. My goal is to craft scroll-stopping graphics and sharp, on-brand copy that grabs attention and drives engagement. I would start with a quick content audit, identify gaps, then design custom templates and write microcopy tailored to each post. Promos to carousels, the feed would be aesthetically pleasing and high-performing, telling the brand's story and getting people to stop, read, and click.",
      projectImages: [
        "/images/socialMediaGraphics/1.png",
        "/images/socialMediaGraphics/2.png",
        "/images/socialMediaGraphics/3.png",
        "/images/socialMediaGraphics/4.gif",
        "/images/socialMediaGraphics/5.png",
        "/images/socialMediaGraphics/6.png",
        "/images/socialMediaGraphics/7.gif",
        "/images/socialMediaGraphics/8.png",
        "/images/socialMediaGraphics/a.png",
        "/images/socialMediaGraphics/b.png",
        "/images/socialMediaGraphics/c.png",
        "/images/socialMediaGraphics/d.png",
        "/images/socialMediaGraphics/e.png",
        "/images/socialMediaGraphics/f.gif",
        "/images/socialMediaGraphics/g.png",
        "/images/socialMediaGraphics/h.png",
        "/images/socialMediaGraphics/i.png",
        "/images/socialMediaGraphics/m.png",
      ],
    },
    {
      title: "Website UI/UX Design",
      description:
        "I help clients transform scattered, outdated, or non-existent branding into seamless, modern identities that truly reflect their business.",
      image: "/images/uiux.jpg",
      detailedDescription: `I help businesses turn clunky, outdated websites into clean, user-friendly experiences.
        Goals:
        → Improve usability & visual appeal
        → Boost engagement and conversions
        → Strengthen SEO with well-placed content
        Process:
        → UX audit, wireframing & UI design
        → Mobile-responsive layouts
        → SEO-friendly website copy
        Outcome: Delivered clean, intuitive interfaces that kept users engaged, turning visitors into customers.
        
        `,
      mediaItems: [
        { type: "image", url: "/images/webDesign/a.jpg" },
        { type: "image", url: "/images/webDesign/b.png" },
        { type: "pdf", url: "/images/webDesign/a.pdf" },
        { type: "pdf", url: "/images/webDesign/b.pdf" },
        { type: "pdf", url: "/images/webDesign/c.pdf" },
        { type: "pdf", url: "/images/webDesign/d.pdf" },
      ],
    },
    {
      title: "Print & Digital",
      description:
        "I help clients transform scattered, outdated, or non-existent branding into seamless, modern identities that truly reflect their business.",
      image: "/images/print.jpg",
      detailedDescription:
        "Clear, compelling brand collateral captures the essence of a brand. I produce sleek, on-brand assets, including flyers, decks, brochures, and more. I simplify visuals and copy for clarity and impact. The result is digital assets that are sharp, cohesive, and memorable.",
      mediaItems: [
        { type: "pdf", url: "/images/printDigital/Flyer- 1.pdf" },
        { type: "pdf", url: "/images/printDigital/Flyer- 2.pdf" },
        { type: "pdf", url: "/images/printDigital/Flyer- 3.pdf" },
        { type: "pdf", url: "/images/printDigital/Flyers.pdf" },
        { type: "pdf", url: "/images/printDigital/Presentation.pdf" },
        { type: "pdf", url: "/images/printDigital/Water Bottle Design.pdf" },
        { type: "pdf", url: "/images/printDigital/Window Banner.pdf" },
      ],
    },
    {
      title: "Campaign Creatives",
      description:
        "I help clients transform scattered, outdated, or non-existent branding into seamless, modern identities that truly reflect their business.",
      image: "/images/campaign.jpg",
      detailedDescription:
        "Describe your image here. Use catchy text to tell people the story behind the photo. Go to 'Manage Media' to add your content.",
      mediaItems: [{ type: "image", url: "/images/campaign/a.png" }],
    },
    {
      title: "Email Marketing",
      description:
        "I help clients transform scattered, outdated, or non-existent branding into seamless, modern identities that truly reflect their business.",
      image: "/images/email.jpg",
      detailedDescription:
        "Describe your image here. Use catchy text to tell people the story behind the photo. Go to 'Manage Media' to add your content.",
      projectImages: [
        "/images/email.jpg",
        "/images/email.jpg",
        "/images/email.jpg",
      ],
    },
    {
      title: "Paid Media Campaign",
      description:
        "I help clients transform scattered, outdated, or non-existent branding into seamless, modern identities that truly reflect their business.",
      image: "/images/paid.jpg",
      detailedDescription:
        "Describe your image here. Use catchy text to tell people the story behind the photo. Go to 'Manage Media' to add your content.",
      projectImages: [
        "/images/paid.jpg",
        "/images/paid.jpg",
        "/images/paid.jpg",
      ],
    },
    {
      title: "Performance & Analytics",
      description:
        "I help clients transform scattered, outdated, or non-existent branding into seamless, modern identities that truly reflect their business.",
      image: "/images/performance.jpg",
      detailedDescription:
        "Describe your image here. Use catchy text to tell people the story behind the photo. Go to 'Manage Media' to add your content.",
      projectImages: [
        "/images/performance.jpg",
        "/images/performance.jpg",
        "/images/performance.jpg",
      ],
    },
  ];

  const [liked, setLiked] = useState({});
  const [shareModal, setShareModal] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // Track visibility of rows
  const [visibleRows, setVisibleRows] = useState({});
  const rowRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    rowRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Add a small delay for smoother sequential animation
            setTimeout(() => {
              setVisibleRows((prev) => ({ ...prev, [index]: true }));
            }, index * 200);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const toggleLike = (index, e) => {
    e.stopPropagation();
    setLiked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const openShare = (index, e) => {
    e.stopPropagation();
    setShareModal(index);
  };

  const closeShare = () => {
    setShareModal(null);
  };

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  const copyLink = () => {
    navigator.clipboard.writeText("https://www.example.com/yourproject");
    alert("Link copied to clipboard!");
  };

  return (
    <div className="bg-white relative">
      {/* Header */}
      <div
        className="bg-teal-300 py-10 text-center"
        style={{
          fontFamily: "impact, impact-w01-2010, sans-serif",
          fontSize: "70px",
          fontWeight: 700,
          lineHeight: "normal",
          color: "rgb(34,34,34)",
        }}
      >
        <h1
          className="text-5xl md:text-5xl font-extrabold uppercase tracking-wide transform transition-all duration-700 ease-out"
          style={{ transform: "scaleY(1.4)" }}
        >
          MY WORK
        </h1>
      </div>

      {/* Intro */}
      <div className="max-w-3xl mx-auto text-center mt-6 px-4">
        <p className="text-lg transition-all duration-500 ease-in-out">
          From standout visuals to conversion-focused websites, every project I
          take on—be it copy, branding, or a full campaign—is created with
          clarity, creativity, and results in mind.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {[
          { slice: [0, 2], cols: 2 },
          { slice: [2, 5], cols: 3 },
          { slice: [5, 8], cols: 3 },
        ].map((row, rowIndex) => (
          <div
            key={rowIndex}
            ref={(el) => (rowRefs.current[rowIndex] = el)}
            className={`grid grid-cols-2 md:grid-cols-${
              row.cols
            } gap-8 mt-8 transform transition-all duration-1000 ease-out
              ${
                visibleRows[rowIndex]
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-16 scale-95"
              }`}
            style={{
              transitionDelay: `${rowIndex * 0.2}s`,
            }}
          >
            {projects.slice(...row.slice).map((project, index) => {
              const globalIndex = row.slice[0] + index;
              const staggerClass =
                rowIndex === 1
                  ? index === 1
                    ? "mt-8"
                    : index === 2
                    ? "mt-4"
                    : ""
                  : rowIndex === 2
                  ? index === 0
                    ? "mt-4"
                    : index === 2
                    ? "mt-8"
                    : ""
                  : "";
              return (
                <div
                  key={globalIndex}
                  className={`relative group ${staggerClass} transform transition-all duration-700 ease-out hover:scale-105 cursor-pointer`}
                  style={{
                    transitionDelay: `${rowIndex * 0.3 + index * 0.1}s`,
                  }}
                  onClick={() => openProjectDetails(project)}
                >
                  <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-out">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-72 object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out p-4">
                      <h3 className="text-white text-lg font-semibold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        {project.title}
                      </h3>
                      <div
                        className="flex justify-between items-center w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out"
                        style={{ transitionDelay: "0.1s" }}
                      >
                        <FaHeart
                          className={`text-2xl cursor-pointer transition-all duration-300 ease-out transform hover:scale-125 ${
                            liked[globalIndex]
                              ? "text-red-600 animate-pulse"
                              : "text-white hover:text-red-400"
                          }`}
                          onClick={(e) => toggleLike(globalIndex, e)}
                        />
                        <IoMdShareAlt
                          className="text-2xl text-white cursor-pointer transition-all duration-300 ease-out transform hover:scale-125 hover:text-blue-400"
                          onClick={(e) => openShare(globalIndex, e)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Share Modal */}
      {shareModal !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-all duration-300 ease-out">
          <div className="bg-white p-6 rounded-lg relative max-w-md w-full mx-4 transform transition-all duration-500 ease-out scale-100 opacity-100 animate-in">
            <button
              onClick={closeShare}
              className="absolute top-2 right-2 text-2xl hover:text-red-500 transition-colors duration-200 ease-out"
              aria-label="Close share modal"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4 text-center">
              Share this project
            </h3>
            <div className="flex justify-center space-x-4 mb-4">
              <FaFacebookF className="text-2xl cursor-pointer hover:text-blue-600 transition-all duration-300 ease-out transform hover:scale-125" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400 transition-all duration-300 ease-out transform hover:scale-125" />
              <FaPinterestP className="text-2xl cursor-pointer hover:text-red-500 transition-all duration-300 ease-out transform hover:scale-125" />
              <FaTumblr className="text-2xl cursor-pointer hover:text-blue-800 transition-all duration-300 ease-out transform hover:scale-125" />
              <FaEnvelope className="text-2xl cursor-pointer hover:text-gray-600 transition-all duration-300 ease-out transform hover:scale-125" />
            </div>
            <div className="flex border rounded-md overflow-hidden mt-4">
              <input
                type="text"
                readOnly
                value="https://www.example.com/yourproject"
                className="flex-1 p-2 outline-none bg-gray-50"
              />
              <button
                onClick={copyLink}
                className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors duration-200 ease-out"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Project Details Modal */}
      {selectedProject && (
        <DetailsCart project={selectedProject} onClose={closeProjectDetails} />
      )}
    </div>
  );
};

export default Portfolio;
