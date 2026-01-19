import React from "react";
import { appPortfolioHomepage, webPortfolioHomepage } from "../../constant";
import { useKeenSlider } from "keen-slider/react";

const animation = { duration: 60000, easing: (t) => t };

const Portfolio = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web-development");
  let portfolio = isWebDevelopment
    ? webPortfolioHomepage
    : appPortfolioHomepage;

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
  return (
    <div
      data-aos="fade-up"
      id="portfolio"
      className="text-black py-[2rem] relative"
    >
      {/* <div className="blue-bg-shape rotate-[-45deg] top-[2rem] right-3 -z-10"></div> */}
      {/* <div className="blurred-red-circle h-[25rem] w-[25rem] bottom-[-2rem] left-[-2rem] -z-10"></div> */}
      <div className="">
        <div className="flex flex-col items-center gap-5 text-black">
          <p className="gradient-text uppercase gradient-rounded-text-box">
            Success Stories
          </p>
          <h2 className="heading-2 text-center my-16">Featured Case Studies</h2>
          <div ref={sliderRef} className="keen-slider">
            {portfolio.map((obj) => (
              <div
                key={obj.title}
                className="keen-slider__slide h-auto p-2"
              >
                <div className="group h-full bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col relative">
                  <div className="relative h-[250px] lg:h-[300px] overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img
                      src={obj.img}
                      alt={obj.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow relative bg-white">
                    <h4 className="font-raleway font-bold text-2xl mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {obj.title}
                    </h4>
                    <p className="font-inter text-gray-600 leading-relaxed text-sm line-clamp-4">
                      {obj.description}
                    </p>
                    <div className="pt-6 mt-auto">
                      <div className="w-12 h-1 bg-primary/20 rounded-full group-hover:bg-primary group-hover:w-20 transition-all duration-300" />
                    </div>
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

export default Portfolio;
