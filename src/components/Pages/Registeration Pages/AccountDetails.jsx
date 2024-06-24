//App
import React, { useState } from "react";

//Component(s)
import InputField from "../../Form Fields/InputField";
import PreviousRegButton from "../../Buttons/PreviousRegButton";
import NextRegButton from "../../Buttons/NextRegButton";
import { accountDetails } from "../Authentication Pages/formikUtils";
import { useFormik } from "formik";

const AccountDetails = ({ handleNext, handlePrev, formData }) => {
  const formik = useFormik({
    initialValues: {
      phoneNumber: formData?.phoneNumber || "",
      country: formData?.country || "",
      state: formData?.state || "",
      address: formData?.address || "",
    },
    validationSchema: accountDetails,
    onSubmit: (values) => {
      handleNext(values);
    },
  });
  return (
    <section className="lg:scale-75 xlg:scale-100 flex items-center justify-center h-screen">
      <form className="flex flex-col justify-center border border-[#D0D5DD] bg-[#FFFFFF] py-11 px-[39px] rounded-xl gap-8">
        <div className="flex flex-col space-y-3 items-center">
          <h3 className="text-[30px] text-tx-primary text-center font-semibold">
            Contact details
          </h3>
          <p className="w-[380px] text-tx-tertiary text-center">
            Enter your details below
          </p>
        </div>
        <div className="flex flex-col space-y-5 mb-[58.5px]">
          <InputField
            label={`Phone Number`}
            placeholder={``}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={`phoneNumber`}
            value={formik.values.phoneNumber}
            type={`text`}
            error={formik.touched.phoneNumber && formik.errors.phoneNumber}
            errorText={formik.errors.phoneNumber}
          />
          <InputField
            label={`Country of residence`}
            placeholder={``}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={`country`}
            value={formik.values.country}
            type={`text`}
            error={formik.touched.country && formik.errors.country}
            errorText={formik.errors.country}
          />
          <InputField
            label={`State`}
            placeholder={``}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={`state`}
            value={formik.values.state}
            type={`text`}
            error={formik.touched.state && formik.errors.state}
            errorText={formik.errors.state}
          />
          <InputField
            label={`Address`}
            placeholder={``}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={`address`}
            value={formik.values.address}
            type={`text`}
            error={formik.touched.address && formik.errors.address}
            errorText={formik.errors.address}
          />
        </div>
        <div className="space-x-9">
          <PreviousRegButton
            btnName={"Prev"}
            onClick={handlePrev}
          />
          <NextRegButton
            btnName={"Next"}
            onClick={formik.handleSubmit}
          />
        </div>
      </form>
    </section>
  );
};

export default AccountDetails;
