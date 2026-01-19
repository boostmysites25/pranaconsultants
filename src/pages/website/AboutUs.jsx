import React from "react";
import {
  aboutUsBanner,

  aboutusintroone,
  aboutusintrotwo,
  aboutUsItems,
  whyChooseUsContent,
} from "../../constant";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import OurServices from "../../componets/website/OurServices";
import Testimonials from "../../componets/common/Testimonials";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Credibility from "../../componets/common/Credibility";

const AboutUs = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        className=" h-[40vh] sm:h-[55vh] md:h-[70vh] relative"
      >
        <img
          src={aboutUsBanner}
          className="object-cover object-[100%_35%] h-full w-full"
          alt=""
        />
        <div className="absolute top-0 w-full h-full bg-black/50"></div>

        {/* <h2 className="font-raleway text-[2.18rem] md:text-7xl font-bold leading-tight text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[10%] text-center">
          About Us
        </h2> */}
        <div className="absolute py-2  top-[40%] left-1/2 -translate-x-1/2 w-full flex flex-col items-center px-3">
          <h1
            data-aos="fade-up"
            className="heading text-white text-center font-raleway text-[2.18rem] md:text-7xl font-bold leading-tight"
          >
            About Us
          </h1>
          {/* <h2 className="font-raleway text-[2.18rem] md:text-7xl font-bold leading-tight text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[10%] text-center">
          {page}
        </h2> */}
          <div
            data-aos="fade-up"
            className="mt-5 text-base sm:text-xl font-medium px-3 py-2 w-fit rounded-full  flex flex-wrap justify-center text-white items-center gap-1 sm:gap-2"
          >
            <Link to="/">Home</Link>
            <IoIosArrowForward />
            <h4 className="text-white">About us</h4>
            {/* <IoIosArrowForward /> */}
            {/* <p>{title}</p> */}
          </div>
        </div>
      </div>
      <div className="py-20 text-gray-900 text-center">
        <section className="px-4 py-12 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div data-aos="fade-right" className="text-left flex flex-col gap-8">
              <div className="gradient-rounded-text-box w-fit">Our Narrative</div>
              <h1 className="text-4xl md:text-5xl font-bold font-raleway leading-tight text-gray-900">
                Pioneering Innovation through Intelligent Technologies
              </h1>
              <p className="text-lg leading-relaxed text-gray-600 font-inter">
                Prana Consultants specializes in engineering transformative IT solutions powered by sophisticated artificial intelligence.
                Our expertise lies in decoding complex challenges and delivering tailored, AI-centric services that ensure businesses thrive in a technology-first era.
                With a dedicated team of elite developers, data scientists, and strategists, we are redefining the trajectory of IT and unlocking the true potential of intelligent systems.
              </p>
            </div>

            <div className="relative h-[400px] w-full" data-aos="fade-left">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl z-10 hover:scale-[1.02] transition-transform duration-500">
                <img src={aboutusintroone} className="w-full h-full object-cover" alt="Circuit" />
              </div>
              <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-xl border-4 border-white hover:scale-[1.02] transition-transform duration-500">
                <img src={aboutusintrotwo} className="w-full h-full object-cover" alt="Team" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 mt-12">
          <div className="wrapper mx-auto px-4">
            <div className="text-center mb-16 flex flex-col items-center gap-4">
              <div className="gradient-rounded-text-box">About Us</div>
              <h3 className="text-4xl font-bold font-raleway text-gray-900">
                The Science Behind Our Solutions
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
                We initiate every project with a rigorous analytical assessment to map your specific requirements, operational challenges, and strategic objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aboutUsItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transform transition-all duration-300 hover:-translate-y-2 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="overflow-hidden h-64">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 text-left">
                    <h4 className="text-xl font-bold mb-3 font-raleway text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed font-inter">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <UnlockEfficiency />
        {/* <div className="wrapper mt-[5rem]">
          <h2 data-aos="fade-up" className="heading-2">
            Why Choose Prana Consultants?
          </h2>
          <ul className="mt-[2rem] flex flex-col gap-3 list-disc list-outside text-start">
            {whyChooseUsContent.map((item) => (
              <li data-aos="fade-up" key={item.id} className="text-primary">
                <span className="font-raleway font-bold">{item.title}:</span>{" "}
                <span className="desc text-primarytextcolor ml-1">
                  {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </div> */}
        <section className="relative py-6 sm:py-16 px-4 md:py-12 ">
          {/* <div>
            <ReactPlayer
              url={servicepagebanner}
              loop
              muted
              width="100vw"
              height="100%"
              playsinline
              playing
              className="react-player left-0 top-0 absolute object-cover h-full w-full"
            />
          </div> */}
          <div className="max-w-7xl mx-auto">
            <h2
              data-aos="fade-up"
              className="heading-2 font-bold text-center mb-12 text-black"
            >
              Why Partner with Prana?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {whyChooseUsContent.map((feature, index) => (
                <div
                  data-aos="fade-up"
                  key={index}
                  className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                      {feature.img}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-orange-600">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <OurServices length={3} />
      <Credibility />
      <Testimonials />
    </>
  );
};

export default AboutUs;
