import React from "react";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-primary/5">
      <div className="wrapper h-full flex flex-col items-center py-[8rem] gap-3 text-[#2e2e45] text-center">
        <h1 className="heading-1">Submission Received</h1>
        <p className="desc !font-semibold">
          Your inquiry is in our queue. Our team will analyze your request and connect with you shortly.
        </p>
        <Link to="/" className="primary-btn w-fit mt-4 text-black">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Thankyou;
