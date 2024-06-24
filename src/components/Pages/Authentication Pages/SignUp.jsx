//App
import React from "react";

//Component(s)
import SignUpForm from "./SignUpForm";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen">
      <div className="relative w-full md:w-1/2 h-full flex items-center justify-center">
        <img
          src="/TripplexHeroSection.png"
          alt="TrippleX Hero Section"
          className="w-full h-auto max-h-screen object-fit"
        />
        <div className="absolute top-[55px] left-[45px]">
          <Link to="/#">
            <img src="/Logo.svg" alt="TrippleX logo" />
          </Link>
        </div>
        <div className="lg:scale-75 xlg:scale-100 absolute lg:bottom-[55px] xlg:bottom-[113px] text-white lg:left-[-20px] xlg:left-[45px] w-[539px]">
          <h3 className="text-[60px] leading-[72px] font-semibold">
            Be in smooth control of your Business finance
          </h3>
          <p className="w-[400px]">
            Set up your expenses one-time, while we ensure they are paid;
            on-time, every time.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center h-full">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
