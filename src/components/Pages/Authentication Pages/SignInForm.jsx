//App
import React, { useState } from "react";
import { useFormik } from "formik";

//Component(s)
import InputField from "../../Form Fields/InputField";
import PasswordField from "../../Form Fields/PasswordField";
import AuthenticationFormButtons from "../../Buttons/AuthenticationFormButtons";
import { signIn } from "./formikUtils";
import { Link } from "react-router-dom";

//Firebase
import { auth } from "../../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignInForm = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signIn,
    onSubmit: async (values) => {
      setLoading(true);
      setError(null);
      try {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        navigate("/step-process"); // Navigate to step-process on successful sign-up
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    },
  });

  return (
    <>
      <section className=" border border-[#D0D5DD] py-11 px-16 rounded-xl">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col font-inter"
        >
          <div className="flex flex-col gap-3">
            <h3 className="text-[30px] text-tx-primary font-semibold">
              Sign in
            </h3>
            <p className="w-[353px] text-tx-tertiary ">
              Create a tripplex account for your business and never miss out on
              what matters.
            </p>
          </div>
          <div className="flex flex-col py-8 gap-5">
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
              label={`Password`}
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
          </div>
          <AuthenticationFormButtons
            loading={loading}
            btnName={"Sign in"}
            value={formik.values.email}
          />
          <div className="mt-8">
            <p className="text-[14px] text-tx-tertiary">
              Don't have an account!{" "}
              <span className="text-[14px] text-[#444CE7] font-semibold">
                <Link to="/">Sign up</Link>
              </span>
            </p>
          </div>
        </form>
      </section>
    </>
  );
};

export default SignInForm;
