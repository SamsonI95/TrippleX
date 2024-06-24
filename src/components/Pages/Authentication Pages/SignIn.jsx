//App
import React from "react";

//Component(s)
import SignInForm from "./SignInForm";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full xlg:h-screen">
      <div className="relative w-full md:w-1/2 h-full flex items-center justify-center">
        <img
          src="/TripplexHeroSection.png"
          alt="TrippleX Hero Section"
          className="image lg:object-fill lg:h-screen w-full"
        />
        <div className="absolute lg:top-[55px] xlg:top-[113px] left-[45px]">
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
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
