import React, { lazy, useState } from "react";
import Banner from "../../componets/website/Banner";
import { Link, useNavigate } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { companyDetails } from "../../constant";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const MapComponent = lazy(() => import("../../componets/website/MapComponent"));

const ContactUs = () => {
  const [spinner, setSpinner] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    setSpinner(true);

    var emailBody = "Name: " + data.name + "\n\n";
    emailBody += "Email: " + data.email + "\n\n";
    emailBody += "Phone: " + data.phone + "\n\n";
    emailBody += "Subject: " + data.subject + "\n\n";
    emailBody += "Message:\n" + data.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      // to: "remeesreme4u@gmail.com",
      subject: "You have a new message from Prana Consultants",
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Email sent successfully");
        reset();
        navigate("/thank-you");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  return (
    <>
      <Banner page="Contact Us" />
      <div className="wrapper py-24 grid lg:grid-cols-[40%_auto] gap-12 lg:gap-24">
        <div
          data-aos="fade-right"
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <div className="gradient-rounded-text-box w-fit">Connect With Us</div>
            <h2 className="text-4xl md:text-5xl font-bold font-raleway text-gray-900 leading-tight">Initiate Dialogue</h2>
            <p className="text-lg text-gray-600 font-inter leading-relaxed">
              Let Prana Consultants serve as the catalyst for your digital evolution.
              Together, we will engineer solutions as dynamic and forward-thinking as your vision.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <Link
              to={`tel:${companyDetails.phone}`}
              className="flex items-center gap-5 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex justify-center items-center group-hover:bg-primary transition-colors duration-300">
                <FaPhone className="text-2xl text-primary group-hover:text-white transition-colors duration-300 scale-x-[-1]" />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-gray-900 text-lg">Call Us</p>
                <p className="text-gray-600">{companyDetails.phone}</p>
              </div>
            </Link>
            <Link
              to={`mailto:${companyDetails.email}`}
              className="flex items-center gap-5 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex justify-center items-center group-hover:bg-primary transition-colors duration-300">
                <IoMail className="text-3xl text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-gray-900 text-lg">Email</p>
                <p className="text-gray-600">{companyDetails.email}</p>
              </div>
            </Link>
            <div className="flex items-center gap-5 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex justify-center items-center group-hover:bg-primary transition-colors duration-300">
                <FaLocationDot className="text-2xl text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-gray-900 text-lg">Location</p>
                <p className="text-gray-600 max-w-xs">{companyDetails.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="bg-white rounded-3xl shadow-card p-8 md:p-10 border border-gray-100"
        >
          <h3 className="text-2xl font-bold font-raleway text-gray-900 mb-8">Strategic Inquiries</h3>
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Name</label>
              <input
                type="text"
                className="w-full outline-none p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm ml-1">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Email</label>
                <input
                  type="email"
                  className="w-full outline-none p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm ml-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Phone</label>
                <input
                  type="tel"
                  className="w-full outline-none p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="Enter phone number"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm ml-1">
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Subject</label>
              <input
                type="text"
                className="w-full outline-none p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                placeholder="Enter subject"
                {...register("subject", {
                  required: "Subject is required",
                })}
              />
              {errors.subject && (
                <span className="text-red-500 text-sm ml-1">
                  {errors.subject.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
              <textarea
                rows="5"
                className="w-full outline-none p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                placeholder="Enter your message"
                {...register("message", {
                  required: "Message is required",
                })}
              />
              {errors.message && (
                <span className="text-red-500 text-sm ml-1">
                  {errors.message.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="primary-btn w-full mt-2"
            >
              {spinner ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        <div className="flex lg:col-span-2 gap-5 items-center text-primarytextcolor mb-1 mx-auto">
          <p>Follow Us On:</p>
          <div className="flex items-center gap-3">
            <Link className="group w-[2.5rem] h-[2.5rem] rounded-full border-primary border flex justify-center items-center">
              <BsFacebook className="text-xl text-primarytextcolor group-hover:text-primary transition-all duration-300" />
            </Link>
            <Link className="group w-[2.5rem] h-[2.5rem] rounded-full border-primary border flex justify-center items-center">
              <BsTwitter className="text-xl text-primarytextcolor group-hover:text-primary transition-all duration-300" />
            </Link>
            <Link className="group w-[2.5rem] h-[2.5rem] rounded-full border-primary border flex justify-center items-center">
              <BsLinkedin className="text-xl text-primarytextcolor group-hover:text-primary transition-all duration-300" />
            </Link>
            <Link className="group w-[2.5rem] h-[2.5rem] rounded-full border-primary border flex justify-center items-center">
              <BsYoutube className="text-xl text-primarytextcolor group-hover:text-primary transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
      <MapComponent />
    </>
  );
};

export default ContactUs;
