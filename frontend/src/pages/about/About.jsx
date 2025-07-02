// about.jsx
export default function About() {
  const data = {
    title: "WHO AM I?",
    subheading:
      "Photo- Growth & Brand Marketing Pro | Full-Funnel Fixer | Remote-Ready",
    image: "https://static.wixstatic.com/media/0b2ab67fc74f4858bfc215cfcb90ff1a.jpg/v1/fill/w_495,h_514,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0b2ab67fc74f4858bfc215cfcb90ff1a.jpg", // Replace with your actual image path
    paragraphs: [
      "Full-time digital marketer, content strategist, and branding enthusiast — part-time skincare nerd. I design marketing funnels customized to the real needs of businesses, big or small. In-depth research and tried-and-true practices are my means to raising brand exposure, generating high-value leads, and maximizing revenue. From managing multi-channel campaigns to leading remote teams and creating digital content across various industries, I blend creativity, data, and technology to deliver impact. I've collaborated with financial firms, beauty brands, retail companies, and edtech platforms while keeping user needs and business goals in mind. Each campaign and piece of content I create is closely coordinated with designers, developers, and cross-functional teams. A solid understanding of the interconnectedness of content, campaign components, and analytics enables me to spot the golden triad to elevate performance and get the most bang for the buck.",
    ],
    tagline:
      "I believe in strategic simplicity, seamless execution, and the power of a well-optimized funnel to drive real results.",
  };

  return (
    <div className="flex flex-col items-center">
      {/* Header */}
      <div className="w-full bg-[#EF958A] py-8 flex justify-center">
        <h1 className="text-5xl font-extrabold tracking-wide text-black uppercase">
          {data.title}
        </h1>
      </div>

      {/* Subheading */}
      <p className="mt-8 text-center text-gray-700 whitespace-pre-line">
        {data.subheading}
      </p>

      {/* Content */}
      <div className="mt-8 flex flex-col md:flex-row items-center max-w-4xl px-4">
        {/* Image */}
        <img
          src={data.image}
          alt="Team working together"
          className="w-full md:w-1/2 object-cover rounded shadow-md"
        />

        {/* Text */}
        <div className="mt-6 md:mt-0 md:ml-8 text-gray-700 text-justify space-y-4">
          {data.paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>

      {/* Tagline */}
      <p className="mt-8 mb-12 text-center text-lg font-medium text-gray-800 max-w-3xl px-4">
        {data.tagline}
      </p>
    </div>
  );
}
