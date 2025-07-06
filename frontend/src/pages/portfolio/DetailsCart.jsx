// DetailsCart.jsx
import React, { useState } from "react";

const DetailsCart = ({ images = [], projectName, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  // Handlers for icons (you can customize functionality)
  const openFullScreen = () => {
    const img = document.getElementById("detail-image");
    if (img.requestFullscreen) {
      img.requestFullscreen();
    } else if (img.mozRequestFullScreen) {
      img.mozRequestFullScreen();
    } else if (img.webkitRequestFullscreen) {
      img.webkitRequestFullscreen();
    } else if (img.msRequestFullscreen) {
      img.msRequestFullscreen();
    }
  };

  const loveReact = () => {
    alert("You loved this!");
  };

  const share = () => {
    alert("Share dialog or functionality goes here.");
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-white">
      {/* Left Side - Image */}
      <div className="relative flex-1 flex items-center justify-center bg-[#e9cebb] p-4">
        {/* Top icons */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-6 z-20">
          {/* Fullscreen */}
          <button
            onClick={openFullScreen}
            aria-label="Open full screen"
            className="p-2 bg-white bg-opacity-70 rounded-full hover:bg-opacity-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 3H5a2 2 0 00-2 2v3m0 8v3a2 2 0 002 2h3m8-16h3a2 2 0 012 2v3m0 8v3a2 2 0 01-2 2h-3"
              />
            </svg>
          </button>

          {/* Love react */}
          <button
            onClick={loveReact}
            aria-label="Love react"
            className="p-2 bg-white bg-opacity-70 rounded-full hover:bg-opacity-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="none"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3a5.5 5.5 0 015.5 5.5 5.5 5.5 0 015.5-5.5C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>

          {/* Share */}
          <button
            onClick={share}
            aria-label="Share"
            className="p-2 bg-white bg-opacity-70 rounded-full hover:bg-opacity-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 12v.01M12 4v.01M20 12v.01M12 20v.01M7.07 7.07l.01.01M16.93 7.07l.01.01M7.07 16.93l.01.01M16.93 16.93l.01.01"
              />
            </svg>
          </button>
        </div>

        {/* Image */}
        <img
          id="detail-image"
          src={images[currentIndex]}
          alt={`${projectName} - ${currentIndex + 1}`}
          className="max-w-full max-h-[80vh] object-contain relative z-10"
        />

        {/* Left arrow */}
        {totalImages > 1 && (
          <button
            onClick={prevImage}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Right arrow */}
        {totalImages > 1 && (
          <button
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Right Side - Text */}
      <div className="flex-1 flex flex-col justify-center p-8">
        <h2 className="text-2xl font-semibold mb-4">{projectName}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-gray-500">
          Go to <strong>“Manage Media”</strong> to add your content.
        </p>
      </div>
    </div>
  );
};

export default DetailsCart;
