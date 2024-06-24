//App
import React, { useState } from "react";

//Component(s)
import CheckboxInput from "../../Form Fields/CheckboxInput";
import PreviousRegButton from "../../Buttons/PreviousRegButton";
import NextRegButton from "../../Buttons/NextRegButton";
import { useFormik } from "formik";
import { accountTypeSchema } from "../Authentication Pages/formikUtils";

const AccountType = ({ handleNext, formData }) => {
  const [selectedAccountType, setSelectedAccountType] = useState(
    formData?.accountType || ""
  );
  const formik = useFormik({
    initialValues: {
      accountType: selectedAccountType,
    },
    validationSchema: accountTypeSchema,
    onSubmit: (values) => {
      handleNext({ accountType: selectedAccountType });
    },
  });
  return (
    <>
      <section className="lg:scale-75 xlg:scale-100 flex items-center justify-center h-screen">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center justify-center border border-[#D0D5DD] bg-[#FFFFFF] py-11 px-[39px] rounded-xl gap-8"
        >
          <div className="flex flex-col space-y-3 items-center">
            <h3 className="text-[30px] text-tx-primary text-center font-semibold">
              Account type
            </h3>
            <p className="w-[380px] text-tx-tertiary text-center">
              Choose your account type
            </p>
          </div>
          <div className="flex flex-col space-y-4 mb-[129px]">
            <CheckboxInput
              label="Small business owner"
              expiry="Expiry 06/2024"
              name="accountType"
              value="Small business owner"
              onChange={formik.handleChange}
              groupValue={selectedAccountType}
              setGroupValue={setSelectedAccountType}
              /* This line of code is setting the `className` attribute of the `RadioInput` component based on
      a condition. */
              //   className={values.radioGroup === "option1" ? "active" : ""}
            />
            <CheckboxInput
              label="Online only business"
              expiry="Expiry 06/2024"
              name="accountType"
              value="Online only business"
              onChange={formik.handleChange}
              groupValue={selectedAccountType}
              setGroupValue={setSelectedAccountType}
              //   className={values.radioGroup === "option2" ? "active" : ""}
            />
            <CheckboxInput
              label="Large business"
              expiry="Expiry 06/2024"
              name="accountType"
              value="Large business"
              onChange={formik.handleChange}
              groupValue={selectedAccountType}
              setGroupValue={setSelectedAccountType}
              //   className={values.radioGroup === "option3" ? "active" : ""}
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <PreviousRegButton
              btnName={"Prev"}
              //   value={formik.values.code}
            />
            <NextRegButton
              btnName={"Next"}
              onClick={formik.handleSubmit}
              //   value={formik.values.code}
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default AccountType;
