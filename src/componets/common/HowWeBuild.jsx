import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/images/team_working_office.png";

const HowWeBuild = () => {
    return (
        <div className="relative py-24 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="wrapper relative z-10 text-center text-white flex flex-col items-center gap-8">
                <div data-aos="fade-up" className="px-6 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm font-semibold tracking-wider uppercase text-white w-fit">
                    Our Process
                </div>
                <h2 data-aos="fade-up" className="text-4xl md:text-6xl font-bold font-raleway leading-tight max-w-4xl text-white">
                    How We Build
                </h2>
                <p data-aos="fade-up" className="text-gray-200 text-lg md:text-xl font-inter max-w-3xl leading-relaxed">
                    We combine data-driven strategy with agile development to deliver scalable, high-impact solutions. From inception to deployment, our process is transparent, collaborative, and focused on your growth.
                </p>
                <div data-aos="fade-up" className="flex flex-wrap justify-center gap-8 mt-4">
                    {[
                        { title: "Discovery", desc: "Understanding your vision and goals." },
                        { title: "Strategy", desc: "Crafting a roadmap for success." },
                        { title: "Development", desc: "Building with precision and speed." },
                        { title: "Launch", desc: "Deploying and optimizing for growth." }
                    ].map((step, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 max-w-[200px]">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center font-bold text-xl bg-white/5 backdrop-blur-sm">
                                {index + 1}
                            </div>
                            <h4 className="font-bold font-raleway text-lg">{step.title}</h4>
                            <p className="text-sm text-gray-300 font-inter">{step.desc}</p>
                        </div>
                    ))}
                </div>

                <Link to="/contact-us" data-aos="fade-up" className="primary-btn mt-8">
                    Let's Chat
                </Link>
            </div>
        </div>
    );
};

export default HowWeBuild;
