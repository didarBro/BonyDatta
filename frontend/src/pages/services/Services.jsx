import React from "react";

const Services = () => {
  const services = [
    {
      title: "Strategy, Branding & Funnels",
      description:
        "Marketing that isn’t just pretty — from brand aesthetics to funnel flows to click-to-conversion, I map out journeys that work.",
    },
    {
      title: "Social Media Marketing",
      description:
        "Content, strategy, and campaigns that get people engaged. Results, not fluff.",
    },
    {
      title: "Copy & Content",
      description:
        "Words that sell, connect, and convert. Web, ads, emails, scripts — if it needs words, I’ve got it covered.",
    },
    {
      title: "Design & Visuals",
      description:
        "From bottle wraps to banners, brochures to branded carousels — let me make your message pop.",
    },
    {
      title: "Web & Tech",
      description:
        "A smooth, smart digital engine with websites, landing pages, and tracking setups.",
    },
    {
      title: "Performance & Ads",
      description:
        "I optimize Google, Meta, and LinkedIn campaigns for real return on investment.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <div className="bg-teal-300 py-10 text-center">
        <h2 className="text-5xl md:text-5xl font-extrabold uppercase tracking-wide"
          style={{ transform: "scaleY(1.4)" }}
        >
          WHAT I DO
        </h2>
      </div>

      {/* Intro */}
      <div className="max-w-2xl mx-auto text-center mt-6 px-4">
        <p className="text-lg">
          Basically, if it falls under the Branding & Marketing umbrella, I’ve probably done it,
          fixed it, or made it better.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 px-4 pb-16">
        {services.map((service, index) => (
          <div key={index} className="text-center">
            <h3 className="text-xl font-serif font-semibold border-t-2 border-gray-200 inline-block mt-4 pt-2">
              {service.title}
            </h3>
            <p className="mt-3 text-base">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mb-12">
        <p className="text-lg font-medium">Need a partner who gets the numbers and the narrative?</p>
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.58 0 .19 5.4.19 12c0 2.11.55 4.17 1.6 5.99L0 24l6.17-1.65a11.97 11.97 0 0 0 5.89 1.52h.01c6.48 0 11.87-5.4 11.87-12 0-3.19-1.25-6.19-3.52-8.37zM12.06 21.9c-1.75 0-3.47-.47-4.97-1.36l-.35-.2-3.67.98.98-3.58-.23-.37A9.96 9.96 0 0 1 2.1 12c0-5.47 4.49-9.9 9.96-9.9 2.64 0 5.12 1.03 6.98 2.88a9.92 9.92 0 0 1 2.91 7.02c0 5.47-4.49 9.9-9.89 9.9zm5.48-7.42c-.3-.15-1.76-.86-2.03-.95-.27-.1-.47-.15-.66.15-.2.3-.76.95-.93 1.15-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.37-1.48-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.14.3-.36.45-.55.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.66-1.59-.91-2.17-.24-.57-.48-.5-.66-.51l-.56-.01c-.2 0-.53.07-.8.38-.27.3-1.05 1.02-1.05 2.48 0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.2 5.1 4.48.71.31 1.27.49 1.71.62.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.07-.13-.27-.2-.57-.35z" />
          </svg>
          Let’s chat
        </a>
      </div>
    </div>
  );
};

export default Services;
