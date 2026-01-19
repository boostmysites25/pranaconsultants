import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  whyChooseUsPng,
} from "../../constant";
import whyus1 from "../../assets/images/whyus1.jpg";
import whyus2 from "../../assets/images/whyus2.jpg";
const WhyChooseUs = () => {
  const totalYrs = 3;
  const totalOnTimeCompletionPercentage = 100;
  const totalExperts = 10;
  const totalClients = 50;

  const [yrs, setYrs] = useState(0);
  const [onTimeCompletion, setOnTimeCompletion] = useState(0);
  const [experts, setExperts] = useState(0);
  const [clients, setClients] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      // Animate Years of Experience
      const yrsInterval = setInterval(() => {
        setYrs((prev) => Math.min(prev + 1, totalYrs));
      }, 100);

      // Animate Experts
      const expertsInterval = setInterval(() => {
        setExperts((prev) => Math.min(prev + 1, totalExperts));
      }, 100);

      // Animate Clients
      const clientsInterval = setInterval(() => {
        setClients((prev) => Math.min(prev + 1, totalClients));
      }, 50);

      // Animate On Time Completion Percentage
      const completionInterval = setInterval(() => {
        setOnTimeCompletion((prev) =>
          Math.min(prev + 1, totalOnTimeCompletionPercentage)
        );
      }, 20);

      // Clear intervals when animation reaches target values
      return () => {
        clearInterval(yrsInterval);
        clearInterval(expertsInterval);
        clearInterval(clientsInterval);
        clearInterval(completionInterval);
      };
    }
  }, [inView]);

  return (
    <section className="py-[3rem] bg-backgroundcolor">
      <div className="wrapper text-center text-primarytextcolor flex flex-col gap-7">
        <div
          data-aos-offset={-200}
          data-aos="fade-up"
          className="gradient-rounded-text-box mx-auto"
        >
          The Prana Advantage
        </div>
        <div className="flex flex-col gap-5">
          <h2 data-aos-offset={-200} data-aos="fade-up" className="heading-2">
            Engineered for Excellence, Driven by Intelligence
          </h2>
          <p
            data-aos-offset={-200}
            data-aos="fade-up"
            className="desc max-w-[40rem] mx-auto"
          >
            Prana Consultants is committed to architecting AI-enhanced ecosystems
            that are precision-calibrated to your operational matrix. We merge
            technical rigor with creative strategy to manifest a digital reality
            that propels your business into a new tier of performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { title: "Technical Mastery", icon: whyChooseUsIcon1, desc: "As a premier consultancy, we specialize in deploying sophisticated, high-impact architectures that integrate seamlessly with your existing infrastructure." },
              { title: "Adaptive Innovation", icon: whyChooseUsIcon2, desc: "We maintain a fluid operational stance, allowing us to pivot instantly and implement novel technologies that keep you ahead of market disruptions." },
              { title: "Transparent Synergy", icon: whyChooseUsIcon3, desc: "We believe in radical transparency. Our collaborative protocols ensure you are an integral part of the development lifecycle at every stage." },
              { title: "Fortified Security", icon: whyChooseUsIcon4, desc: "We employ defense-in-depth strategies, utilizing advanced encryption and compliance frameworks to ensure your data remains an impenetrable asset." }
            ].map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <img src={item.icon} className="h-8 object-contain" alt={item.title} />
                </div>
                <h5 className="text-xl font-bold font-raleway text-gray-900 mb-4">{item.title}</h5>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-[3rem]">
          <div
            ref={ref}
            data-aos-offset={-200}
            data-aos="fade-up"
            className="w-full text-white grid sm:grid-cols-2 lg:grid-cols-4 gap-8 rounded-3xl bg-primary shadow-2xl shadow-primary/30 p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-white/0 opacity-50"></div>
            {[
              { value: yrs, label: "Years of Experience", suffix: "+" },
              { value: experts, label: "Expert Team", suffix: "+" },
              { value: clients, label: "Clients", suffix: "+" },
              { value: onTimeCompletion, label: "On Time Completion", suffix: "%" }
            ].map((stat, idx) => (
              <div key={idx} className="w-full flex flex-col items-center justify-center relative z-10">
                <div className="flex items-start gap-1">
                  <h1 className="text-5xl md:text-6xl font-bold font-raleway tracking-tight">{stat.value}</h1>
                  <span className="text-2xl font-medium text-orange-300 mt-2">{stat.suffix}</span>
                </div>
                <p className="font-medium mt-2 text-white/80 uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
