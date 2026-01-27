import React, { useState } from "react";
import { allServices } from "../../constant";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { IoMdClose } from "react-icons/io";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { useKeenSlider } from "keen-slider/react";

const OurServices = ({ length }) => {
  const [isOpen, setIsOpen] = useState(false);
  const services = allServices;
  const [selectedService, setSelectedService] = useState(services[0]);

  const handleSelectServiceToShowDetail = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  const [sliderRefone, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 3,
        spacing: 1,
      },
      mode: "free",
      breakpoints: {
        "(max-width: 1024px)": {
          slides: {
            perView: 2, // Show 2 slides for screens below lg
            spacing: 10, // Adjust spacing for better layout
          },
        },
        "(max-width: 768px)": {
          slides: {
            perView: 1, // Show 1 slide for screens below md
            spacing: 5, // Adjust spacing for compact layout
          },
        },
      },
      animation: {
        duration: 1500,
        easing: (t) => t,
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  // Button click handler
  const handleNextClick = () => {
    if (instanceRef.current) {
      instanceRef.current.next(); // Move to the next slide
    } else {
      console.warn("Slider instance is not available.");
    }
  };

  const handlePrevClick = () => {
    if (instanceRef.current) {
      instanceRef.current.prev(); // Move to the prev slide
    } else {
      console.log(instanceRef.current, "sdakfjaslkdfjlaksdjf");
      console.warn("Slider instance is not available.");
    }
  };
  return (
    <div className="py-[2rem] sm:py-[5rem] bg-backgroundcolor text-primarytextcolor">
      <div
        data-aos="fade-up"
        className="wrapper flex flex-col text-center gap-5 items-center"
      >
        <div data-aos="fade-up" className="gradient-rounded-text-box mb-2">
          Strategic Capabilities
        </div>
        <h2 data-aos="fade-up" className="heading-2 max-w-[50rem]">
          Next-Generation Intelligence, Engineered for Reliability
        </h2>
        <p data-aos="fade-up" className="desc max-w-[50rem]">
          PRANA CONSULTANTS harnesses the transformative potential of artificial intelligence
          to build robust technology ecosystems. We align our AI-driven insights with your
          strategic goals, enabling data-informed decision making and sustainable operational growth.
        </p>
        <div
          data-aos="fade-up"
          ref={sliderRefone}
          className="keen-slider grid sm:grid-cols-2 md:grid-cols-3   mt-3"
        >
          {services.map((service) => (
            <div className="keen-slider__slide p-4 h-full">
              <Link
                onClick={() => handleSelectServiceToShowDetail(service)}
                to={service.link}
                key={service.id}
                className="group h-full block"
              >
                <div className="h-full bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-110"></div>

                  <div className="flex flex-col gap-6 relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                      <div className="text-2xl">
                        {service.img}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <h5 className="font-raleway font-bold text-xl text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h5>
                      <p className="font-inter text-gray-600 leading-relaxed text-sm line-clamp-4">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300 mt-6 pt-4 border-t border-gray-100">
                    Learn More <PiCaretDoubleRightBold />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div
          // data-aos="fade-up"
          className="flex justify-center items-center gap-10 mt-2"
        >
          <button
            className="text-primary text-5xl hover:text-primary/70 transition-all duration-200"
            onClick={handlePrevClick}
            aria-label="Previous slide"
          >
            <IoArrowBackCircleOutline />
          </button>
          <button
            className="text-primary text-5xl hover:text-primary/70 transition-all duration-200"
            onClick={handleNextClick}
            aria-label="Next slide"
          >
            <IoArrowForwardCircleOutline />
          </button>
        </div>
        {length && (
          <Link to="/services" className="primary-btn mt-6">
            All Services
          </Link>
        )}
      </div>

      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="top"
        className="p-4 z-10 w-screen"
        lockBackgroundScroll
      >
        <div className="mb-3 flex items-center justify-end pr-[.7rem] py-[.4rem]">
          <button
            onClick={() => setIsOpen(false)}
            className="text-black text-[2.2rem]"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="flex flex-col gap-6 tex-white pb-[2rem]">
          <h1 className="heading-2">{selectedService.title}</h1>
          <p className="desc whitespace-pre-line">
            {selectedService.detailContent}
          </p>
        </div>
      </Drawer>
    </div>
  );
};

export default OurServices;
