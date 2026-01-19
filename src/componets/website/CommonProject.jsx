import React from "react";
import { appPortfolioHomepage, webPortfolioHomepage } from "../../constant";
import { useKeenSlider } from "keen-slider/react";
const animation = { duration: 60000, easing: (t) => t };

const CommonProject = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 1,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 639px)": {
        // Tailwind 'sm' and below
        slides: {
          perView: 1, // Show 1 slide
          spacing: 30,
        },
      },
      "(min-width: 640px) and (max-width: 767px)": {
        // Tailwind 'md' below (640px to 767px)
        slides: {
          perView: 2, // Show 2 slides
          spacing: 30,
        },
      },
      "(min-width: 768px) and (max-width: 1023px)": {
        // Tailwind 'lg' below (768px to 1023px)
        slides: {
          perView: 3, // Show 3 slides
          spacing: 30,
        },
      },
      "(min-width: 1024px)": {
        // Tailwind 'lg' and above (1024px and above)
        slides: {
          perView: 3, // Show 4 slides
          spacing: 30,
        },
      },
    },

    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  const [sliderRef2] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    rtl: true,
    slides: {
      perView: 1,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 639px)": {
        // Tailwind 'sm' and below
        slides: {
          perView: 1, // Show 1 slide
          spacing: 30,
        },
      },
      "(min-width: 640px) and (max-width: 767px)": {
        // Tailwind 'md' below (640px to 767px)
        slides: {
          perView: 2, // Show 2 slides
          spacing: 30,
        },
      },
      "(min-width: 768px) and (max-width: 1023px)": {
        // Tailwind 'lg' below (768px to 1023px)
        slides: {
          perView: 2, // Show 3 slides
          spacing: 30,
        },
      },
      "(min-width: 1024px)": {
        // Tailwind 'lg' and above (1024px and above)
        slides: {
          perView: 3, // Show 4 slides
          spacing: 30,
        },
      },
    },

    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div className="my-[5rem]">
      <div className="">
        <div data-aos="fade-up" data-aos-offset="-200">
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Our Masterpieces
          </div>
          <h3 className="heading-2 text-center my-16">Web Development</h3>
          <div ref={sliderRef} className="keen-slider ">
            {webPortfolioHomepage.map((obj) => (
              <div
                key={obj.id}
                className="keen-slider__slide h-full"
              >
                <div className="h-full bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden flex flex-col group transition-all duration-300">
                  <div className="relative overflow-hidden aspect-[4/3]">

                    <img
                      src={obj.img}
                      alt={obj.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-3">
                    <h4 className="font-raleway font-bold text-xl text-gray-900">{obj.title}</h4>
                    <p className="font-inter text-gray-600 text-sm leading-relaxed line-clamp-3">{obj.description}</p>
                    {/* <button className="text-primary font-semibold text-sm flex items-center gap-2 mt-2 group/btn">
                      View Case Study <span className="text-lg transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3 className="heading-2 text-center my-16">Mobile Innovations</h3>

          <div ref={sliderRef2} className="keen-slider">
            {appPortfolioHomepage.map((obj) => (
              <div
                key={obj.title}
                className="keen-slider__slide h-full"
              >
                <div className="h-full bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden flex flex-col group transition-all duration-300">
                  <div className="relative overflow-hidden aspect-[4/3]">

                    <img
                      src={obj.img}
                      alt={obj.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-3">
                    <h4 className="font-raleway font-bold text-xl text-gray-900">{obj.title}</h4>
                    <p className="font-inter text-gray-600 text-sm leading-relaxed line-clamp-3">{obj.description}</p>
                    {/* <button className="text-primary font-semibold text-sm flex items-center gap-2 mt-2 group/btn">
                      View Case Study <span className="text-lg transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonProject;
