// import { useEffect, useState } from "react";

// const slides = [
//     {
//         id: 1,
//         bg: "bg-teal-300",
//         heading: "PLANNING",
//         subheading: "We Do",
//         textColor: "text-black",
//     },
//     {
//         id: 2,
//         bg: "bg-yellow-300",
//         heading: "STRATEGY",
//         subheading: "We Have",
//         textColor: "text-gray-700",
//     },
//     {
//         id: 3,
//         bg: "bg-red-300",
//         heading: "RESULTS",
//         subheading: "We Show",
//         textColor: "text-black",
//     },
// ];

// export default function Portfolio() {
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIndex((prevIndex) => (prevIndex + 1) % slides.length);
//         }, 4000);
//         return () => clearInterval(interval);
//     }, []);

//     const { bg, heading, subheading, textColor } = slides[index];

//     const scrollToSection = (sectionId) => {
//         const el = document.getElementById(sectionId);
//         if (el) el.scrollIntoView({ behavior: "smooth" });
//     };

//     return (
//         <div className="font-sans">
//             {/* Hero Section */}
//             <div className={`w-full h-screen flex items-center justify-center transition-all duration-1000 ${bg}`}>
//                 <div className="w-full max-w-5xl px-6">
//                     <p className={`text-xl md:text-2xl font-serif mb-4 text-left ${textColor}`}>{subheading}</p>
//                     <h1 className={`text-7xl md:text-9xl font-extrabold tracking-widest text-left ${textColor}`}>{heading}</h1>
//                     <div className="mt-8 flex justify-end">
//                         <button
//                             onClick={() => scrollToSection("portfolio")}
//                             className="relative group text-lg font-semibold text-black"
//                         >
//                             View Our Work
//                             <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-current after:content-[''] after:absolute after:right-0 after:top-1/2 after:translate-y-[-50%] after:border-[6px] after:border-transparent after:border-l-current"></span>
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Home Section */}
//             <section id="home" className="min-h-screen bg-white flex items-center justify-center py-20">
//                 <div className="max-w-4xl mx-auto px-6 text-center">
//                     <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">Hi, I'm Labony Datta</h2>
//                     <p className="text-xl md:text-2xl text-gray-600 mb-8 italic">Strategic Marketing Leader | Growth Architect | Content & Performance Pro</p>
//                     <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
//                         With over a decade of shaping brands, optimizing funnels, and driving performance, I help businesses translate big-picture strategy into real-world results. From content that clicks to campaigns that convert—I build marketing engines that scale.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                         <button 
//                             onClick={() => scrollToSection("portfolio")}
//                             className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors"
//                         >
//                             👉 Explore my work
//                         </button>
//                         <button 
//                             onClick={() => scrollToSection("contact")}
//                             className="border-2 border-black text-black px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white transition-colors"
//                         >
//                             Let's connect
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             {/* About Section */}
//             <section id="about" className="min-h-screen bg-gray-50 flex items-center py-20">
//                 <div className="max-w-5xl mx-auto px-6">
//                     <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-12">Bringing Vision to Market</h2>
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div>
//                             <p className="text-lg text-gray-700 leading-relaxed mb-6">
//                                 I'm Labony Datta—a seasoned marketing strategist with 10+ years of experience building high-impact campaigns across Australia and Bangladesh. I specialize in performance marketing, growth strategy, content leadership, and brand transformation.
//                             </p>
//                             <p className="text-lg text-gray-700 leading-relaxed mb-6">
//                                 Whether managing global campaigns, leading remote teams, or crafting content across digital ecosystems, I combine creativity, data, and tech to drive real results. I've worked with financial firms, beauty brands, retail, and edtech, always keeping the user at the center and business goals in focus.
//                             </p>
//                             <p className="text-lg text-gray-700 leading-relaxed">
//                                 I believe in strategic simplicity, cross-functional collaboration, and the power of a well-optimized funnel.
//                             </p>
//                         </div>
//                         <div className="bg-white p-8 shadow-lg">
//                             <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Stats</h3>
//                             <div className="space-y-4">
//                                 <div className="flex justify-between items-center">
//                                     <span className="text-gray-600">Experience</span>
//                                     <span className="font-semibold">10+ Years</span>
//                                 </div>
//                                 <div className="flex justify-between items-center">
//                                     <span className="text-gray-600">Countries</span>
//                                     <span className="font-semibold">Australia & Bangladesh</span>
//                                 </div>
//                                 <div className="flex justify-between items-center">
//                                     <span className="text-gray-600">Specialization</span>
//                                     <span className="font-semibold">Performance Marketing</span>
//                                 </div>
//                                 <div className="flex justify-between items-center">
//                                     <span className="text-gray-600">Focus</span>
//                                     <span className="font-semibold">Growth & Strategy</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Portfolio Section */}
//             <section id="portfolio" className="min-h-screen bg-white py-20">
//                 <div className="max-w-6xl mx-auto px-6">
//                     <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Work / Portfolio</h2>
//                     <p className="text-xl text-gray-600 mb-16">Selected Projects & Roles</p>
                    
