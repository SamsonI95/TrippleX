//App
import React, { useState } from "react";

//Component(s)
import InputField from "../../Form Fields/InputField";
import DateInput from "../../Form Fields/DateInput";
import SelectInput from "../../Form Fields/SelectInput";
import PreviousRegButton from "../../Buttons/PreviousRegButton";
import NextRegButton from "../../Buttons/NextRegButton";
import { businessOwners } from "../Authentication Pages/formikUtils";
import { useFormik } from "formik";

//Data
import countries from "../../Data/countries.json";
import { useNavigate } from "react-router-dom";

const BusinessOwners = ({ handlePrev }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dob: "",
      nationality: "",
      bvn: "",
      shares: "",
    },
    validationSchema: businessOwners,
    onSubmit: async (values) => {
      setLoading(true);
      setError(null);
      navigate("/sign-in");
    },
  });

  const handleNext = () => {
    navigate("/sign-in");
  };

  return (
    <section className="lg:scale-[.68] xlg:scale-100 flex items-center justify-center h-screen">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center border border-[#D0D5DD] bg-[#FFFFFF] py-11 px-[39px] rounded-xl gap-8"
      >
        <div className="flex flex-col gap-3 items-center">
          <h3 className="text-[30px] text-tx-primary text-center font-semibold">
            Business owners
          </h3>
          <p className="w-[380px] text-tx-tertiary text-center">
            Enter your details below
          </p>
        </div>
        <div className="flex flex-col space-y-5 mb-[76px]">
          <InputField
            label={`First name`}
            placeholder={``}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={`firstName`}
            value={formik.values.firstName}
            type={`text`}
            error={formik.touched.firstName && formik.errors.firstName}
            errorText={formik.errors.firstName}
          />
          <InputField
            label={`Last name`}
            placeholder={``}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={`lastName`}
            value={formik.values.lastName}
            type={`text`}
            error={formik.touched.lastName && formik.errors.lastName}
            errorText={formik.errors.lastName}
          />

          <DateInput
            label={`Date of birth`}
            placeholder={``}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.dob}
            name={`dob`}
          />
          <SelectInput
            label={`Nationality`}
            options={countries}
            placeholder={``}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={`nationality`}
            value={formik.values.nationality}
          />
          <InputField
            label={`BVN`}
            placeholder={``}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={`bvn`}
            value={formik.values.bvn}
            type={`text`}
            error={formik.touched.bvn && formik.errors.bvn}
            errorText={formik.errors.bvn}
          />
          <InputField
            label={`Are you a business owner or own more than 10% shares`}
            placeholder={``}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={`shares`}
            value={formik.values.shares}
            type={`text`}
            error={formik.touched.shares && formik.errors.shares}
            errorText={formik.errors.shares}
          />
        </div>
        <div className="space-x-9">
          <PreviousRegButton
            btnName={"Prev"}
            value={formik.values.code}
            onClick={handlePrev}
          />
          <NextRegButton btnName={"Finish"} onClick={handleNext} />
        </div>
      </form>
    </section>
  );
};

export default BusinessOwners;
