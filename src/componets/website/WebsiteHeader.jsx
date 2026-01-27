import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { logoImg, routes } from "../../constant";
import { Link, useLocation } from "react-router-dom";

const WebsiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`pt-2 pb-2 fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-black/40 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
        }`}
    >
      <div className="wrapper flex justify-between items-center gap-10">
        <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
          <Link to="/">
            <img
              src={logoImg}
              className={`${!isScrolled ? "invert opacity-90" : "invert-0"} h-[3.5rem] md:h-[4.5rem] ml-0 transition-all duration-300`}
              alt="logo"
            />
          </Link>
          <div className="lg:flex items-center gap-8 hidden">
            {routes.map(({ name, path }) => (
              <Link
                to={`${path}`}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-primary relative group ${pathname === `${path}`
                    ? "text-primary font-semibold"
                    : isScrolled
                      ? "text-gray-100"
                      : "text-white/90"
                  }`}
                key={path}
              >
                {name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${pathname === path ? "w-full" : ""}`}></span>
              </Link>
            ))}
            <Link className={`text-sm font-medium tracking-wide text-white/90 hover:text-primary transition-all duration-300`}>Blogs</Link>
          </div>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="py-4 px-10 z-10"
        >
          <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-[2.2rem]"
            >
              <IoMdClose />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {routes.map(({ name, path }) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={path}
                className="text-3xl text-white font-medium transition-colors duration-300 link"
                to={path}
              >
                {name}
              </Link>
            ))}
          </div>
        </Drawer>
        <div
          className="block lg:hidden justify-self-end"
          onClick={toggleDrawer}
        >
          <Hamburger
            color="white"
            size="23"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default WebsiteHeader;
