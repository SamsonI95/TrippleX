//App
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Page(s)
import SignIn from "./components/Pages/Authentication Pages/SignIn";
import SignUp from "./components/Pages/Authentication Pages/SignUp";
import VerifyEmail from "./components/Pages/Authentication Pages/VerifyEmail";
import StepProcess from "./components/Pages/Registeration Pages/StepProcess";
import AccountType from "./components/Pages/Registeration Pages/AccountType";
import AccountDetails from "./components/Pages/Registeration Pages/AccountDetails";
import BusinessDetails from "./components/Pages/Registeration Pages/BusinessDetails";
import BusinessOwners from "./components/Pages/Registeration Pages/BusinessOwners";

//Style
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/step-process" element={<StepProcess />} />
          {/* <Route path="/account-type" element={<AccountType />} />
          <Route path="/account-details" element={<AccountDetails />} />
          <Route path="/business-details" element={<BusinessDetails />} />
          <Route path="/business-owners" element={<BusinessOwners />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
