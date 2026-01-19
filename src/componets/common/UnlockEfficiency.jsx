import React from "react";
import { Link } from "react-router-dom";

const UnlockEfficiency = () => {
  return (
    <section className="py-[3rem] text-primarytextcolor bg-backgroundcolor">
      <div
        data-aos-offset={-400}
        data-aos="fade-up"
        className="wrapper rounded-3xl bg-gradient-to-br from-primary to-secondary p-12 md:p-20 text-center relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-semibold tracking-wider uppercase text-white">Accelerate Growth</div>
          <h2 className="font-raleway text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl">Poised to Revolutionize Your Industry?</h2>
          <p className="font-inter text-gray-300 text-lg leading-relaxed max-w-2xl">
            Our mandate is to equip you with AI-driven capabilities that scale effortlessly.
            Discover how our avant-garde services can empower your enterprise to
            shatter ceilings—let’s initiate a dialogue and construct a smarter, future-proof legacy together!
          </p>
          <Link to="/contact-us" className="white-btn">
            Start the Conversation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UnlockEfficiency;
