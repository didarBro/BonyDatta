// export default function About() {
//   const data = {
//     title: "WHO AM I?",
//     subheading:
//       "Photo- Growth & Brand Marketing Pro | Full-Funnel Fixer | Remote-Ready",
//     video: "/video/about.mp4",
//     paragraphs: [
//       "Full-time digital marketer, content strategist, and branding enthusiast — part-time skincare nerd.",

//       "I design marketing funnels customized to the real needs of businesses, big or small. In-depth research and tried-and-true practices are my means to raising brand exposure, generating high-value leads, and maximizing revenue.",

//       "From managing multi-channel campaigns to leading remote teams and creating digital content across various industries, I blend creativity, data, and technology to deliver impact. I've collaborated with financial firms, beauty brands, retail companies, and edtech platforms while keeping user needs and business goals in mind.",

//       "Each campaign and piece of content I create is closely coordinated with designers, developers, and cross-functional teams. A solid understanding of the interconnectedness of content, campaign components, and analytics enables me to spot the golden triad to elevate performance and get the most bang for the buck.",
//     ],
//     tagline:
//       "I believe in strategic simplicity, seamless execution, and the power of a well-optimized funnel to drive real results.",
//   };

//   return (
//     <div className="flex flex-col items-center">
//       {/* Header */}
//       <div className="w-full bg-[#EF958A] py-10 flex justify-center">
//         <h1
//           className="text-5xl font-extrabold tracking-wide text-black uppercase"
//           style={{ transform: "scaleY(1.4)" }}
//         >
//           {data.title}
//         </h1>
//       </div>

//       {/* Subheading */}
//       <div className="text-center mb-8 mt-8">
//         <p className="text-2xl font-light text-gray-800 leading-relaxed">
//           {data.subheading}
//         </p>
//       </div>

//       {/* Content */}
//       <div className="flex flex-col md:flex-row items-center max-w-4xl px-4">
//         {/* Video */}
//         <video
//           src={data.video}
//           autoPlay
//           muted
//           defaultMuted
//           loop
//           playsInline
//           style={{ height: "450px" }}
//           className="w-full md:w-1/2 object-cover rounded shadow-md"
//         />

//         {/* Text */}
//         <div className="mt-6 md:mt-0 md:ml-8 text-gray-700 text-justify space-y-6">
//           {data.paragraphs.map((para, index) => (
//             <p key={index}>{para}</p>
//           ))}
//         </div>
//       </div>

//       {/* Tagline Section */}
//       <div className="mt-10 mb-10 text-center">
//         <div className="border-t border-gray-200 pt-12">
//           <blockquote className="text-xl font-medium text-gray-800 italic max-w-4xl mx-auto leading-relaxed">
//             "{data.tagline}"
//           </blockquote>
//         </div>
//       </div>
//     </div>
//   );
// }


export default function About() {
  const data = {
    title: "WHO AM I ?",
    subheading:
      "Photo- Growth & Brand Marketing Pro | Full-Funnel Fixer | Remote-Ready",
    video: "/video/about.mp4",
    paragraphs: [
      "Full-time digital marketer, content strategist, and branding enthusiast & part-time skincare nerd.",
      "If your business is online (and it should be), I help you own the space—from strategy to full-scale execution across all major platforms.",
      "I design marketing funnels customized to the real needs of businesses, big or small. From managing multi-channel campaigns to leading remote teams and creating digital content across various industries, I blend creativity, data, and technology to deliver impact. I've collaborated with financial firms, beauty brands, retail companies, and edtech platforms while keeping user needs and business goals in mind. I don't just post pretty content. I build conversion-ready funnels: Strategy → Design → Publishing → Paid Ads → Email Campaigns. A solid understanding of the interconnectedness of content, campaign components, and analytics enables me to spot the golden triad to elevate performance and get the most bang for the buck.",
    ],
    tagline:
      "I believe in strategic simplicity, seamless execution, and the power of a well-optimized funnel to drive real results.",
  };

  return (
    <div className="flex flex-col items-center">
      {/* Header */}
      <div className="w-full bg-[#EF958A] py-10 flex justify-center"
        style={{
          fontFamily: "impact, impact-w01-2010, sans-serif",
          fontSize: "70px",
          fontWeight: 700,
          lineHeight: "normal",
          color: "rgb(34,34,34)",
        }}>
        <h1
          className="text-5xl font-extrabold tracking-wide text-black uppercase"
          style={{ transform: "scaleY(1.4)" }}
        >
          {data.title}
        </h1>
      </div>

      {/* Subheading */}
      <div className="text-center mb-8 mt-8"
      style={{
          fontFamily: "libre baskerville, serif",
          fontSize: "18px",
          fontWeight: 400,
          lineHeight: "27px",
          color: "rgb(34,34,34)",
        }}>
        <p className="text-2xl font-light text-gray-800 leading-relaxed">
          {data.subheading}
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-start max-w-4xl px-4 gap-8 w-full">
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
        <div className="flex-1 h-full flex flex-col justify-between text-gray-700 text-justify space-y-5"
        style={{
          fontFamily: "libre baskerville, serif",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "27px",
          color: "rgb(34,34,34)",
        }}>
          {data.paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>

      {/* Tagline Section */}
      <div className="mt-10 mb-10 text-center">
        <div className="border-t border-gray-200 pt-12">
          <blockquote className="text-xl font-medium text-gray-800 italic max-w-4xl mx-auto leading-relaxed">
            "{data.tagline}"
          </blockquote>
        </div>
      </div>
    </div>
  );
}
