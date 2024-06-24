//App
import React, { useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

//Component(s)
import InputField from "../../Form Fields/InputField";
import PasswordField from "../../Form Fields/PasswordField";
import ConfirmPasswordField from "../../Form Fields/ConfirmPassword";
import AuthenticationFormButtons from "../../Buttons/AuthenticationFormButtons";
import { signUp } from "./formikUtils";

//Firebase
import { auth } from "../../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpForm = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      companyName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUp,
    onSubmit: async (values) => {
      setLoading(true);
      setError(null);
      try {
        // Call Firebase createUserWithEmailAndPassword method
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;
        setLoading(false);
        navigate("/step-process"); // Navigate to step-process on successful sign-up
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    },
  });
  return (
    <section className="lg:scale-75 xlg:scale-100 flex items-center justify-center h-screen">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col font-inter border border-[#D0D5DD] py-11 px-16 rounded-xl"
      >
        <div className="flex flex-col gap-3">
          <h3 className="text-[30px] text-tx-primary font-semibold">
            Create your account
          </h3>
          <p className="w-[353px] text-tx-tertiary ">
            Create a tripplex account for your business and never miss out on
            what matters.
          </p>
        </div>
        <div className="flex flex-col py-6 gap-5">
          <InputField
            label="Company name"
            placeholder="Enter your company name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="companyName"
            value={formik.values.companyName}
            type="text"
            error={formik.touched.companyName && formik.errors.companyName}
            errorText={formik.errors.companyName}
          />
          <InputField
            label={`Your email`}
            placeholder={`Enter your work email`}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={`email`}
            value={formik.values.email}
            type={`text`}
            error={formik.touched.email && formik.errors.email}
            errorText={formik.errors.email}
          />
          <PasswordField
            label={`Create Password`}
            placeholder={`Enter Password`}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={`password`}
            value={formik.values.password}
            type={isClicked ? `text` : `password`}
            error={formik.touched.password && formik.errors.password}
            errorText={formik.errors.password}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />
          <ConfirmPasswordField
            label={`Confirm Password`}
            placeholder={`Confirm Password`}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={`confirmPassword`}
            value={formik.values.confirmPassword}
            type={isClicked ? `text` : `confirmPassword`}
            error={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            errorText={formik.errors.confirmPassword}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />
        </div>
        <AuthenticationFormButtons
          loading={loading}
          btnName={"Create account"}
          value={formik.values.email}
        />
        <div className="mt-8">
          <p className="text-[14px] text-tx-tertiary">
            Already have an account?{" "}
            <span className="text-[14px] text-[#444CE7] font-semibold">
              <Link to="/sign-in">Sign in</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default SignUpForm;
