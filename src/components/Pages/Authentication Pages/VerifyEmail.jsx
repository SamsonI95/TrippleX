//App
import React, { useState } from "react";
import { useFormik } from "formik";

//Component(s)
import InputField from "../../Form Fields/InputField";
import AuthenticationFormButtons from "../../Buttons/AuthenticationFormButtons";
import { verifyEmail } from "./formikUtils";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: verifyEmail,
    onSubmit: async (values) => {
      setLoading(true);
      setError(null);
    },
  });
  return (
    <section className="flex items-center justify-center h-screen">
      <form className="flex flex-col items-center justify-center border border-[#D0D5DD] py-11 px-16 rounded-xl gap-8">
        <div className="flex flex-col gap-3 items-center">
          <img
            src="Ellipse 1.svg"
            alt="verify email icon"
            width={50}
            height={50}
          />
          <h3 className="text-[30px] text-tx-primary text-center font-semibold">
            Verify your email
          </h3>
          <p className="w-[380px] text-tx-tertiary text-center">
            We have sent an email to jdoe.mobbin2@gmail.com with a verification
            code. If you don't see it, please check your spam folder.
          </p>
        </div>
        <div>
          <InputField
            label={`Verification code`}
            placeholder={`Enter your code`}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={`email`}
            value={formik.values.code}
            type={`text`}
            error={formik.touched.code && formik.errors.code}
            errorText={formik.errors.code}
          />
          <div className="text-[14px] text-[#444CE7] font-semibold text-right mt-[6px] mb-6">
            <Link>Resend code</Link>
          </div>
          <AuthenticationFormButtons
            loading={loading}
            btnName={"Verify and continue →"}
            value={formik.values.code}
          />
        </div>
        <div className="mt-8">
          <p className="text-[14px] text-tx-tertiary">
            Need help?{" "}
            <span className="text-[14px] text-[#444CE7] font-semibold">
              <Link to="/">Contact us</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default VerifyEmail;