//                     <div className="space-y-12">
//                         {/* Project 1 */}
//                         <div className="border-l-4 border-teal-400 pl-8 py-6 bg-gray-50">
//                             <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
//                                 <div>
//                                     <h3 className="text-2xl font-bold text-gray-900">Meezan Wealth Management, Australia</h3>
//                                     <p className="text-lg text-gray-600">Marketing Manager | 2024–2025</p>
//                                 </div>
//                                 <span className="text-sm text-gray-500 mt-2 md:mt-0">(Remote)</span>
//                             </div>
//                             <ul className="space-y-2 text-gray-700">
//                                 <li className="flex items-start">
//                                     <span className="text-teal-500 mr-2">•</span>
//                                     Increased LinkedIn engagement by 70%
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="text-teal-500 mr-2">•</span>
//                                     Revamped the company site, reducing bounce rate by 20%
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="text-teal-500 mr-2">•</span>
//                                     Produced 200+ branded visual assets & campaign content
//                                 </li>
//                             </ul>
//                         </div>

//                         {/* Project 2 */}
//                         <div className="border-l-4 border-yellow-400 pl-8 py-6 bg-gray-50">
//                             <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
//                                 <div>
//                                     <h3 className="text-2xl font-bold text-gray-900">Finance House Group, Australia</h3>
//                                     <p className="text-lg text-gray-600">Digital Marketing Manager | 2022–2023</p>
//                                 </div>
//                                 <span className="text-sm text-gray-500 mt-2 md:mt-0">(Remote)</span>
//                             </div>
//                             <ul className="space-y-2 text-gray-700">
//                                 <li className="flex items-start">
//                                     <span className="text-yellow-500 mr-2">•</span>
//                                     Ran $40K/month ad campaigns generating $520K/month revenue
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="text-yellow-500 mr-2">•</span>
//                                     Brought in 18K+ unique monthly SEO visitors
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="text-yellow-500 mr-2">•</span>
//                                     Built a scalable content creation workflow
//                                 </li>
//                             </ul>
//                         </div>

//                         {/* Project 3 */}
//                         <div className="border-l-4 border-red-400 pl-8 py-6 bg-gray-50">
//                             <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
//                                 <div>
//                                     <h3 className="text-2xl font-bold text-gray-900">Bio-Xin Cosmeceuticals</h3>
//                                     <p className="text-lg text-gray-600">Content Manager | 2020–2021</p>
//                                 </div>
//                             </div>
//                             <ul className="space-y-2 text-gray-700">
//                                 <li className="flex items-start">
//                                     <span className="text-red-500 mr-2">•</span>
//                                     Developed brand strategy from scratch
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="text-red-500 mr-2">•</span>
//                                     Built an online audience of 200K+ followers
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>

//                     <div className="mt-12 text-center">
//                         <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors italic">
//                             See full experience on LinkedIn →
//                         </a>
//                     </div>
//                 </div>
//             </section>

//             {/* Services Section */}
//             <section id="services" className="min-h-screen bg-gray-900 text-white py-20">
//                 <div className="max-w-5xl mx-auto px-6">
//                     <h2 className="text-4xl md:text-6xl font-bold mb-4">Services</h2>
//                     <p className="text-xl text-gray-300 mb-16">What I Can Do For You</p>
                    
