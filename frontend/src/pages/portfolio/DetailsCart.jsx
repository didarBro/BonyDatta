
// import React, { useState, useEffect } from "react";
// import { RiShareForwardLine } from "react-icons/ri";
// import {
//   MdOutlineArrowBackIosNew,
//   MdOutlineArrowForwardIos,
// } from "react-icons/md";
// import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";
// import { FaHeart, FaFilePdf } from "react-icons/fa";
// import { IoMdClose } from "react-icons/io";

// const DetailsCart = ({ project, onClose }) => {
//   const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
//   const [isLiked, setIsLiked] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isFullscreen, setIsFullscreen] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 50);
//     return () => clearTimeout(timer);
//   }, []);

//   // Handle fullscreen functionality
//   useEffect(() => {
//     const handleKeydown = (e) => {
//       if (e.key === "Escape" && isFullscreen) {
//         setIsFullscreen(false);
//       }
//     };

//     if (isFullscreen) {
//       document.addEventListener("keydown", handleKeydown);
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }

//     return () => {
//       document.removeEventListener("keydown", handleKeydown);
//       document.body.style.overflow = "unset";
//     };
//   }, [isFullscreen]);

//   // Get media items (either mediaItems or projectImages)
//   const getMediaItems = () => {
//     if (project.mediaItems && project.mediaItems.length > 0) {
//       return project.mediaItems;
//     } else if (project.projectImages && project.projectImages.length > 0) {
//       return project.projectImages.map(img => ({ type: "image", url: img }));
//     } else {
//       return [{ type: "image", url: project.image }];
//     }
//   };

//   const mediaItems = getMediaItems();
//   const totalItems = mediaItems.length;

//   const nextMedia = () => {
//     if (totalItems > 1) {
//       setCurrentMediaIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
//     }
//   };

//   const prevMedia = () => {
//     if (totalItems > 1) {
//       setCurrentMediaIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
//     }
//   };

//   const toggleLike = () => {
//     setIsLiked(!isLiked);
//   };

