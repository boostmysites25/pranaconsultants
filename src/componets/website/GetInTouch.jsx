import React from "react";
import image from "../../assets/images/contactimage.jpg";
const GetInTouch = () => {
  return (
    <div id="contact" className="pb-[5rem] relative">
      {/* <div className="blurred-red-circle h-[25rem] w-[25rem] bottom-[2rem] right-3 -z-10"></div> */}
      {/* <div className="blue-bg-shape bottom-[-2rem] left-[-2rem] -z-10 rotate-[-45deg]"></div> */}
      <div className="wrapper grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-stretch items-center gap-7">
        <div className="flex flex-col gap-5">
          <h1 className="heading text-center text-lg font-medium lg:text-start">
            Ready to Pioneer the Future? <br /> Let’s Engineer Your Vision
          </h1>
          <p className="description text-center lg:text-start">
            Connect with us to explore how our advanced technological frameworks can accelerate your strategic trajectory.
          </p>
          <img
            src={image}
            alt=""
            className="max-h-[25rem] object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col items-start gap-4 w-full">
          <p className="gradient-rounded-text-box">Initiate Dialogue</p>
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-card w-full border border-gray-100 relative overflow-hidden">

            <h2 className="text-3xl font-raleway font-bold text-gray-900 mb-8">
              Partner with Us for Digital Excellence
            </h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-6"
            >
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Name*</label>
                  <input
                    type="text"
                    className="w-full outline-none p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    required
                    autoComplete="off"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Email*</label>
                  <input
                    type="email"
                    className="w-full outline-none p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    required
                    autoComplete="off"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Subject*</label>
                  <input
                    type="text"
                    className="w-full outline-none p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    required
                    autoComplete="off"
                    placeholder="Enter subject"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full outline-none p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    autoComplete="off"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Message*</label>
                <textarea
                  rows="4"
                  placeholder="Enter your message here"
                  className="w-full outline-none p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  required
                  autoComplete="off"
                />
              </div>
              <button className="primary-btn w-fit mt-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