//                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         <div className="bg-gray-800 p-6 hover:bg-gray-700 transition-colors">
//                             <div className="text-2xl mb-4">🔹</div>
//                             <h3 className="text-xl font-semibold mb-2">Strategic Growth Planning</h3>
//                         </div>
                        
//                         <div className="bg-gray-800 p-6 hover:bg-gray-700 transition-colors">
//                             <div className="text-2xl mb-4">🔹</div>
//                             <h3 className="text-xl font-semibold mb-2">Brand & Funnel Optimization</h3>
//                         </div>
                        
//                         <div className="bg-gray-800 p-6 hover:bg-gray-700 transition-colors">
//                             <div className="text-2xl mb-4">🔹</div>
//                             <h3 className="text-xl font-semibold mb-2">Paid Media Campaigns</h3>
//                             <p className="text-gray-400 text-sm">(Google, Meta, YouTube)</p>
//                         </div>
                        
//                         <div className="bg-gray-800 p-6 hover:bg-gray-700 transition-colors">
//                             <div className="text-2xl mb-4">🔹</div>
//                             <h3 className="text-xl font-semibold mb-2">SEO & Content Strategy</h3>
//                         </div>
                        
//                         <div className="bg-gray-800 p-6 hover:bg-gray-700 transition-colors">
//                             <div className="text-2xl mb-4">🔹</div>
//                             <h3 className="text-xl font-semibold mb-2">Marketing Automation & CRM Setup</h3>
//                         </div>
                        
//                         <div className="bg-gray-800 p-6 hover:bg-gray-700 transition-colors">
//                             <div className="text-2xl mb-4">🔹</div>
//                             <h3 className="text-xl font-semibold mb-2">Remote Team Leadership & Collaboration</h3>
//                         </div>
//                     </div>
                    
//                     <div className="mt-16 text-center">
//                         <p className="text-lg text-gray-300 mb-8">
//                             Need a partner who gets the numbers <em>and</em> the narrative? Let's chat.
//                         </p>
//                         <button 
//                             onClick={() => scrollToSection("contact")}
//                             className="bg-white text-gray-900 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
//                         >
//                             Get In Touch
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             {/* Contact Section */}
//             <section id="contact" className="min-h-screen bg-white flex items-center py-20">
//                 <div className="max-w-4xl mx-auto px-6 w-full">
//                     <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Contact</h2>
//                     <p className="text-xl text-gray-600 mb-16">Let's Build Something Meaningful</p>
                    
//                     <div className="grid md:grid-cols-2 gap-12">
//                         <div className="space-y-8">
//                             <div className="flex items-center space-x-4">
//                                 <div className="text-2xl">📧</div>
//                                 <div>
//                                     <p className="text-gray-600">Email</p>
//                                     <a href="mailto:labonydatta@gmail.com" className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition-colors">
//                                         labonydatta@gmail.com
//                                     </a>
//                                 </div>
//                             </div>
                            
//                             <div className="flex items-center space-x-4">
//                                 <div className="text-2xl">📞</div>
//                                 <div>
//                                     <p className="text-gray-600">Phone</p>
//                                     <a href="tel:+8801782388822" className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition-colors">
//                                         +880 1782 388822
//                                     </a>
//                                 </div>
//                             </div>
                            
//                             <div className="flex items-center space-x-4">
//                                 <div className="text-2xl">🔗</div>
//                                 <div>
//                                     <p className="text-gray-600">LinkedIn</p>
//                                     <a href="#" className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition-colors">
//                                         Connect with me
//                                     </a>
//                                 </div>
//                             </div>
                            
//                             <div className="flex items-center space-x-4">
//                                 <div className="text-2xl">🌐</div>
//                                 <div>
//                                     <p className="text-gray-600">Website</p>
//                                     <a href="#" className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition-colors">
//                                         bonydatta.com
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
                        
