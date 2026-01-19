import React from "react";
import { useKeenSlider } from "keen-slider/react";
import profileImg1 from "../../assets/images/profileimg-1.png";
import profileImg2 from "../../assets/images/profileimg-2.jpg";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { reviews } from "../../constant";

const Testimonials = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 2,
        spacing: 20,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: {
            perView: 1,
            spacing: 20,
          },
        },
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
    }
  };

  const handlePrevClick = () => {
    if (instanceRef.current) {
      instanceRef.current.prev(); // Move to the prev slide
    }
  };
  return (
    <div className="py-[3rem]">
      <div className="wrapper flex flex-col items-center gap-7">
        <div
          className="gradient-rounded-text-box"
          data-aos="fade-up"
          data-aos-offset={-400}
        >
          Client Stories
        </div>
        <h2
          className="heading-2 text-primarytextcolor mb-2 text-center"
          data-aos-offset={-400}
          data-aos="fade-up"
        >
          Voices of Success
        </h2>
        <div
          ref={sliderRef}
          className="keen-slider"
          data-aos="fade-up"
          data-aos-offset={-400}
        >
          {reviews.map((item) => (
            <div
              key={item.id}
              className="keen-slider__slide h-full"
            >
              <div className="h-full bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 flex flex-col justify-between gap-6 relative">
                <div className="absolute top-6 right-8 text-6xl text-primary/10 font-serif leading-none">"</div>
                <p className="font-inter text-gray-600 leading-relaxed italic relative z-10">
                  {item.desc}
                </p>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm"></div>
                    <img
                      src={item.profileImg}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white relative z-10"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-raleway font-bold text-gray-900 text-lg">{item.name}</p>
                    <p className="text-sm text-primary font-medium">{item.role}</p>
                  </div>
                </div>
              </div>
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
      </div>
    </div>
  );
};

export default Testimonials;
