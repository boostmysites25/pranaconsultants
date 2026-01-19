import React from "react";
import { appDevelopmentServices, webDevelopmentServices } from "../../constant";

const LandingServices = ({ page }) => {
  const services =
    page === "web-development"
      ? webDevelopmentServices
      : appDevelopmentServices;
  return (
    <div id="services" className="py-20 bg-gray-50 relative">
      <div className="wrapper flex flex-col items-center gap-8 z-10 text-gray-900">
        <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
          {page === "web-development" ? "Web" : "App"} Engineering Expertise
        </div>
        <h1 data-aos="fade-up" className="text-4xl md:text-5xl font-bold font-raleway text-center max-w-3xl leading-tight">
          {page === "web-development" &&
            "Architecting Intelligent Web Solutions to Redefine Your Digital Identity"}
          {page === "app-development" &&
            "Pioneering Intelligent Mobile Ecosystems for the Modern World"}
        </h1>
        <p data-aos="fade-up" className="text-center max-w-2xl text-lg text-gray-600 font-inter">
          {page === "web-development" &&
            "We build high-performance, secure, and scalable web architectures that serve as the foundation for your business's digital evolution."}
          {page === "app-development" &&
            "We engage users with native and cross-platform mobile applications that combine fluid aesthetics with robust, AI-driven functionality."}
        </p>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 mx-auto w-full"
        >
          {services.map((item, index) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 mb-6">
                {item.img}
              </div>
              <h5 className="font-semibold text-2xl font-raleway text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h5>
              <p className="text-gray-600 font-inter leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingServices;
