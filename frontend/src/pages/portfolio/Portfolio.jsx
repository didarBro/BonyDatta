import { useEffect, useState } from "react";

const slides = [
    {
        id: 1,
        bg: "bg-teal-300",
        heading: "PLANNING",
        subheading: "We Do",
        textColor: "text-black",
    },
    {
        id: 2,
        bg: "bg-yellow-300",
        heading: "STRATEGY",
        subheading: "We Have",
        textColor: "text-gray-700",
    },
    {
        id: 3,
        bg: "bg-red-300",
        heading: "RESULTS",
        subheading: "We Show",
        textColor: "text-black",
    },
];

export default function Portfolio() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const { bg, heading, subheading, textColor } = slides[index];

    const scrollToSection = (sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="font-sans">
            {/* Hero Section */}
            <div className={`w-full h-screen flex items-center justify-center transition-all duration-1000 ${bg}`}>
                <div className="w-full max-w-5xl px-6">
                    <p className={`text-xl md:text-2xl font-serif mb-4 text-left ${textColor}`}>{subheading}</p>
                    <h1 className={`text-7xl md:text-9xl font-extrabold tracking-widest text-left ${textColor}`}>{heading}</h1>
                    <div className="mt-8 flex justify-end">
                        <button
                            onClick={() => scrollToSection("portfolio")}
                            className="relative group text-lg font-semibold text-black"
                        >
                            View Our Work
                            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-current after:content-[''] after:absolute after:right-0 after:top-1/2 after:translate-y-[-50%] after:border-[6px] after:border-transparent after:border-l-current"></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Home Section */}
            <section id="home" className="min-h-screen bg-white flex items-center justify-center py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">Hi, I'm Labony Datta</h2>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 italic">Strategic Marketing Leader | Growth Architect | Content & Performance Pro</p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
                        With over a decade of shaping brands, optimizing funnels, and driving performance, I help businesses translate big-picture strategy into real-world results. From content that clicks to campaigns that convert—I build marketing engines that scale.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button 
                            onClick={() => scrollToSection("portfolio")}
                            className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors"
                        >
                            👉 Explore my work
                        </button>
                        <button 
                            onClick={() => scrollToSection("contact")}
                            className="border-2 border-black text-black px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white transition-colors"
                        >
                            Let's connect
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="min-h-screen bg-gray-50 flex items-center py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-12">Bringing Vision to Market</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                I'm Labony Datta—a seasoned marketing strategist with 10+ years of experience building high-impact campaigns across Australia and Bangladesh. I specialize in performance marketing, growth strategy, content leadership, and brand transformation.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Whether managing global campaigns, leading remote teams, or crafting content across digital ecosystems, I combine creativity, data, and tech to drive real results. I've worked with financial firms, beauty brands, retail, and edtech, always keeping the user at the center and business goals in focus.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                I believe in strategic simplicity, cross-functional collaboration, and the power of a well-optimized funnel.
                            </p>
                        </div>
                        <div className="bg-white p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Stats</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Experience</span>
                                    <span className="font-semibold">10+ Years</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Countries</span>
                                    <span className="font-semibold">Australia & Bangladesh</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Specialization</span>
                                    <span className="font-semibold">Performance Marketing</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Focus</span>
                                    <span className="font-semibold">Growth & Strategy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="min-h-screen bg-white py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Work / Portfolio</h2>
                    <p className="text-xl text-gray-600 mb-16">Selected Projects & Roles</p>
                    
                    <div className="space-y-12">
                        {/* Project 1 */}
                        <div className="border-l-4 border-teal-400 pl-8 py-6 bg-gray-50">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Meezan Wealth Management, Australia</h3>
                                    <p className="text-lg text-gray-600">Marketing Manager | 2024–2025</p>
                                </div>
                                <span className="text-sm text-gray-500 mt-2 md:mt-0">(Remote)</span>
                            </div>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-teal-500 mr-2">•</span>
                                    Increased LinkedIn engagement by 70%
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-500 mr-2">•</span>
                                    Revamped the company site, reducing bounce rate by 20%
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-500 mr-2">•</span>
                                    Produced 200+ branded visual assets & campaign content
                                </li>
                            </ul>
                        </div>

                        {/* Project 2 */}
                        <div className="border-l-4 border-yellow-400 pl-8 py-6 bg-gray-50">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Finance House Group, Australia</h3>
                                    <p className="text-lg text-gray-600">Digital Marketing Manager | 2022–2023</p>
                                </div>
                                <span className="text-sm text-gray-500 mt-2 md:mt-0">(Remote)</span>
                            </div>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-yellow-500 mr-2">•</span>
                                    Ran $40K/month ad campaigns generating $520K/month revenue
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-500 mr-2">•</span>
                                    Brought in 18K+ unique monthly SEO visitors
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-500 mr-2">•</span>
                                    Built a scalable content creation workflow
                                </li>
                            </ul>
                        </div>

                        {/* Project 3 */}
                        <div className="border-l-4 border-red-400 pl-8 py-6 bg-gray-50">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Bio-Xin Cosmeceuticals</h3>
                                    <p className="text-lg text-gray-600">Content Manager | 2020–2021</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    Developed brand strategy from scratch
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    Built an online audience of 200K+ followers
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors italic">
                            See full experience on LinkedIn →
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="min-h-screen bg-gray-900 text-white py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">Services</h2>
                    <p className="text-xl text-gray-300 mb-16">What I Can Do For You</p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-800 p-6 hover:bg-gray-700 transition-colors">
                            <div className="text-2xl mb-4">🔹</div>
                            <h3 className="text-xl font-semibold mb-2">Strategic Growth Planning</h3>
                        </div>
                        
                        <div className="bg-gray-800 p-6 hover:bg-gray-700 transition-colors">
                            <div className="text-2xl mb-4">🔹</div>
                            <h3 className="text-xl font-semibold mb-2">Brand & Funnel Optimization</h3>
                        </div>
                        
                        <div className="bg-gray-800 p-6 hover:bg-gray-700 transition-colors">
                            <div className="text-2xl mb-4">🔹</div>
                            <h3 className="text-xl font-semibold mb-2">Paid Media Campaigns</h3>
                            <p className="text-gray-400 text-sm">(Google, Meta, YouTube)</p>
                        </div>
                        
                        <div className="bg-gray-800 p-6 hover:bg-gray-700 transition-colors">
                            <div className="text-2xl mb-4">🔹</div>
                            <h3 className="text-xl font-semibold mb-2">SEO & Content Strategy</h3>
                        </div>
                        
                        <div className="bg-gray-800 p-6 hover:bg-gray-700 transition-colors">
                            <div className="text-2xl mb-4">🔹</div>
                            <h3 className="text-xl font-semibold mb-2">Marketing Automation & CRM Setup</h3>
                        </div>
                        
                        <div className="bg-gray-800 p-6 hover:bg-gray-700 transition-colors">
                            <div className="text-2xl mb-4">🔹</div>
                            <h3 className="text-xl font-semibold mb-2">Remote Team Leadership & Collaboration</h3>
                        </div>
                    </div>
                    
                    <div className="mt-16 text-center">
                        <p className="text-lg text-gray-300 mb-8">
                            Need a partner who gets the numbers <em>and</em> the narrative? Let's chat.
                        </p>
                        <button 
                            onClick={() => scrollToSection("contact")}
                            className="bg-white text-gray-900 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="min-h-screen bg-white flex items-center py-20">
                <div className="max-w-4xl mx-auto px-6 w-full">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Contact</h2>
                    <p className="text-xl text-gray-600 mb-16">Let's Build Something Meaningful</p>
                    
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="flex items-center space-x-4">
                                <div className="text-2xl">📧</div>
                                <div>
                                    <p className="text-gray-600">Email</p>
                                    <a href="mailto:labonydatta@gmail.com" className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition-colors">
                                        labonydatta@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <div className="text-2xl">📞</div>
                                <div>
                                    <p className="text-gray-600">Phone</p>
                                    <a href="tel:+8801782388822" className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition-colors">
                                        +880 1782 388822
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <div className="text-2xl">🔗</div>
                                <div>
                                    <p className="text-gray-600">LinkedIn</p>
                                    <a href="#" className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition-colors">
                                        Connect with me
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <div className="text-2xl">🌐</div>
                                <div>
                                    <p className="text-gray-600">Website</p>
                                    <a href="#" className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition-colors">
                                        bonydatta.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-50 p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to collaborate?</h3>
                            <p className="text-gray-700 mb-6">
                                Whether you need a strategic partner for growth, someone to optimize your marketing funnel, or a leader to drive your next campaign—I'm here to help turn your vision into measurable results.
                            </p>
                            <div className="space-y-4">
                                <button className="w-full bg-black text-white py-3 px-6 font-semibold hover:bg-gray-800 transition-colors">
                                    Send me an email
                                </button>
                                <button className="w-full border-2 border-black text-black py-3 px-6 font-semibold hover:bg-black hover:text-white transition-colors">
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
                    <p className="text-gray-400">© 2025 Labony Datta. Strategic Marketing Leader.</p>
                </div>
            </footer>
        </div>
    );
}