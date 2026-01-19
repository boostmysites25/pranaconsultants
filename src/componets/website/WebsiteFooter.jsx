import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { companyDetails, logoImg, routes } from "../../constant";
import { Link } from "react-router-dom";

const WebsiteFooter = () => {
  return (
    <div className="py-16 bg-[#3d0000] border-t border-white/5">
      <div className="wrapper text-white">
        <div className="flex md:flex-row flex-col justify-between gap-12 lg:gap-24">
          <div className="flex flex-col items-start gap-6 max-w-sm">
            <img src={logoImg} className="h-[3.5rem] invert opacity-90" alt="" />
            <p className="desc !text-gray-200 !text-sm leading-relaxed text-start">
              We have established ourselves as the premier partner for organizations
              seeking digital transformation and enhanced operational efficiency.
            </p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-12 lg:gap-20 w-full md:w-auto">
            <div className="flex flex-col gap-4 min-w-[120px]">
              <h6 className="font-semibold text-lg text-white mb-2 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-0.5 after:bg-primary">Quick Links</h6>
              {routes.map(({ name, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="text-gray-400 text-sm hover:text-primary hover:translate-x-1 transition-all duration-300"
                >
                  {name}
                </Link>
              ))}
              <Link className="text-gray-400 text-sm hover:text-primary hover:translate-x-1 transition-all duration-300">Blogs</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h6 className="font-semibold text-lg text-white mb-2 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-0.5 after:bg-primary">Contact Us</h6>
              <div className="flex flex-col gap-1">
                <h6 className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Phone</h6>
                <Link
                  to={`tel:${companyDetails.phone}`}
                  className="text-gray-300 text-sm hover:text-primary transition-colors"
                >
                  {companyDetails.phone}
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <h6 className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Email</h6>
                <Link
                  // to={`mailto:${companyDetails.email}`}
                  className="text-gray-300 text-sm hover:text-primary transition-colors"
                >
                  {companyDetails.email}
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <h6 className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Office Address</h6>
                <p className="text-gray-300 text-sm max-w-[18rem] leading-relaxed">
                  {companyDetails.address}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 mt-7 border-t text-gray-500 border-primary w-full">
          <div className="flex justify-between items-center gap-5 w-full flex-col md:flex-row">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Prana Consultants. All rights reserved.</p>
            <div className="flex gap-4 items-center">
              {[BsFacebook, BsTwitter, BsLinkedin, BsYoutube].map((Icon, idx) => (
                <Link key={idx} className="group p-2 rounded-full bg-white/5 hover:bg-primary/20 transition-all duration-300">
                  <Icon className="text-lg text-gray-400 group-hover:text-primary transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteFooter;
