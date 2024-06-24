import React from "react";

import { FaArrowRight } from "react-icons/fa6";

const NextRegButton = ({ btnName, isDisabled, onClick }) => {
  return (
    <button
      type="submit"
      className={
        isDisabled
          ? `bg-[#3538CD]/30 px-3 py-2 rounded-lg w-[269px] text-white gap-[32px]`
          : `bg-[#3538CD] px-3 py-2 rounded-lg w-[269px] text-white gap-[32px]`
      }
      disabled={isDisabled}
      onClick={onClick}
    >
      <span className="flex items-center justify-center gap-2 text-[14px]">
        {btnName} <FaArrowRight />
      </span>
    </button>
  );
};

export default NextRegButton;