//                         <div className="bg-gray-50 p-8">
//                             <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to collaborate?</h3>
//                             <p className="text-gray-700 mb-6">
//                                 Whether you need a strategic partner for growth, someone to optimize your marketing funnel, or a leader to drive your next campaign—I'm here to help turn your vision into measurable results.
//                             </p>
//                             <div className="space-y-4">
//                                 <button className="w-full bg-black text-white py-3 px-6 font-semibold hover:bg-gray-800 transition-colors">
//                                     Send me an email
//                                 </button>
//                                 <button className="w-full border-2 border-black text-black py-3 px-6 font-semibold hover:bg-black hover:text-white transition-colors">
//                                     Schedule a call
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="bg-gray-900 text-white py-8">
//                 <div className="max-w-5xl mx-auto px-6 text-center">
//                     <p className="text-gray-400">© 2025 Labony Datta. Strategic Marketing Leader.</p>
//                 </div>
//             </footer>
//         </div>
//     );
// }


import { useEffect, useState } from "react";

const slides = [
    {
        id: 1,
        bg: "bg-gradient-to-br from-teal-400 via-teal-300 to-teal-500",
        heading: "PLANNING",
        subheading: "We Do",
        textColor: "text-white",
        accent: "text-teal-900"
    },
    {
        id: 2,
        bg: "bg-gradient-to-br from-yellow-400 via-yellow-300 to-orange-400",
        heading: "STRATEGY",
        subheading: "We Have",
        textColor: "text-gray-900",
        accent: "text-yellow-900"
    },
    {
        id: 3,
        bg: "bg-gradient-to-br from-red-400 via-red-300 to-pink-400",
        heading: "RESULTS",
        subheading: "We Show",
        textColor: "text-white",
        accent: "text-red-900"
    },
];

