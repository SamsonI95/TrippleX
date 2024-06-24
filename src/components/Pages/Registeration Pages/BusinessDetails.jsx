//App
import React, { useState } from "react";

//Component(s)
import InputField from "../../Form Fields/InputField";
import CustomFileUpload from "../../Form Fields/CustomFileUpload";
import PreviousRegButton from "../../Buttons/PreviousRegButton";
import NextRegButton from "../../Buttons/NextRegButton";
import { businessDetails } from "../Authentication Pages/formikUtils";
import { useFormik } from "formik";

//Firebase
import { db, storage } from "../../../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const BusinessDetails = ({ handleNext, handlePrev }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (file) => {
    setFile(file);
  };

  const formik = useFormik({
    initialValues: {
      countryInc: "",
      registration: "",
      registrationNumber: "",
      certificateURL: "",
    },
    validationSchema: businessDetails,
    onSubmit: async (values) => {
      try {
        if (file) {
          const storageRef = ref(storage, `certificates/${file.name}`);
          await uploadBytes(storageRef, file);
          const downloadURL = await getDownloadURL(storageRef);
          values.certificateURL = downloadURL;
        }

        await addDoc(collection(db, "businessDetails"), values);
        handleNext(values);
      } catch (error) {
        console.error("Error submitting form", error);
      }
    },
  });
  return (
    <section className="lg:scale-75 xlg:scale-100 flex items-center justify-center h-screen">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center border border-[#D0D5DD] bg-[#FFFFFF] py-11 px-[39px] rounded-xl gap-8"
      >
        <div className="flex flex-col gap-3 items-center">
          <h3 className="text-[30px] text-tx-primary text-center font-semibold">
            Business name
          </h3>
          <p className="w-[380px] text-tx-tertiary text-center">
            Enter your details below
          </p>
        </div>
        <div className="flex flex-col space-y-5">
          <InputField
            label={`Country of incorporation`}
            placeholder={``}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={`countryInc`}
            value={formik.values.countryInc}
            type={`text`}
            error={formik.touched.countryInc && formik.errors.countryInc}
            errorText={formik.errors.countryInc}
          />
          <InputField
            label={`Registration type`}
            placeholder={``}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={`registration`}
            value={formik.values.registration}
            type={`text`}
            error={formik.touched.registration && formik.errors.registration}
            errorText={formik.errors.registration}
          />
          <InputField
            label={`Registration number (RC number)`}
            placeholder={``}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={`registrationNumber`}
            value={formik.values.registrationNumber}
            type={`text`}
            error={
              formik.touched.registrationNumber &&
              formik.errors.registrationNumber
            }
            errorText={formik.errors.registrationNumber}
          />
        </div>
        <div className="flex flex-col items-start justify-center mb-[62px]">
          <CustomFileUpload
            label={`Upload certificate of business name`}
            onFileChange={handleFileChange}
          />
          {file && <p className="mt-4">Selected file: {file.name}</p>}
        </div>
        <div className="space-x-9">
          <PreviousRegButton
            btnName={"Prev"}
            value={formik.values.code}
            onClick={handlePrev}
          />
          <NextRegButton
            btnName={"Next"}
            value={formik.values.code}
            onClick={handleNext}
          />
        </div>
      </form>
    </section>
  );
};

export default BusinessDetails;
