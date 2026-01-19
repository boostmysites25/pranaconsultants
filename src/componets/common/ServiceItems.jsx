import React from "react";
import { allServices } from "../../constant";
import { Link } from "react-router-dom";
import { PiCaretDoubleRightBold } from "react-icons/pi";


const ServiceItems = () => {
  return (
    <div className="py-[5rem] bg-backgroundcolor text-primarytextcolor">
      <div
        data-aos="fade-up"
        className="wrapper flex flex-col text-center gap-5 items-center"
      >
        <div data-aos="fade-up" className="gradient-rounded-text-box mb-2">
          Our Expertise
        </div>
        <h2 data-aos="fade-up" className="heading-2 max-w-[50rem]">
          Architecting the Future with Intelligence
        </h2>
        <p data-aos="fade-up" className="desc max-w-[50rem]">
          Prana Consultants stands at the intersection of creativity and technology. We don't just advocate for AI; we engineer it into the very fabric of your business operations, ensuring you stay ahead in a rapidly evolving digital landscape.
        </p>

        <div
          data-aos="fade-up"
          className=" grid sm:grid-cols-2 md:grid-cols-3  mt-3 gap-5"
        >
          {allServices.map((service) => (
            <Link
              to={service.link}
              key={service.id}
              data-aos="fade-up"
              className="group h-full"
            >
              <div className="h-full bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-110"></div>

                <div className="flex flex-col h-full justify-between relative z-10 gap-6">
                  <div className="flex flex-col gap-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                      <div className="text-2xl">
                        {service.img}
                      </div>
                    </div>

                    <h5 className="font-raleway font-bold text-xl text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h5>

                    <p className="font-inter text-gray-600 leading-relaxed text-sm">
                      {service.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300 mt-2">
                    Learn More <PiCaretDoubleRightBold />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceItems;
