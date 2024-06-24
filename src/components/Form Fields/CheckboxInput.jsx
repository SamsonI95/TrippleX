import { useState } from "react";
import "./RadioInput.css";

const CheckBoxInput = ({
  label,
  name,
  onChange,
  value,
  checked,
  expiry,
  error,
  errorText,
  className,
  groupValue,
  setGroupValue,
}) => {
  const handleCheckboxChange = () => {
    setGroupValue(value);
    if (onChange) {
      const event = {
        target: {
          name: name,
          value: value,
        },
      };
      onChange(event);
    }
  };

  return (
    <div
      className={`flex justify-between items-center p-4 border-2 rounded-xl cursor-pointer w-full ${
        groupValue === value ? "border-[#3538CD]" : "border-[#EAECF0]"
      }`}
      onClick={handleCheckboxChange}
    >
      <div className="w-[351px] font-inter text-sm">
        <div className="text-tx-secondary font-semibold">{label}</div>
        <div className="text-tx-tertiary">{expiry}</div>
      </div>
      <label className="relative">
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={groupValue === value}
          onChange={() => {}}
          className="hidden"
        />
        <span
          className={`w-5 h-5 inline-block rounded border-2 cursor-pointer ${
            groupValue === value
              ? "bg-[#3538CD] border-[#3538CD]"
              : "bg-white border-[#EAECF0]"
          }`}
        >
          {groupValue === value && (
            <svg
              className="w-full h-full text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </span>
      </label>
    </div>
  );
};

export default CheckBoxInput;
