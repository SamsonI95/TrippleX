//App
import React from "react";

//Component
import { ScaleLoader } from "react-spinners";

const AuthenticationFormButtons = ({ btnName, loading, value }) => {
  return (
    <button
      type="submit"
      className={
        loading || !value
          ? `bg-[#3538CD]/30 px-3 py-2 rounded-lg w-[353px] text-white gap-[32px]`
          : `bg-[#3538CD] px-3 py-2 rounded-lg w-[353px] text-white gap-[32px]`
      }
    >
      {loading ? (
        <ScaleLoader
          color="#fff"
          height={15}
          className="translate-y-[3px]"
          disabled={loading || !value}
          type="submit"
        />
      ) : (
        btnName
      )}
    </button>
  );
};

export default AuthenticationFormButtons;
