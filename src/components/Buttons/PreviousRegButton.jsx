import React from "react";

import { FaArrowLeft } from "react-icons/fa6";

const PreviousRegButton = ({ btnName, isDisabled,onClick }) => {
  return (
    <button
      type="submit"
      className={
        isDisabled
          ? `bg-[#F2F4F7]/30 px-3 py-2 rounded-lg w-[122px] text-[#98A2B3] gap-[32px]`
          : `bg-[#F2F4F7] px-3 py-2 rounded-lg w-[122px] text-[#98A2B3] gap-[32px]`
      }
      disabled={isDisabled}
      onClick={onClick}
    >
      <span className="flex items-center justify-center gap-2 text-[14px]">
        <FaArrowLeft />
        {btnName}
      </span>
    </button>
  );
};

export default PreviousRegButton;
