import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const DateInput = ({
  label,
  name,
  onChange,
  value,
  error,
  errorText,
  className,
  onBlur,
}) => {
  return (
    <>
      <style>
        {`
         .custom-date-input {
            position: relative;
        }

.custom-date-input input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
}

.custom-date-input input[type="date"] {
  position: relative;
  padding-right: 2.5rem; /* Space for the custom icon */
}

.custom-date-input .calendar-icon {
  position: absolute;
  right: 10px; /* Adjust as needed */
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none; /* Ensure the icon does not interfere with input focus */
  color: #98A2B3; /* Custom icon color */
}

        `}
      </style>
      <div className="flex flex-col justify-start items-start w-full">
        <div className="text-[#344054] text-[14px] leading-4 font-semibold mb-2 flex items-center gap-x-2">
          {label}
        </div>
        <div className="relative w-full custom-date-input">
          <input
            type="date"
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            className={`${
              error
                ? "border-red-500"
                : "border border-[#D0D5DD] shadow-xs outline-none"
            } px-3 py-2 rounded-lg w-full bg-[#F7F7F7] border border-[#D0D5DD] shadow-xs outline-none text-[1rem] leading-6 font-normal placeholder:text-[#667085] text-[#667085] relative ${className}`}
          />
          <FaRegCalendarAlt className="calendar-icon" />
        </div>
        {error && (
          <p className="text-red-500 text-[.88rem] leading-4 mt-2 font-light">
            {errorText}
          </p>
        )}
      </div>
    </>
  );
};

export default DateInput;
