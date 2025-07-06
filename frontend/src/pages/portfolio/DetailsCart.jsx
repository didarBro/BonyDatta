import React, { useState, useEffect } from "react";
import { RiShareForwardLine } from "react-icons/ri";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const DetailsCart = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    if (isFullscreen) {
      document.addEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreen]);

  const nextImage = () => {
    if (project.projectImages && project.projectImages.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === project.projectImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (project.projectImages && project.projectImages.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.projectImages.length - 1 : prev - 1
      );
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

  const currentImage =
    project.projectImages && project.projectImages.length > 0
      ? project.projectImages[currentImageIndex]
      : project.image;

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

        {/* Fullscreen image navigation */}
        {project.projectImages?.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-3 z-10 transition-all duration-200"
              aria-label="Previous image"
            >
              <MdOutlineArrowBackIosNew className="text-2xl" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-3 z-10 transition-all duration-200"
              aria-label="Next image"
            >
              <MdOutlineArrowForwardIos className="text-2xl" />
            </button>
          </>
        )}

        {/* Fullscreen image */}
        <img
          src={currentImage}
          alt={project.title}
          className="max-w-full max-h-full object-contain"
        />

        {/* Fullscreen dots */}
        {project.projectImages?.length > 1 && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {project.projectImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentImageIndex
                    ? "bg-white scale-125"
                    : "bg-white bg-opacity-50 hover:bg-opacity-80"
                }`}
                aria-label={`Image ${index + 1}`}
              />
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
          {/* Image Section */}
          <div className="lg:w-2/3 relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center h-1/2 lg:h-full">
            {/* Image Display with fixed aspect ratio */}
            <div className="relative z-0 w-full h-full flex items-center justify-center p-2 sm:p-4">
              <div className="relative w-full h-full max-w-4xl max-h-[600px] bg-white rounded-lg shadow-inner overflow-hidden group">
                <img
                  src={currentImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Image overlay for better visual appeal */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                
                {/* Left Arrow - positioned on the left side of the image */}
                {project.projectImages?.length > 1 && (
                  <button
                    onClick={prevImage}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 sm:p-3 shadow-lg z-20 transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <MdOutlineArrowBackIosNew className="text-gray-600 text-lg sm:text-xl" />
                  </button>
                )}

                {/* Right Arrow - positioned on the right side of the image */}
                {project.projectImages?.length > 1 && (
                  <button
                    onClick={nextImage}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 sm:p-3 shadow-lg z-20 transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
                    aria-label="Next image"
                  >
                    <MdOutlineArrowForwardIos className="text-gray-600 text-lg sm:text-xl" />
                  </button>
                )}
              </div>
            </div>

            {/* Dots */}
            {project.projectImages?.length > 1 && (
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10 bg-black bg-opacity-30 px-3 py-2 rounded-full backdrop-blur-sm">
                {project.projectImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex
                        ? "bg-white scale-125 shadow-lg"
                        : "bg-white bg-opacity-60 hover:bg-opacity-80"
                    }`}
                    aria-label={`Image ${index + 1}`}
                  />
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
                {project.projectImages?.length > 1 && (
                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={prevImage}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-200 hover:scale-110"
                      aria-label="Previous image"
                    >
                      <MdOutlineArrowBackIosNew className="text-gray-600 text-sm" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-200 hover:scale-110"
                      aria-label="Next image"
                    >
                      <MdOutlineArrowForwardIos className="text-gray-600 text-sm" />
                    </button>
                  </div>
                )}
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                {project.detailedDescription}
              </p>
              
              {/* Additional interactive elements */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  {currentImageIndex + 1} of {project.projectImages?.length || 1}
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
                onClick={nextImage}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 ease-out group"
                aria-label="Next image"
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

// Sample usage with mock data
const App = () => {
  const [showDetails, setShowDetails] = useState(false);
  
  const mockProject = {
    title: "Modern Web Application",
    description: "A beautiful and responsive web application",
    detailedDescription: "This is a comprehensive web application built with modern technologies including React, Tailwind CSS, and various interactive components. The application features a responsive design that works seamlessly across all devices, from mobile phones to desktop computers. It includes advanced features like image galleries, fullscreen viewing, social sharing capabilities, and smooth animations that enhance the user experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    projectImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <button
        onClick={() => setShowDetails(true)}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        View Project Details
      </button>
      
      {showDetails && (
        <DetailsCart 
          project={mockProject} 
          onClose={() => setShowDetails(false)} 
        />
      )}
    </div>
  );
};

export default App;