//   const handleShare = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: project.title,
//         text: project.description,
//         url: window.location.href,
//       });
//     } else {
//       navigator.clipboard.writeText(window.location.href);
//       alert("Link copied to clipboard!");
//     }
//   };

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget && !isFullscreen) {
//       onClose();
//     }
//   };

//   const toggleFullscreen = () => {
//     setIsFullscreen(!isFullscreen);
//   };

//   const currentMedia = mediaItems[currentMediaIndex];

//   // Render media content (image or PDF)
//   const renderMediaContent = (media, isFullscreen = false) => {
//     if (media.type === "pdf") {
//       return (
//         <div className={`relative bg-white rounded-lg shadow-inner overflow-hidden ${
//           isFullscreen ? "w-full h-full" : "w-full h-full"
//         }`}>
//           <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 z-10">
//             <FaFilePdf />
//             <span>PDF</span>
//           </div>
//           <iframe
//             src={media.url}
//             className="w-full h-full border-0"
//             title="PDF Document"
//             style={{ 
//               minHeight: isFullscreen ? "100vh" : "500px",
//               height: isFullscreen ? "100vh" : "100%"
//             }}
//             allow="fullscreen"
//             loading="lazy"
//             scrolling="auto"
//           />
//         </div>
//       );
//     } else {
//       return (
//         <img
//           src={media.url}
//           alt={project.title}
//           className={`transition-transform duration-500 hover:scale-105 ${
//             isFullscreen ? "max-w-full max-h-full object-contain" : "max-w-full max-h-full object-contain"
//           }`}
//         />
//       );
//     }
//   };

//   // Fullscreen overlay
//   if (isFullscreen) {
//     return (
//       <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
//         {/* Fullscreen controls */}
//         <div className="absolute top-4 right-4 z-10 flex items-center space-x-3">
//           <button
//             onClick={toggleFullscreen}
//             className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
//             aria-label="Exit fullscreen"
//           >
//             <BsArrowsAngleContract className="text-xl" />
//           </button>
//           <button
//             onClick={onClose}
//             className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
//             aria-label="Close"
//           >
//             <IoMdClose className="text-xl" />
//           </button>
//         </div>

//         {/* Media type indicator */}
//         <div className="absolute top-4 left-4 z-10 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
//           {currentMedia.type === "pdf" ? "PDF Document" : "Image"} {currentMediaIndex + 1} of {totalItems}
//         </div>

//         {/* Fullscreen media navigation */}
//         {totalItems > 1 && (
//           <>
//             <button
//               onClick={prevMedia}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-3 z-10 transition-all duration-200"
//               aria-label="Previous media"
//             >
//               <MdOutlineArrowBackIosNew className="text-2xl" />
//             </button>
//             <button
//               onClick={nextMedia}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-3 z-10 transition-all duration-200"
//               aria-label="Next media"
//             >
//               <MdOutlineArrowForwardIos className="text-2xl" />
//             </button>
//           </>
//         )}

//         {/* Fullscreen media */}
//         <div className="w-full h-full flex items-center justify-center p-4">
//           {currentMedia.type === "pdf" ? (
//             <div className="w-full h-full bg-white rounded-lg overflow-hidden">
//               <iframe
//                 src={currentMedia.url}
//                 className="w-full h-full border-0"
//                 title="PDF Document"
//                 style={{ height: "100%" }}
//                 allow="fullscreen"
//                 loading="lazy"
//                 scrolling="auto"
//               />
//             </div>
//           ) : (
//             renderMediaContent(currentMedia, true)
//           )}
//         </div>

//         {/* Fullscreen dots */}
//         {totalItems > 1 && (
//           <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
//             {mediaItems.map((media, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentMediaIndex(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-200 relative ${
//                   index === currentMediaIndex
//                     ? "bg-white scale-125"
//                     : "bg-white bg-opacity-50 hover:bg-opacity-80"
//                 }`}
//                 aria-label={`${media.type} ${index + 1}`}
//               >
//                 {media.type === "pdf" && (
//                   <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
//                 )}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-2 sm:p-4"
//       onClick={handleBackdropClick}
//     >
//       <div
//         className={`bg-white w-full max-w-7xl h-full max-h-[95vh] overflow-hidden shadow-2xl rounded-xl transform transition-all duration-500 ease-out ${
//           isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
//         }`}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
//           <div className="flex items-center space-x-3 sm:space-x-4">
//             {/* Media Type Indicator */}
//             <div className="flex items-center space-x-2 px-3 py-1 bg-gray-100 rounded-full">
//               {currentMedia.type === "pdf" ? (
//                 <FaFilePdf className="text-red-500 text-sm" />
//               ) : (
//                 <span className="w-3 h-3 bg-green-500 rounded-full"></span>
//               )}
//               <span className="text-xs font-medium text-gray-600">
//                 {currentMedia.type === "pdf" ? "PDF Document" : "Image"}
//               </span>
//             </div>

//             {/* Fullscreen Icon */}
//             <BsArrowsAngleExpand
//               className="text-xl sm:text-2xl text-gray-500 cursor-pointer hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
//               onClick={toggleFullscreen}
//             />

//             {/* Like Icon */}
//             <FaHeart
//               className={`text-xl sm:text-2xl cursor-pointer transition-all duration-300 ease-out transform hover:scale-125 ${
//                 isLiked
//                   ? "text-red-500 animate-pulse drop-shadow-lg"
//                   : "text-gray-400 hover:text-red-400"
//               }`}
//               onClick={toggleLike}
//             />

//             {/* Share Icon */}
//             <RiShareForwardLine
//               className="text-xl sm:text-2xl text-gray-500 cursor-pointer transition-all duration-300 ease-out transform hover:scale-125 hover:text-blue-500"
//               onClick={handleShare}
//             />
//           </div>

//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="text-2xl sm:text-3xl text-gray-400 hover:text-gray-600 transition-all duration-200 ease-out hover:rotate-90 transform"
//             aria-label="Close details"
//           >
//             <IoMdClose />
//           </button>
//         </div>

//         <div className="flex flex-col lg:flex-row h-[calc(100%-64px)]">
//           {/* Media Section */}
//           <div className="lg:w-2/3 relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center h-1/2 lg:h-full">
//             {/* Media Display */}
//             <div className="relative z-0 w-full h-full flex items-center justify-center p-2 sm:p-4">
//               <div className="relative w-full h-full bg-white rounded-lg shadow-inner overflow-hidden group">
//                 {currentMedia.type === "pdf" ? (
//                   <div className="relative w-full h-full bg-white rounded-lg shadow-inner overflow-hidden">
//                     <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 z-10">
//                       <FaFilePdf />
//                       <span>PDF</span>
//                     </div>
//                     <iframe
//                       src={currentMedia.url}
//                       className="w-full h-full border-0 rounded-lg"
//                       title="PDF Document"
//                       style={{ 
//                         minHeight: "500px",
//                         height: "100%"
//                       }}
//                       allow="fullscreen"
//                       loading="lazy"
//                       scrolling="auto"
//                     />
//                   </div>
//                 ) : (
//                   <>
//                     {renderMediaContent(currentMedia)}
                    
//                     {/* Media overlay for better visual appeal */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
//                   </>
//                 )}

//                 {/* Left Arrow */}
//                 {totalItems > 1 && (
//                   <button
//                     onClick={prevMedia}
//                     className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 sm:p-3 shadow-lg z-20 transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
//                     aria-label="Previous media"
//                   >
//                     <MdOutlineArrowBackIosNew className="text-gray-600 text-lg sm:text-xl" />
//                   </button>
//                 )}

//                 {/* Right Arrow */}
//                 {totalItems > 1 && (
//                   <button
//                     onClick={nextMedia}
//                     className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 sm:p-3 shadow-lg z-20 transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
//                     aria-label="Next media"
//                   >
//                     <MdOutlineArrowForwardIos className="text-gray-600 text-lg sm:text-xl" />
//                   </button>
//                 )}
//               </div>
//             </div>

//             {/* Dots with Media Type Indicators */}
//             {totalItems > 1 && (
//               <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10 bg-black bg-opacity-30 px-3 py-2 rounded-full backdrop-blur-sm">
//                 {mediaItems.map((media, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentMediaIndex(index)}
//                     className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 relative ${
//                       index === currentMediaIndex
//                         ? "bg-white scale-125 shadow-lg"
//                         : "bg-white bg-opacity-60 hover:bg-opacity-80"
//                     }`}
//                     aria-label={`${media.type} ${index + 1}`}
//                   >
//                     {media.type === "pdf" && (
//                       <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
//                     )}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Content Section */}
//           <div className="lg:w-1/3 p-3 sm:p-6 flex flex-col h-1/2 lg:h-full overflow-y-auto bg-gradient-to-b from-white to-gray-50">
//             <div className="flex-1">
//               <div className="flex items-center justify-between mb-3 sm:mb-4">
//                 <h2 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight flex-1">
//                   {project.title}
//                 </h2>
//                 {totalItems > 1 && (
//                   <div className="flex items-center space-x-2 ml-4">
//                     <button
//                       onClick={prevMedia}
//                       className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-200 hover:scale-110"
//                       aria-label="Previous media"
//                     >
//                       <MdOutlineArrowBackIosNew className="text-gray-600 text-sm" />
//                     </button>
//                     <button
//                       onClick={nextMedia}
//                       className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-200 hover:scale-110"
//                     >
//                       <MdOutlineArrowForwardIos className="text-gray-600 text-sm" />
//                     </button>
//                   </div>
//                 )}
//               </div>
//               <div className="space-y-3">
//                 {project.detailedDescription
//                   .trim()
//                   .split("\n")
//                   .map((line, index) => {
//                     const trimmedLine = line.trim();

//                     if (!trimmedLine) return null; // Skip empty lines

//                     if (trimmedLine.endsWith(":")) {
//                       // Section heading
//                       return (
//                         <h3
//                           key={index}
//                           className="text-base font-semibold text-gray-800 mt-4"
//                         >
//                           {trimmedLine}
//                         </h3>
//                       );
//                     }

//                     if (trimmedLine.startsWith("→")) {
//                       // Bullet/step
//                       return (
//                         <div
//                           key={index}
//                           className="flex items-start space-x-2 text-sm text-gray-700"
//                         >
//                           <span className="mt-0.5 text-blue-500">•</span>
//                           <span>{trimmedLine.slice(1).trim()}</span>
//                         </div>
//                       );
//                     }

//                     // Normal paragraph
//                     return (
//                       <p key={index} className="text-sm text-gray-600">
//                         {trimmedLine}
//                       </p>
//                     );
//                   })}
//               </div>

//               {/* Additional interactive elements */}
//               <div className="flex flex-wrap gap-2 mb-4 mt-4">
//                 <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
//                   {currentMediaIndex + 1} of {totalItems}
//                 </span>
//                 <span className={`px-3 py-1 rounded-full text-xs font-medium ${
//                   currentMedia.type === "pdf" 
//                     ? "bg-red-100 text-red-800" 
//                     : "bg-green-100 text-green-800"
//                 }`}>
//                   {currentMedia.type === "pdf" ? "📄 PDF Document" : "🖼️ Image"}
//                 </span>
//                 {isLiked && (
//                   <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium animate-pulse">
//                     ❤️ Liked
//                   </span>
//                 )}
//               </div>
//             </div>

//             {/* Bottom actions */}
//             <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200">
//               <div className="flex items-center space-x-2 text-sm text-gray-500">
//                 <span>Navigate:</span>
//                 <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">←→</kbd>
//               </div>
//               <button
//                 onClick={nextMedia}
//                 className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 ease-out group"
//                 aria-label="Next media"
//               >
//                 <span className="text-sm hidden sm:inline">Next</span>
//                 <MdOutlineArrowForwardIos className="text-lg group-hover:translate-x-1 transition-transform duration-200" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailsCart;


import React, { useState, useEffect } from "react";
import { RiShareForwardLine } from "react-icons/ri";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";
import { FaHeart, FaFilePdf } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const DetailsCart = ({ project, onClose }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Handle fullscreen functionality
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    if (isFullscreen) {
      document.addEventListener("keydown", handleKeydown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "unset";
    };
  }, [isFullscreen]);

  // Get media items (either mediaItems or projectImages)
  const getMediaItems = () => {
    if (project.mediaItems && project.mediaItems.length > 0) {
      return project.mediaItems;
    } else if (project.projectImages && project.projectImages.length > 0) {
      return project.projectImages.map(img => ({ type: "image", url: img }));
    } else {
      return [{ type: "image", url: project.image }];
    }
  };

  const mediaItems = getMediaItems();
  const totalItems = mediaItems.length;

  const nextMedia = () => {
    if (totalItems > 1) {
      setCurrentMediaIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
    }
  };

  const prevMedia = () => {
    if (totalItems > 1) {
      setCurrentMediaIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && !isFullscreen) {
      onClose();
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const currentMedia = mediaItems[currentMediaIndex];

  // Render media content (image or PDF)
  const renderMediaContent = (media, isFullscreen = false) => {
    if (media.type === "pdf") {
      return (
        <div className={`relative bg-white rounded-lg shadow-inner overflow-hidden ${
          isFullscreen ? "w-full h-full" : "w-full h-full"
        }`}>
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 z-10">
            <FaFilePdf />
            <span>PDF</span>
          </div>
          <iframe
            src={media.url}
            className="w-full h-full border-0"
            title="PDF Document"
            style={{ 
              minHeight: isFullscreen ? "100vh" : "500px",
              height: isFullscreen ? "100vh" : "100%"
            }}
            allow="fullscreen"
            loading="lazy"
            scrolling="auto"
          />
        </div>
      );
    } else {
      return (
        <img
          src={media.url}
          alt={project.title}
          className={`transition-transform duration-500 hover:scale-105 ${
            isFullscreen ? "max-w-full max-h-full object-contain" : "w-full h-full object-contain"
          }`}
        />
      );
    }
  };

  // Fullscreen overlay
  if (isFullscreen) {
    return (
      <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
        {/* Fullscreen controls */}
        <div className="absolute top-4 right-4 z-10 flex items-center space-x-3">
          <button
            onClick={toggleFullscreen}
            className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
            aria-label="Exit fullscreen"
          >
            <BsArrowsAngleContract className="text-xl" />
          </button>
          <button
            onClick={onClose}
            className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
            aria-label="Close"
          >
            <IoMdClose className="text-xl" />
          </button>
        </div>

        {/* Media type indicator */}
        <div className="absolute top-4 left-4 z-10 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          {currentMedia.type === "pdf" ? "PDF Document" : "Image"} {currentMediaIndex + 1} of {totalItems}
        </div>

        {/* Fullscreen media navigation */}
        {totalItems > 1 && (
          <>
            <button
              onClick={prevMedia}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-3 z-10 transition-all duration-200"
              aria-label="Previous media"
            >
              <MdOutlineArrowBackIosNew className="text-2xl" />
            </button>
            <button
              onClick={nextMedia}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-3 z-10 transition-all duration-200"
              aria-label="Next media"
            >
              <MdOutlineArrowForwardIos className="text-2xl" />
            </button>
          </>
        )}

        {/* Fullscreen media */}
        <div className="w-full h-full flex items-center justify-center p-4">
          {currentMedia.type === "pdf" ? (
            <div className="w-full h-full bg-white rounded-lg overflow-hidden">
              <iframe
                src={currentMedia.url}
                className="w-full h-full border-0"
                title="PDF Document"
                style={{ height: "100%" }}
                allow="fullscreen"
                loading="lazy"
                scrolling="auto"
              />
            </div>
          ) : (
            renderMediaContent(currentMedia, true)
          )}
        </div>

        {/* Fullscreen dots */}
        {totalItems > 1 && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {mediaItems.map((media, index) => (
              <button
                key={index}
                onClick={() => setCurrentMediaIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 relative ${
                  index === currentMediaIndex
                    ? "bg-white scale-125"
                    : "bg-white bg-opacity-50 hover:bg-opacity-80"
                }`}
                aria-label={`${media.type} ${index + 1}`}
              >
                {media.type === "pdf" && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div
        className={`bg-white w-full max-w-7xl h-full max-h-[95vh] overflow-hidden shadow-2xl rounded-xl transform transition-all duration-500 ease-out ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Media Type Indicator */}
            <div className="flex items-center space-x-2 px-3 py-1 bg-gray-100 rounded-full">
              {currentMedia.type === "pdf" ? (
                <FaFilePdf className="text-red-500 text-sm" />
              ) : (
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              )}
              <span className="text-xs font-medium text-gray-600">
                {currentMedia.type === "pdf" ? "PDF Document" : "Image"}
              </span>
            </div>

            {/* Fullscreen Icon */}
            <BsArrowsAngleExpand
              className="text-xl sm:text-2xl text-gray-500 cursor-pointer hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
              onClick={toggleFullscreen}
            />

            {/* Like Icon */}
            <FaHeart
              className={`text-xl sm:text-2xl cursor-pointer transition-all duration-300 ease-out transform hover:scale-125 ${
                isLiked
                  ? "text-red-500 animate-pulse drop-shadow-lg"
                  : "text-gray-400 hover:text-red-400"
              }`}
              onClick={toggleLike}
            />

            {/* Share Icon */}
            <RiShareForwardLine
              className="text-xl sm:text-2xl text-gray-500 cursor-pointer transition-all duration-300 ease-out transform hover:scale-125 hover:text-blue-500"
              onClick={handleShare}
            />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="text-2xl sm:text-3xl text-gray-400 hover:text-gray-600 transition-all duration-200 ease-out hover:rotate-90 transform"
            aria-label="Close details"
          >
            <IoMdClose />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row h-[calc(100%-64px)]">
          {/* Media Section */}
          <div className="lg:w-2/3 relative bg-gradient-to-br from-gray-50 to-gray-100 h-1/2 lg:h-full">
            {/* Media Display - Centered */}
            <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
              <div className="relative w-full h-full bg-white rounded-lg shadow-inner overflow-hidden group flex items-center justify-center">
                {currentMedia.type === "pdf" ? (
                  <div className="w-full h-full bg-white rounded-lg shadow-inner overflow-hidden">
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 z-10">
                      <FaFilePdf />
                      <span>PDF</span>
                    </div>
                    <iframe
                      src={currentMedia.url}
                      className="w-full h-full border-0 rounded-lg"
                      title="PDF Document"
                      style={{ 
                        minHeight: "500px",
                        height: "100%",
                        width: "100%"
                      }}
                      allow="fullscreen"
                      loading="lazy"
                      scrolling="auto"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-full h-full p-4">
                    {renderMediaContent(currentMedia)}
                  </div>
                )}

                {/* Media overlay for better visual appeal */}
                {currentMedia.type !== "pdf" && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                )}

                {/* Left Arrow */}
                {totalItems > 1 && (
                  <button
                    onClick={prevMedia}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 sm:p-3 shadow-lg z-20 transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
                    aria-label="Previous media"
                  >
                    <MdOutlineArrowBackIosNew className="text-gray-600 text-lg sm:text-xl" />
                  </button>
                )}

                {/* Right Arrow */}
                {totalItems > 1 && (
                  <button
                    onClick={nextMedia}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 sm:p-3 shadow-lg z-20 transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
                    aria-label="Next media"
                  >
                    <MdOutlineArrowForwardIos className="text-gray-600 text-lg sm:text-xl" />
                  </button>
                )}
              </div>
            </div>

            {/* Dots with Media Type Indicators */}
            {totalItems > 1 && (
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10 bg-black bg-opacity-30 px-3 py-2 rounded-full backdrop-blur-sm">
                {mediaItems.map((media, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMediaIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 relative ${
                      index === currentMediaIndex
                        ? "bg-white scale-125 shadow-lg"
                        : "bg-white bg-opacity-60 hover:bg-opacity-80"
                    }`}
                    aria-label={`${media.type} ${index + 1}`}
                  >
                    {media.type === "pdf" && (
                      <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="lg:w-1/3 p-3 sm:p-6 flex flex-col h-1/2 lg:h-full overflow-y-auto bg-gradient-to-b from-white to-gray-50">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight flex-1">
                  {project.title}
                </h2>
                {totalItems > 1 && (
                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={prevMedia}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-200 hover:scale-110"
                      aria-label="Previous media"
                    >
                      <MdOutlineArrowBackIosNew className="text-gray-600 text-sm" />
                    </button>
                    <button
                      onClick={nextMedia}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-200 hover:scale-110"
                    >
                      <MdOutlineArrowForwardIos className="text-gray-600 text-sm" />
                    </button>
                  </div>
                )}
              </div>
              <div className="space-y-3">
                {project.detailedDescription
                  .trim()
                  .split("\n")
                  .map((line, index) => {
                    const trimmedLine = line.trim();

                    if (!trimmedLine) return null; // Skip empty lines

                    if (trimmedLine.endsWith(":")) {
                      // Section heading
                      return (
                        <h3
                          key={index}
                          className="text-base font-semibold text-gray-800 mt-4"
                        >
                          {trimmedLine}
                        </h3>
                      );
                    }

                    if (trimmedLine.startsWith("→")) {
                      // Bullet/step
                      return (
                        <div
                          key={index}
                          className="flex items-start space-x-2 text-sm text-gray-700"
                        >
                          <span className="mt-0.5 text-blue-500">•</span>
                          <span>{trimmedLine.slice(1).trim()}</span>
                        </div>
                      );
                    }

                    // Normal paragraph
                    return (
                      <p key={index} className="text-sm text-gray-600">
                        {trimmedLine}
                      </p>
                    );
                  })}
              </div>

              {/* Additional interactive elements */}
              <div className="flex flex-wrap gap-2 mb-4 mt-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  {currentMediaIndex + 1} of {totalItems}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  currentMedia.type === "pdf" 
                    ? "bg-red-100 text-red-800" 
                    : "bg-green-100 text-green-800"
                }`}>
                  {currentMedia.type === "pdf" ? "📄 PDF Document" : "🖼️ Image"}
                </span>
                {isLiked && (
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium animate-pulse">
                    ❤️ Liked
                  </span>
                )}
              </div>
            </div>

            {/* Bottom actions */}
            <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>Navigate:</span>
                <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">←→</kbd>
              </div>
              <button
                onClick={nextMedia}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 ease-out group"
                aria-label="Next media"
              >
                <span className="text-sm hidden sm:inline">Next</span>
                <MdOutlineArrowForwardIos className="text-lg group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCart;