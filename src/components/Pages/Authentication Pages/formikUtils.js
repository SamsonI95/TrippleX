import axios from "axios";
import * as Yup from "yup";

//Regex
const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#;:])[A-Za-z\d@$!%*?&#;:]{6,12}$/;

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const bvnRegExp = /^\d{11}$/;

const phoneRegExp = /^\d{12}$/;

//Validation Schema
export const signIn = Yup.object({
  email: Yup.string()
    .matches(emailRegExp, "Invalid Email Address")
    .required("Required"),
  password: Yup.string()
    .matches(passwordRegExp)
    .min(6, "Password must contain at least 6 characters!")
    .max(12, "Your password must not exceed 12 characters!")
    .required("Required"),
});

export const signUp = Yup.object({
  companyName: Yup.string().required("Required"),
  email: Yup.string()
    .matches(emailRegExp, "Invalid Email Address")
    .required("Required"),
  password: Yup.string()
    .matches(passwordRegExp)
    .min(6, "Password must contain at least 6 characters!")
    .max(12, "Your password must not exceed 12 characters!")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export const verifyEmail = Yup.object({
  code: Yup.string().required("required"),
});

export const accountTypeSchema = Yup.object({
  accountType: Yup.string()
    .oneOf(
      ["Small business owner", "Online only business", "Large business"],
      "Invalid Account Type"
    )
    .required("Account type is required"),
});

export const accountDetails = Yup.object({
  phoneNumber: Yup.string().required("required"),
  country: Yup.string().required("required"),
  state: Yup.string().required("required"),
  address: Yup.string().required("required"),
});

export const businessDetails = Yup.object().shape({
  countryInc: Yup.string().required("Country of incorporation is required"),
  registration: Yup.string().required("Registration type is required"),
  registrationNumber: Yup.string().required("Registration number is required"),
  certificateURL: Yup.string().required("Certificate URL is required"),
});

export const businessOwners = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  dob: Yup.string().required("Required"),
  nationality: Yup.string().required("Required"),
  bvn: Yup.string()
    .matches(bvnRegExp, "BVN must be exactly 11 digits")
    .required("Required"),
  shares: Yup.string().required("Required"),
});
