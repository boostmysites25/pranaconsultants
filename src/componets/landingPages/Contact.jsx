import React, { useState } from "react";
import { useForm } from "react-hook-form";
import image from "../../assets/images/contactimage.jpg";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { companyDetails } from "../../constant";
const Contact = () => {
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

    var emailBody = "Name: " + data.fullName + "\n\n";
    emailBody += "Email: " + data.email + "\n\n";
    emailBody += "Phone: " + data.mobileNumber + "\n\n";
    // emailBody += "Subject: " + data.subject + "\n\n";
    emailBody += "Message:\n" + data.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      // to: "remeesreme4u@gmail.com",
      subject: "You have a new message from PRANA CONSULTANTS",
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
        toast.success("Inquiry transmitted successfully.");
        reset();
        navigate("/thank-you");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  return (
    <div
      id="contact"
      className="py-24 bg-gray-50 text-gray-900"
    >
      <div className="wrapper">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6" data-aos="fade-right">
            <div className="gradient-rounded-text-box w-fit">Connect</div>
            <h2 className="text-4xl md:text-5xl font-bold font-raleway text-gray-900 leading-tight">Initiate Your Transformation</h2>
            <p className="text-lg text-gray-600 font-inter leading-relaxed">
              Connect with
              <span className="font-bold text-gray-900"> PRANA CONSULTANTS </span> to unlock your digital potential. Together, we will engineer solutions that align with your strategic vision, elevating your business to unprecedented heights.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-2xl mt-4 max-h-[400px]">
              <img
                src={image}
                alt="Contact Us"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-card border border-gray-100" data-aos="fade-left">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6"
            >
              <div className="group">
                <label className="text-sm font-semibold text-gray-700 ml-1 mb-2 block">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full outline-none p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="Enter Full Name"
                  {...register("fullName", { required: "Full name is required" })}
                />
                {errors.fullName && (
                  <span className="text-red-500 text-sm ml-1 mt-1 block">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              <div className="group">
                <label className="text-sm font-semibold text-gray-700 ml-1 mb-2 block">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="w-full outline-none p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="Enter Mobile Number"
                  {...register("mobileNumber", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
                {errors.mobileNumber && (
                  <span className="text-red-500 text-sm ml-1 mt-1 block">
                    {errors.mobileNumber.message}
                  </span>
                )}
              </div>

              <div className="group">
                <label className="text-sm font-semibold text-gray-700 ml-1 mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full outline-none p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="Enter Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm ml-1 mt-1 block">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="group">
                <label className="text-sm font-semibold text-gray-700 ml-1 mb-2 block">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full outline-none p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder="Enter Message"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm ml-1 mt-1 block">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button className="primary-btn w-full mt-4" type="submit">
                {spinner ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