export default function Portfolio() {
    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(prev => ({
                        ...prev,
                        [entry.target.id]: entry.isIntersecting
                    }));
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const { bg, heading, subheading, textColor, accent } = slides[index];

    const scrollToSection = (sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="font-sans">
            <style jsx global>{`
                body, html {
                    margin: 0;
                    padding: 0;
                    overflow-x: hidden;
                }
                .hero-full-width {
                    width: 100vw;
                    position: relative;
                    left: 50%;
                    right: 50%;
                    margin-left: -50vw;
                    margin-right: -50vw;
                }
            `}</style>
            {/* Hero Section - Full Width */}
            <div className={`hero-full-width h-screen flex items-center justify-center transition-all duration-1000 ${bg} relative overflow-hidden`}>
                {/* Animated background elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/15 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                </div>
                
                <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="transform transition-all duration-1000" key={index}>
                        <p className={`text-xl sm:text-2xl md:text-3xl font-serif mb-4 text-left ${accent} animate-fadeInUp`}>
                            {subheading}
                        </p>
                        <h1 className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-extrabold tracking-widest text-left ${textColor} leading-none animate-slideInLeft`}>
                            {heading}
                        </h1>
                        <div className="mt-8 flex justify-end animate-fadeInUp" style={{animationDelay: '0.5s'}}>
                            <button
                                onClick={() => scrollToSection("portfolio")}
                                className={`relative group text-lg font-semibold ${textColor} hover:scale-105 transition-all duration-300`}
                            >
                                View Our Work
                                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-current after:content-[''] after:absolute after:right-0 after:top-1/2 after:translate-y-[-50%] after:border-[6px] after:border-transparent after:border-l-current group-hover:after:translate-x-2 after:transition-transform after:duration-300"></span>
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className={`w-6 h-10 border-2 ${textColor.replace('text-', 'border-')} rounded-full flex justify-center`}>
                        <div className={`w-1 h-3 ${bg.includes('teal') ? 'bg-white' : bg.includes('yellow') ? 'bg-gray-900' : 'bg-white'} rounded-full mt-2 animate-pulse`}></div>
                    </div>
                </div>
            </div>

            {/* Home Section */}
            <section id="home" className={`min-h-screen bg-white flex items-center justify-center py-20 transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 animate-fadeInUp">
                        Hi, I'm <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">Labony Datta</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 italic animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                        Strategic Marketing Leader | Growth Architect | Content & Performance Pro
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                        With over a decade of shaping brands, optimizing funnels, and driving performance, I help businesses translate big-picture strategy into real-world results. From content that clicks to campaigns that convert—I build marketing engines that scale.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                        <button 
                            onClick={() => scrollToSection("portfolio")}
                            className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            👉 Explore my work
                        </button>
                        <button 
                            onClick={() => scrollToSection("contact")}
                            className="border-2 border-black text-black px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
                        >
                            Let's connect
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className={`min-h-screen bg-gray-50 flex items-center py-20 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-12 animate-slideInLeft">
                        Bringing Vision to <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">Market</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 animate-slideInLeft" style={{animationDelay: '0.2s'}}>
                            <p className="text-lg text-gray-700 leading-relaxed transform hover:scale-[1.02] transition-transform duration-300">
                                I'm Labony Datta—a seasoned marketing strategist with 10+ years of experience building high-impact campaigns across Australia and Bangladesh. I specialize in performance marketing, growth strategy, content leadership, and brand transformation.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed transform hover:scale-[1.02] transition-transform duration-300">
                                Whether managing global campaigns, leading remote teams, or crafting content across digital ecosystems, I combine creativity, data, and tech to drive real results. I've worked with financial firms, beauty brands, retail, and edtech, always keeping the user at the center and business goals in focus.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed transform hover:scale-[1.02] transition-transform duration-300">
                                I believe in strategic simplicity, cross-functional collaboration, and the power of a well-optimized funnel.
                            </p>
                        </div>
                        <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slideInRight" style={{animationDelay: '0.4s'}}>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Stats</h3>
                            <div className="space-y-4">
                                {[
                                    { label: "Experience", value: "10+ Years" },
                                    { label: "Countries", value: "Australia & Bangladesh" },
                                    { label: "Specialization", value: "Performance Marketing" },
                                    { label: "Focus", value: "Growth & Strategy" }
                                ].map((stat, i) => (
                                    <div key={i} className="flex justify-between items-center hover:bg-gray-50 p-2 rounded transition-colors duration-200" style={{animationDelay: `${0.1 * i}s`}}>
                                        <span className="text-gray-600">{stat.label}</span>
                                        <span className="font-semibold">{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className={`min-h-screen bg-white py-20 transition-all duration-1000 ${isVisible.portfolio ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 animate-fadeInUp">
                        Work / <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">Portfolio</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-16 animate-fadeInUp" style={{animationDelay: '0.1s'}}>Selected Projects & Roles</p>
                    
                    <div className="space-y-12">
                        {[
                            {
                                company: "Meezan Wealth Management, Australia",
                                role: "Marketing Manager | 2024–2025",
                                remote: "(Remote)",
                                color: "teal",
                                achievements: [
                                    "Increased LinkedIn engagement by 70%",
                                    "Revamped the company site, reducing bounce rate by 20%",
                                    "Produced 200+ branded visual assets & campaign content"
                                ]
                            },
                            {
                                company: "Finance House Group, Australia",
                                role: "Digital Marketing Manager | 2022–2023",
                                remote: "(Remote)",
                                color: "yellow",
                                achievements: [
                                    "Ran $40K/month ad campaigns generating $520K/month revenue",
                                    "Brought in 18K+ unique monthly SEO visitors",
                                    "Built a scalable content creation workflow"
                                ]
                            },
                            {
                                company: "Bio-Xin Cosmeceuticals",
                                role: "Content Manager | 2020–2021",
                                remote: "",
                                color: "red",
                                achievements: [
                                    "Developed brand strategy from scratch",
                                    "Built an online audience of 200K+ followers"
                                ]
                            }
                        ].map((project, i) => (
                            <div key={i} className={`border-l-4 border-${project.color}-400 pl-8 py-6 bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:shadow-md animate-slideInUp transform hover:scale-[1.02]`} style={{animationDelay: `${0.2 * i}s`}}>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors duration-200">{project.company}</h3>
                                        <p className="text-lg text-gray-600">{project.role}</p>
                                    </div>
                                    {project.remote && (
                                        <span className="text-sm text-gray-500 mt-2 md:mt-0 bg-gray-200 px-2 py-1 rounded">{project.remote}</span>
                                    )}
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                    {project.achievements.map((achievement, j) => (
                                        <li key={j} className="flex items-start hover:text-gray-900 transition-colors duration-200">
                                            <span className={`text-${project.color}-500 mr-2 text-lg`}>•</span>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center animate-fadeInUp" style={{animationDelay: '0.8s'}}>
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 italic hover:underline">
                            See full experience on LinkedIn →
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className={`min-h-screen bg-gray-900 text-white py-20 transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Services</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-16 animate-fadeInUp" style={{animationDelay: '0.1s'}}>What I Can Do For You</p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Strategic Growth Planning", icon: "🎯" },
                            { title: "Brand & Funnel Optimization", icon: "🔄" },
                            { title: "Paid Media Campaigns", icon: "📊", subtitle: "(Google, Meta, YouTube)" },
                            { title: "SEO & Content Strategy", icon: "📝" },
                            { title: "Marketing Automation & CRM Setup", icon: "⚙️" },
                            { title: "Remote Team Leadership & Collaboration", icon: "👥" }
                        ].map((service, i) => (
                            <div key={i} className="bg-gray-800 p-6 hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fadeInUp transform" style={{animationDelay: `${0.1 * i}s`}}>
                                <div className="text-3xl mb-4 animate-bounce" style={{animationDelay: `${0.2 * i}s`}}>{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                {service.subtitle && (
                                    <p className="text-gray-400 text-sm">{service.subtitle}</p>
                                )}
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-16 text-center animate-fadeInUp" style={{animationDelay: '0.8s'}}>
                        <p className="text-lg text-gray-300 mb-8">
                            Need a partner who gets the numbers <em>and</em> the narrative? Let's chat.
                        </p>
                        <button 
                            onClick={() => scrollToSection("contact")}
                            className="bg-white text-gray-900 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={`min-h-screen bg-white flex items-center py-20 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-4xl mx-auto px-6 w-full">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 animate-fadeInUp">
                        <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Contact</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-16 animate-fadeInUp" style={{animationDelay: '0.1s'}}>Let's Build Something Meaningful</p>
                    
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8 animate-slideInLeft" style={{animationDelay: '0.2s'}}>
                            {[
                                { icon: "📧", label: "Email", value: "labonydatta@gmail.com", href: "mailto:labonydatta@gmail.com" },
                                { icon: "📞", label: "Phone", value: "+880 1782 388822", href: "tel:+8801782388822" },
                                { icon: "🔗", label: "LinkedIn", value: "Connect with me", href: "#" },
                                { icon: "🌐", label: "Website", value: "bonydatta.com", href: "#" }
                            ].map((contact, i) => (
                                <div key={i} className="flex items-center space-x-4 hover:bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:scale-105" style={{animationDelay: `${0.1 * i}s`}}>
                                    <div className="text-2xl animate-bounce" style={{animationDelay: `${0.2 * i}s`}}>{contact.icon}</div>
                                    <div>
                                        <p className="text-gray-600">{contact.label}</p>
                                        <a href={contact.href} className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition-colors duration-300">
                                            {contact.value}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="bg-gray-50 p-8 hover:shadow-lg transition-shadow duration-300 animate-slideInRight" style={{animationDelay: '0.4s'}}>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to collaborate?</h3>
                            <p className="text-gray-700 mb-6">
                                Whether you need a strategic partner for growth, someone to optimize your marketing funnel, or a leader to drive your next campaign—I'm here to help turn your vision into measurable results.
                            </p>
                            <div className="space-y-4">
                                <button className="w-full bg-black text-white py-3 px-6 font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                                    Send me an email
                                </button>
                                <button className="w-full border-2 border-black text-black py-3 px-6 font-semibold hover:bg-black hover:text-white transition-all duration-300 hover:scale-105">
                                    Schedule a call
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <p className="text-gray-400 animate-fadeInUp">© 2025 Labony Datta. Strategic Marketing Leader.</p>
                </div>
            </footer>

            {/* Custom Styles */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                
                .animate-slideInLeft {
                    animation: slideInLeft 0.8s ease-out forwards;
                }
                
                .animate-slideInRight {
                    animation: slideInRight 0.8s ease-out forwards;
                }
                
                .animate-slideInUp {
                    animation: slideInUp 0.8s ease-out forwards;
                }
            `}</style>
        </div>
    );
}