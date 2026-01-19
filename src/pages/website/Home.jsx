import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../componets/landingPages/Contact";
import aboutUsImg from "../../assets/images/aboutuscontent.jpg";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
import ReactPlayer from "react-player";
import { homeBannerVideo } from "../../constant";
import OurServices from "../../componets/website/OurServices";

import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import Testimonials from "../../componets/common/Testimonials";
import Faqs from "../../componets/common/Faqs";
import Credibility from "../../componets/common/Credibility";
import CommonProject from "../../componets/website/CommonProject";
import HowWeBuild from "../../componets/common/HowWeBuild";

const Home = () => {
  return (
    <>
      <div id="banner" className="h-screen relative overflow-hidden">
        <ReactPlayer
          url={homeBannerVideo}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          className="absolute top-0 left-0"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/60 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)]"></div>
        <div className="pt-20 wrapper flex items-center justify-center h-full relative z-10 text-white text-center">
          <div
            data-aos="fade-up"
            className="flex flex-col items-center gap-8 max-w-4xl"
          >
            <div className="px-6 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm font-semibold tracking-wider uppercase">
              Enterprise Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-raleway leading-tight tracking-tight">
              Your <span className="text-primary">AI</span> Strategic Partner in <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Intelligent Digital Evolution</span>
            </h1>
            <p className="font-inter text-lg text-gray-100 leading-relaxed max-w-2xl">
              Prana Consultants engineers cutting-edge, AI-driven IT ecosystems tailored to the complex needs of modern enterprises.
              We drive efficiency, sustainable growth, and continuous innovation.
            </p>
            <div className="flex gap-4 mt-4">
              <Link to="/contact-us" className="primary-btn">
                Partner With Us
              </Link>
              <Link to="/services" className="white-outline-btn">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
        <div className="wrapper relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right" className="flex flex-col gap-8">
            <div className="gradient-rounded-text-box w-fit">About Us</div>
            <h2 className="text-4xl md:text-5xl font-bold font-raleway text-gray-900 leading-tight">
              Redefining Operations with Sophisticated AI Architectures
            </h2>
            <p className="font-inter text-gray-600 text-lg leading-relaxed">
              Welcome to Prana Consultants—where technology converges with strategy to propel your success.
              We specialize in architecting powerful digital experiences and delivering solutions that decode complexity.
              From bespoke mobile and web engineering to advanced AI and data intelligence, we empower you to unlock new potential and dominate the digital landscape.
            </p>
            <div className="flex gap-4">
              <Link to="/contact-us" className="primary-btn">Contact Us</Link>
              <Link to="/about-us" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">Learn More <span className="text-xl">→</span></Link>
            </div>
          </div>
          <div data-aos="fade-left" className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6 duration-300"></div>
            <img src={aboutUsImg} className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] transform transition-transform group-hover:-translate-y-2 duration-300" alt="About Us" />
          </div>
        </div>
      </section>

      <OurServices length={3} />

      <section className="py-24 bg-gray-50 relative">
        <div className="wrapper flex flex-col items-center text-center gap-8 relative z-10">
          <div className="gradient-rounded-text-box">Our Core Identity</div>
          <h2 className="text-4xl md:text-5xl font-bold font-raleway text-gray-900 max-w-4xl leading-tight">
            Resilient AI-Infused IT Infrastructure for Strategic Growth
          </h2>
          <p className="font-inter text-gray-600 text-lg leading-relaxed max-w-3xl">
            At Prana Consultants, we recognize that your digital presence is the bedrock of your brand.
            Our development capabilities transcend the ordinary, integrating AI optimization for peak performance
            and actionable data insights to accelerate business velocity.
          </p>
        </div>
      </section>

      <CommonProject />
      <WhyChooseUs />
      <HowWeBuild />
      <UnlockEfficiency />
      <Testimonials />
      <Credibility />
      <Faqs />

      <div className="pt-10">
        <Contact />
      </div>
    </>
  );
};

export default Home;
