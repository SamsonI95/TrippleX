//App
import React, { useState } from "react";

//Data
import StepProcessData from "../../Data/StepProcessData.json";

//Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";

//Form(s)
import AccountDetails from "./AccountDetails";
import AccountType from "./AccountType";
import BusinessDetails from "./BusinessDetails";
import BusinessOwners from "./BusinessOwners";

//Icon(s)
import ActiveIcon from "../../../assets/ActiveIcon.svg";
import InactiveIcon from "../../../assets/InactiveIcon.svg";
import Logo2 from "../../../assets/Logo2.svg";

const StepProcess = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [formData, setFormData] = useState({});

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <AccountType handleNext={handleNext} formData={formData} />;
      case 2:
        return (
          <AccountDetails
            handleNext={handleNext}
            handlePrev={handlePrev}
            formData={formData}
          />
        );
      case 3:
        return (
          <BusinessDetails
            handleNext={handleNext}
            handlePrev={handlePrev}
            formData={formData}
          />
        );
      case 4:
        return (
          <BusinessOwners
            handleNext={handleNext}
            handlePrev={handlePrev}
            formData={formData}
          />
        );
      default:
        return null;
    }
  };

  //Handle step process buttons
  const handleNext = async (newData) => {
    const updatedFormData = { ...formData, ...newData };
    setFormData(updatedFormData);

    if (currentStep === StepProcessData.length) {
      try {
        await addDoc(collection(db, "users"), updatedFormData);
        console.log("All data written to Firestore");
        setComplete(true);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-col items-start mr-8 bg-[#F2F4F7] p-[30px] w-[335px] ">
        <div className="mb-[117px]">
          <img src={Logo2} alt="logo" />
        </div>
        {StepProcessData.map((step, i) => (
          <div
            key={i}
            className={`step-item flex space-x-3 h-[62px] ${
              currentStep === i + 1 ? "active" : ""
            } ${i + 1 < currentStep || complete ? "complete" : ""}`}
          >
            <div className="step flex flex-col items-center">
              {i + 1 < currentStep || complete ? (
                <img src={ActiveIcon} alt="Completed" width={24} height={24} />
              ) : currentStep === i + 1 ? (
                <img
                  src={ActiveIcon}
                  alt="Active Step"
                  width={24}
                  height={24}
                />
              ) : (
                <img
                  src={InactiveIcon}
                  alt="Inactive Step"
                  width={24}
                  height={24}
                />
              )}
              {i < StepProcessData.length - 1 && (
                <div
                  className={`w-[2px] h-[34px] my-1 ${
                    currentStep > i + 1 ? "bg-[#3538CD]" : "bg-[#D1D5DB]"
                  }`}
                ></div>
              )}
            </div>
            <div>
              <p
                className={`text-sm font-semibold ${
                  currentStep === i + 1 ? "text-[#3538CD]" : "text-tx-secondary"
                }`}
              >
                {step.name}
              </p>
              <p
                className={`text-sm ${
                  currentStep === i + 1 ? "text-[#3538CD]" : "text-tx-tertiary "
                }`}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1">
        {renderForm()}
        {/* {!complete && (
          <button
            className="btn mt-4"
            onClick={() => {
              currentStep === StepProcessData.length
                ? setComplete(true)
                : setCurrentStep((prev) => prev + 1);
            }}
          >
            {currentStep === StepProcessData.length ? "Finish" : "Next"}
          </button>
        )} */}
      </div>
    </div>
  );
};

export default StepProcess;
